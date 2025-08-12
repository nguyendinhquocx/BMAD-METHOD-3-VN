export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          thoi_gian_nhan_tin: string
          ho_ten: string
          so_dien_thoai: string
          ghi_chu_khac: string
          nguon: string
          ten_cong_ty: string
          trang_thai: string
          gia_tri_hop_dong: string | null
          thang_ghi_nhan_doanh_thu: string | null
          doanh_thu_khi_chot_hop_dong: string | null
          thang_chot_ki_hop_dong: string | null
          phu_trach: string
          ghi_chu: string | null
          doanh_thu_chot_hop_dong: string | null
          thang: string
          team: string
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          thoi_gian_nhan_tin: string
          ho_ten: string
          so_dien_thoai: string
          ghi_chu_khac?: string
          nguon: string
          ten_cong_ty: string
          trang_thai: string
          gia_tri_hop_dong?: string | null
          thang_ghi_nhan_doanh_thu?: string | null
          doanh_thu_khi_chot_hop_dong?: string | null
          thang_chot_ki_hop_dong?: string | null
          phu_trach: string
          ghi_chu?: string | null
          doanh_thu_chot_hop_dong?: string | null
          thang: string
          team: string
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          thoi_gian_nhan_tin?: string
          ho_ten?: string
          so_dien_thoai?: string
          ghi_chu_khac?: string
          nguon?: string
          ten_cong_ty?: string
          trang_thai?: string
          gia_tri_hop_dong?: string | null
          thang_ghi_nhan_doanh_thu?: string | null
          doanh_thu_khi_chot_hop_dong?: string | null
          thang_chot_ki_hop_dong?: string | null
          phu_trach?: string
          ghi_chu?: string | null
          doanh_thu_chot_hop_dong?: string | null
          thang?: string
          team?: string
          user_id?: string | null
        }
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          team: 'a' | 'b' | 'c'
          role: 'admin' | 'user'
          auth_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name?: string | null
          team: 'a' | 'b' | 'c'
          role?: 'admin' | 'user'
          auth_id: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          team?: 'a' | 'b' | 'c'
          role?: 'admin' | 'user'
          auth_id?: string
        }
      }
      email_recipients: {
        Row: {
          id: string
          created_at: string
          email: string
          name: string | null
          active: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          name?: string | null
          active?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          name?: string | null
          active?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      team_type: 'a' | 'b' | 'c'
      user_role: 'admin' | 'user'
      company_status: 'Không khám' | 'Đang tư vấn' | 'Đã ký hợp đồng' | 'Hủy'
    }
  }
}