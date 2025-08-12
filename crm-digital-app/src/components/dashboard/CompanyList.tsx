'use client'

import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import type { Database } from '@/lib/database.types'

type Company = Database['public']['Tables']['companies']['Row']

interface CompanyListProps {
  companies: Company[]
  onEdit: (company: Company) => void
  onDelete: (id: string) => void
  userRole: 'admin' | 'user'
}

export default function CompanyList({ companies, onEdit, onDelete, userRole }: CompanyListProps) {
  const formatCurrency = (value: string | null) => {
    if (!value) return '-'
    const num = parseFloat(value)
    if (isNaN(num)) return '-'
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(num)
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return format(date, 'dd/MM/yyyy', { locale: vi })
    } catch {
      return dateString
    }
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'Không khám': 'bg-red-100 text-red-800',
      'Đang tư vấn': 'bg-yellow-100 text-yellow-800',
      'Đã ký hợp đồng': 'bg-green-100 text-green-800',
      'Hủy': 'bg-gray-100 text-gray-800',
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  if (companies.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Không có công ty nào</h3>
        <p className="text-gray-500">Chưa có dữ liệu công ty hoặc không có kết quả phù hợp với bộ lọc.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Công ty & Liên hệ
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nguồn
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phụ trách
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giá trị HĐ
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thời gian
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {company.ten_cong_ty}
                    </div>
                    <div className="text-sm text-gray-500">
                      {company.ho_ten} • {company.so_dien_thoai}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(company.trang_thai)}`}>
                    {company.trang_thai}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {company.nguon}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {company.phu_trach}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(company.gia_tri_hop_dong)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(company.thoi_gian_nhan_tin)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => onEdit(company)}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                      title="Chỉnh sửa"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    {userRole === 'admin' && (
                      <button
                        onClick={() => onDelete(company.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                        title="Xóa"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden">
        {companies.map((company) => (
          <div key={company.id} className="border-b border-gray-200 last:border-b-0">
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {company.ten_cong_ty}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {company.ho_ten} • {company.so_dien_thoai}
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(company)}
                    className="text-blue-600 hover:text-blue-900"
                    title="Chỉnh sửa"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  {userRole === 'admin' && (
                    <button
                      onClick={() => onDelete(company.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Xóa"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Trạng thái:</span>
                  <span className={`ml-1 px-2 py-1 rounded-full ${getStatusColor(company.trang_thai)}`}>
                    {company.trang_thai}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Nguồn:</span>
                  <span className="ml-1 text-gray-900">{company.nguon}</span>
                </div>
                <div>
                  <span className="text-gray-500">Phụ trách:</span>
                  <span className="ml-1 text-gray-900">{company.phu_trach}</span>
                </div>
                <div>
                  <span className="text-gray-500">Giá trị HĐ:</span>
                  <span className="ml-1 text-gray-900">{formatCurrency(company.gia_tri_hop_dong)}</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                {formatDate(company.thoi_gian_nhan_tin)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}