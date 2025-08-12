'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Header from './Header'
import StatisticsCards from './StatisticsCards'
import CompanyList from './CompanyList'
import CompanyForm from './CompanyForm'
import FilterBar from './FilterBar'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

type Company = Database['public']['Tables']['companies']['Row']

interface DashboardFilters {
  search: string
  status: string
  source: string
  team: string
  month: string
  responsiblePerson: string
}

export default function Dashboard() {
  const { userProfile } = useAuth()
  const [companies, setCompanies] = useState<Company[]>([])
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [showCompanyForm, setShowCompanyForm] = useState(false)
  const [editingCompany, setEditingCompany] = useState<Company | null>(null)
  const [filters, setFilters] = useState<DashboardFilters>({
    search: '',
    status: '',
    source: '',
    team: '',
    month: '',
    responsiblePerson: '',
  })

  const fetchCompanies = async () => {
    setLoading(true)
    try {
      let query = supabase.from('companies').select('*')

      // Apply role-based filtering
      if (userProfile?.role === 'user') {
        query = query.eq('user_id', userProfile.auth_id)
      }

      // Apply team filtering
      if (userProfile?.team) {
        query = query.eq('team', userProfile.team)
      }

      const { data, error } = await query.order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching companies:', error)
        return
      }

      setCompanies(data || [])
    } catch (error) {
      console.error('Error fetching companies:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...companies]

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(company =>
        company.ten_cong_ty.toLowerCase().includes(searchLower) ||
        company.ho_ten.toLowerCase().includes(searchLower) ||
        company.so_dien_thoai.includes(filters.search)
      )
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(company => company.trang_thai === filters.status)
    }

    // Apply source filter
    if (filters.source) {
      filtered = filtered.filter(company => company.nguon === filters.source)
    }

    // Apply month filter
    if (filters.month) {
      filtered = filtered.filter(company => company.thang === filters.month)
    }

    // Apply responsible person filter
    if (filters.responsiblePerson) {
      filtered = filtered.filter(company => company.phu_trach === filters.responsiblePerson)
    }

    setFilteredCompanies(filtered)
  }

  const handleCreateCompany = () => {
    setEditingCompany(null)
    setShowCompanyForm(true)
  }

  const handleEditCompany = (company: Company) => {
    setEditingCompany(company)
    setShowCompanyForm(true)
  }

  const handleDeleteCompany = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa công ty này?')) {
      return
    }

    try {
      const { error } = await supabase
        .from('companies')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting company:', error)
        alert('Có lỗi xảy ra khi xóa công ty')
        return
      }

      await fetchCompanies()
    } catch (error) {
      console.error('Error deleting company:', error)
      alert('Có lỗi xảy ra khi xóa công ty')
    }
  }

  const handleCompanySaved = async () => {
    setShowCompanyForm(false)
    setEditingCompany(null)
    await fetchCompanies()
  }

  const handleFilterChange = (newFilters: Partial<DashboardFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  // Fetch companies on component mount
  useEffect(() => {
    fetchCompanies()
  }, [userProfile]) // eslint-disable-line react-hooks/exhaustive-deps

  // Apply filters when companies or filters change
  useEffect(() => {
    applyFilters()
  }, [companies, filters]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCreateCompany={handleCreateCompany}
        userProfile={userProfile}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <StatisticsCards companies={filteredCompanies} />
        
        <FilterBar 
          filters={filters}
          onFiltersChange={handleFilterChange}
          companies={companies}
        />
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <CompanyList
            companies={filteredCompanies}
            onEdit={handleEditCompany}
            onDelete={handleDeleteCompany}
            userRole={userProfile?.role || 'user'}
          />
        )}
      </main>

      {showCompanyForm && (
        <CompanyForm
          company={editingCompany}
          onClose={() => {
            setShowCompanyForm(false)
            setEditingCompany(null)
          }}
          onSave={handleCompanySaved}
          userProfile={userProfile}
        />
      )}
    </div>
  )
}