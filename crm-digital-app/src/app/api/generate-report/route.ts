import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import ExcelJS from 'exceljs'

export async function POST() {
  try {
    // Fetch all companies from Supabase
    const { data: companies, error } = await supabase
      .from('companies')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching companies:', error)
      return NextResponse.json(
        { error: 'Failed to fetch companies' },
        { status: 500 }
      )
    }

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Companies Report')

    // Define headers
    const headers = [
      'Thời gian nhận tin',
      'Họ tên',
      'Số điện thoại',
      'Ghi chú khác',
      'Nguồn',
      'Tên công ty',
      'Trạng thái',
      'Giá trị hợp đồng',
      'Tháng ghi nhận doanh thu',
      'Doanh thu khi chốt hợp đồng',
      'Tháng chốt ký hợp đồng',
      'Phụ trách',
      'Ghi chú',
      'Doanh thu chốt hợp đồng',
      'Tháng',
    ]

    // Add headers
    worksheet.addRow(headers)

    // Style headers
    const headerRow = worksheet.getRow(1)
    headerRow.font = { bold: true }
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFE0E0E0' }
    }

    // Add data rows
    companies.forEach(company => {
      worksheet.addRow([
        company.thoi_gian_nhan_tin,
        company.ho_ten,
        company.so_dien_thoai,
        company.ghi_chu_khac || '',
        company.nguon,
        company.ten_cong_ty,
        company.trang_thai,
        company.gia_tri_hop_dong || '',
        company.thang_ghi_nhan_doanh_thu || '',
        company.doanh_thu_khi_chot_hop_dong || '',
        company.thang_chot_ki_hop_dong || '',
        company.phu_trach,
        company.ghi_chu || '',
        company.doanh_thu_chot_hop_dong || '',
        company.thang,
      ])
    })

    // Auto-fit columns
    worksheet.columns.forEach(column => {
      let maxLength = 0
      column.eachCell?.({ includeEmpty: true }, (cell) => {
        const cellLength = cell.value ? cell.value.toString().length : 0
        if (cellLength > maxLength) {
          maxLength = cellLength
        }
      })
      column.width = Math.min(Math.max(maxLength + 2, 10), 50)
    })

    // Generate Excel buffer
    const buffer = await workbook.xlsx.writeBuffer()

    // Return Excel file
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="companies-report-${new Date().toISOString().split('T')[0]}.xlsx"`,
      },
    })
  } catch (error) {
    console.error('Generate report error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}