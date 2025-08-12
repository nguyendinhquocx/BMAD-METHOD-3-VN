'use client'

import { useMemo } from 'react'
import type { Database } from '@/lib/database.types'

type Company = Database['public']['Tables']['companies']['Row']

interface StatisticsCardsProps {
  companies: Company[]
}

export default function StatisticsCards({ companies }: StatisticsCardsProps) {
  const statistics = useMemo(() => {
    const now = new Date()
    const currentMonth = now.getMonth() + 1
    const currentYear = now.getFullYear()
    const currentMonthStr = `${currentYear} ${currentMonth.toString().padStart(2, '0')}`
    
    const lastYear = currentYear - 1
    const lastYearSameMonthStr = `${lastYear} ${currentMonth.toString().padStart(2, '0')}`

    // Total companies
    const totalCompanies = companies.length

    // Companies added this month
    const companiesThisMonth = companies.filter(company => 
      company.thang === currentMonthStr
    ).length

    // Companies added same month last year
    const companiesLastYearSameMonth = companies.filter(company => 
      company.thang === lastYearSameMonthStr
    ).length

    // Year-over-year growth
    let yoyGrowthPercentage = 0
    if (companiesLastYearSameMonth > 0) {
      yoyGrowthPercentage = ((companiesThisMonth - companiesLastYearSameMonth) / companiesLastYearSameMonth) * 100
    } else if (companiesThisMonth > 0) {
      yoyGrowthPercentage = 100
    }

    // Revenue statistics
    const contractedCompanies = companies.filter(company => 
      company.trang_thai === 'Đã ký hợp đồng'
    )

    const totalContractValue = contractedCompanies.reduce((sum, company) => {
      const value = parseFloat(company.gia_tri_hop_dong || '0')
      return sum + (isNaN(value) ? 0 : value)
    }, 0)

    return {
      totalCompanies,
      companiesThisMonth,
      yoyGrowthPercentage,
      totalContractValue,
      contractedCompanies: contractedCompanies.length,
    }
  }, [companies])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value)
  }

  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '+' : ''
    return `${sign}${value.toFixed(1)}%`
  }

  const cards = [
    {
      title: 'Tổng số công ty',
      value: statistics.totalCompanies.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgGradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Công ty mới tháng này',
      value: statistics.companiesThisMonth.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
      bgGradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Tăng trưởng YoY',
      value: formatPercentage(statistics.yoyGrowthPercentage),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: statistics.yoyGrowthPercentage >= 0 ? 'bg-emerald-500' : 'bg-red-500',
      textColor: statistics.yoyGrowthPercentage >= 0 ? 'text-emerald-600' : 'text-red-600',
      bgGradient: statistics.yoyGrowthPercentage >= 0 ? 'from-emerald-500 to-emerald-600' : 'from-red-500 to-red-600',
    },
    {
      title: 'Tổng giá trị hợp đồng',
      value: formatCurrency(statistics.totalContractValue),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgGradient: 'from-purple-500 to-purple-600',
      subtitle: `${statistics.contractedCompanies} hợp đồng`,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {card.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {card.value}
                </p>
                {card.subtitle && (
                  <p className="text-sm text-gray-500">
                    {card.subtitle}
                  </p>
                )}
              </div>
              <div className={`p-3 rounded-full bg-gradient-to-r ${card.bgGradient}`}>
                <div className="text-white">
                  {card.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}