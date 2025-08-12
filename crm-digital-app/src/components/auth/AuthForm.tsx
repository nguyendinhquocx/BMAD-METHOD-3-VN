'use client'

import { supabase } from '@/lib/supabase'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthForm() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Đăng Nhập CRM Digital</h2>
        <p className="text-gray-600 mt-2">Vui lòng đăng nhập để tiếp tục</p>
      </div>
      
      <Auth
        supabaseClient={supabase}
        appearance={{ 
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#2563eb',
                brandAccent: '#1d4ed8',
              }
            }
          }
        }}
        providers={[]}
        redirectTo={typeof window !== 'undefined' ? window.location.origin : undefined}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Email',
              password_label: 'Mật khẩu',
              button_label: 'Đăng nhập',
              loading_button_label: 'Đang đăng nhập...',
              link_text: 'Đã có tài khoản? Đăng nhập',
            },
            sign_up: {
              email_label: 'Email',
              password_label: 'Mật khẩu',
              button_label: 'Đăng ký',
              loading_button_label: 'Đang đăng ký...',
              link_text: 'Chưa có tài khoản? Đăng ký',
            },
            forgotten_password: {
              email_label: 'Email',
              button_label: 'Gửi hướng dẫn reset',
              loading_button_label: 'Đang gửi...',
              link_text: 'Quên mật khẩu?',
            },
          },
        }}
      />
    </div>
  )
}