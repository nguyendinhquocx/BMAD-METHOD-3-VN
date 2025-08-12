'use client'

import { useMemo } from 'react'
import type { Database } from '@/lib/database.types'

type Company = Database['public']['Tables']['companies']['Row']

interface FilterBarProps {
  filters: {
    search: string
    status: string
    source: string
    team: string
    month: string
    responsiblePerson: string
  }
  onFiltersChange: (filters: Partial<{
    search: string
    status: string
    source: string
    team: string
    month: string
    responsiblePerson: string
  }>) => void
  companies: Company[]
}

export default function FilterBar({ filters, onFiltersChange, companies }: FilterBarProps) {
  // Extract unique values for dropdown options
  const filterOptions = useMemo(() => {
    const statuses = [...new Set(companies.map(c => c.trang_thai))].filter(Boolean).sort()
    const sources = [...new Set(companies.map(c => c.nguon))].filter(Boolean).sort()
    const months = [...new Set(companies.map(c => c.thang))].filter(Boolean).sort().reverse()
    const responsiblePersons = [...new Set(companies.map(c => c.phu_trach))].filter(Boolean).sort()

    return {
      statuses,
      sources,
      months,
      responsiblePersons,
    }
  }, [companies])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ search: e.target.value })
  }

  const handleSelectChange = (key: string, value: string) => {
    onFiltersChange({ [key]: value })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      search: '',
      status: '',
      source: '',
      month: '',
      responsiblePerson: '',
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col space-y-4">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm theo tên công ty, họ tên, hoặc số điện thoại..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.search}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trạng thái
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleSelectChange('status', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Tất cả</option>
              {filterOptions.statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nguồn
            </label>
            <select
              value={filters.source}
              onChange={(e) => handleSelectChange('source', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Tất cả</option>
              {filterOptions.sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>

          {/* Month Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tháng
            </label>
            <select
              value={filters.month}
              onChange={(e) => handleSelectChange('month', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Tất cả</option>
              {filterOptions.months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Responsible Person Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phụ trách
            </label>
            <select
              value={filters.responsiblePerson}
              onChange={(e) => handleSelectChange('responsiblePerson', e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Tất cả</option>
              {filterOptions.responsiblePersons.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}