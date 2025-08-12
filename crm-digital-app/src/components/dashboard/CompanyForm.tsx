'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/database.types'

type Company = Database['public']['Tables']['companies']['Row']
type UserProfile = Database['public']['Tables']['users']['Row']

interface CompanyFormProps {
  company: Company | null
  onClose: () => void
  onSave: () => void
  userProfile: UserProfile | null
}

export default function CompanyForm({ company, onClose, onSave, userProfile }: CompanyFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    thoi_gian_nhan_tin: '',
    ho_ten: '',
    so_dien_thoai: '',
    ghi_chu_khac: '',
    nguon: '',
    ten_cong_ty: '',
    trang_thai: 'Không khám',
    gia_tri_hop_dong: '',
    thang_ghi_nhan_doanh_thu: '',
    doanh_thu_khi_chot_hop_dong: '',
    thang_chot_ki_hop_dong: '',
    phu_trach: '',
    ghi_chu: '',
    doanh_thu_chot_hop_dong: '',
    thang: '',
    team: userProfile?.team || 'b',
  })

  useEffect(() => {
    if (company) {
      setFormData({
        thoi_gian_nhan_tin: company.thoi_gian_nhan_tin.split('T')[0], // Convert to date input format
        ho_ten: company.ho_ten,
        so_dien_thoai: company.so_dien_thoai,
        ghi_chu_khac: company.ghi_chu_khac || '',
        nguon: company.nguon,
        ten_cong_ty: company.ten_cong_ty,
        trang_thai: company.trang_thai,
        gia_tri_hop_dong: company.gia_tri_hop_dong || '',
        thang_ghi_nhan_doanh_thu: company.thang_ghi_nhan_doanh_thu || '',
        doanh_thu_khi_chot_hop_dong: company.doanh_thu_khi_chot_hop_dong || '',
        thang_chot_ki_hop_dong: company.thang_chot_ki_hop_dong || '',
        phu_trach: company.phu_trach,
        ghi_chu: company.ghi_chu || '',
        doanh_thu_chot_hop_dong: company.doanh_thu_chot_hop_dong || '',
        thang: company.thang,
        team: company.team as 'a' | 'b' | 'c',
      })
    } else {
      // Set default values for new company
      const now = new Date()
      const currentMonth = `${now.getFullYear()} ${(now.getMonth() + 1).toString().padStart(2, '0')}`
      
      setFormData(prev => ({
        ...prev,
        thoi_gian_nhan_tin: now.toISOString().split('T')[0],
        thang: currentMonth,
        phu_trach: userProfile?.full_name || '',
      }))
    }
  }, [company, userProfile])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const dataToSave = {
        ...formData,
        thoi_gian_nhan_tin: new Date(formData.thoi_gian_nhan_tin).toISOString(),
        user_id: userProfile?.auth_id || null,
      }

      if (company) {
        // Update existing company
        const { error } = await supabase
          .from('companies')
          .update(dataToSave)
          .eq('id', company.id)

        if (error) throw error
      } else {
        // Create new company
        const { error } = await supabase
          .from('companies')
          .insert([dataToSave])

        if (error) throw error
      }

      onSave()
    } catch (error) {
      console.error('Error saving company:', error)
      alert('Có lỗi xảy ra khi lưu dữ liệu')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const statusOptions = [
    'Không khám',
    'Đang tư vấn',
    'Đã ký hợp đồng',
    'Hủy'
  ]

  const sourceOptions = [
    'Zalo',
    'Facebook',
    'Website',
    'Giới thiệu',
    'Cold call',
    'Email',
    'Khác'
  ]

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              {company ? 'Chỉnh sửa công ty' : 'Thêm công ty mới'}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên công ty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ten_cong_ty"
                  value={formData.ten_cong_ty}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Họ tên liên hệ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ho_ten"
                  value={formData.ho_ten}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="so_dien_thoai"
                  value={formData.so_dien_thoai}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thời gian nhận tin <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="thoi_gian_nhan_tin"
                  value={formData.thoi_gian_nhan_tin}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nguồn <span className="text-red-500">*</span>
                </label>
                <select
                  name="nguon"
                  value={formData.nguon}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Chọn nguồn</option>
                  {sourceOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trạng thái <span className="text-red-500">*</span>
                </label>
                <select
                  name="trang_thai"
                  value={formData.trang_thai}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {statusOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phụ trách <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phu_trach"
                  value={formData.phu_trach}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tháng <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="thang"
                  value={formData.thang}
                  onChange={handleChange}
                  placeholder="YYYY MM"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Contract Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giá trị hợp đồng (VNĐ)
                </label>
                <input
                  type="number"
                  name="gia_tri_hop_dong"
                  value={formData.gia_tri_hop_dong}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Doanh thu khi chốt hợp đồng (VNĐ)
                </label>
                <input
                  type="number"
                  name="doanh_thu_khi_chot_hop_dong"
                  value={formData.doanh_thu_khi_chot_hop_dong}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tháng ghi nhận doanh thu
                </label>
                <input
                  type="text"
                  name="thang_ghi_nhan_doanh_thu"
                  value={formData.thang_ghi_nhan_doanh_thu}
                  onChange={handleChange}
                  placeholder="YYYY MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tháng chốt kí hợp đồng
                </label>
                <input
                  type="text"
                  name="thang_chot_ki_hop_dong"
                  value={formData.thang_chot_ki_hop_dong}
                  onChange={handleChange}
                  placeholder="YYYY MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ghi chú khác
                </label>
                <textarea
                  name="ghi_chu_khac"
                  value={formData.ghi_chu_khac}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ghi chú
                </label>
                <textarea
                  name="ghi_chu"
                  value={formData.ghi_chu}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Đang lưu...' : (company ? 'Cập nhật' : 'Thêm mới')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}