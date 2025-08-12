import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { syncToGoogleSheets, type CompanyData } from '@/lib/google-sheets/sheets-client'

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

    // Transform data to match Google Sheets format
    const sheetsData: CompanyData[] = companies.map(company => ({
      'thoi gian nhan tin': company.thoi_gian_nhan_tin,
      'ho ten': company.ho_ten,
      'so dien thoai': company.so_dien_thoai,
      'ghi chu khac': company.ghi_chu_khac || '',
      'nguon': company.nguon,
      'ten cong ty': company.ten_cong_ty,
      'trang thai': company.trang_thai,
      'gia tri hop dong': company.gia_tri_hop_dong || '',
      'thang ghi nhan doanh thu': company.thang_ghi_nhan_doanh_thu || '',
      'doanh thu khi chot hop dong': company.doanh_thu_khi_chot_hop_dong || '',
      'thang chot ki hop dong': company.thang_chot_ki_hop_dong || '',
      'phu trach': company.phu_trach,
      'ghi chu': company.ghi_chu || '',
      'doanh thu chot hop dong': company.doanh_thu_chot_hop_dong || '',
      'thang': company.thang,
      'id': company.id,
    }))

    // Sync to Google Sheets
    const result = await syncToGoogleSheets(sheetsData)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Sync sheets error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}