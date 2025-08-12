'use client'

import { useAuth } from '@/contexts/AuthContext'
import type { Database } from '@/lib/database.types'

type UserProfile = Database['public']['Tables']['users']['Row']

interface HeaderProps {
  onCreateCompany: () => void
  userProfile: UserProfile | null
}

export default function Header({ onCreateCompany, userProfile }: HeaderProps) {
  const { signOut } = useAuth()

  const handleSignOut = async () => {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      await signOut()
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">CRM Digital</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Sales Team Management</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Add Company Button */}
            <button
              onClick={onCreateCompany}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="hidden sm:inline">Thêm công ty</span>
              <span className="sm:hidden">Thêm</span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <div className="flex items-center space-x-3 text-sm">
                <div className="text-right hidden sm:block">
                  <p className="font-medium text-gray-900">{userProfile?.full_name}</p>
                  <p className="text-gray-500 capitalize">Team {userProfile?.team} • {userProfile?.role}</p>
                </div>
                
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <button
                  onClick={handleSignOut}
                  className="text-gray-400 hover:text-gray-600 p-1 transition-colors focus:outline-none"
                  title="Đăng xuất"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}