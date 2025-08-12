'use client'

import { useState, useEffect } from 'react'

export default function GoogleSheetsSync() {
  const [lastSync, setLastSync] = useState<string | null>(null)
  const [syncing, setSyncing] = useState(false)
  const [syncHistory, setSyncHistory] = useState<Array<{
    date: string
    success: boolean
    count: number
    error?: string
  }>>([])

  useEffect(() => {
    // Load sync history from localStorage
    const history = localStorage.getItem('syncHistory')
    if (history) {
      setSyncHistory(JSON.parse(history))
    }

    const lastSyncDate = localStorage.getItem('lastSync')
    if (lastSyncDate) {
      setLastSync(lastSyncDate)
    }
  }, [])

  const handleManualSync = async () => {
    setSyncing(true)
    try {
      const response = await fetch('/api/sync-sheets', {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Sync failed')
      }

      const result = await response.json()
      const now = new Date().toISOString()
      
      setLastSync(now)
      localStorage.setItem('lastSync', now)

      const newSyncEntry = {
        date: now,
        success: true,
        count: result.syncedCount || 0,
      }

      const updatedHistory = [newSyncEntry, ...syncHistory.slice(0, 9)] // Keep last 10 entries
      setSyncHistory(updatedHistory)
      localStorage.setItem('syncHistory', JSON.stringify(updatedHistory))

      alert(`Đồng bộ thành công ${result.syncedCount} công ty!`)
    } catch (error) {
      console.error('Sync error:', error)
      
      const newSyncEntry = {
        date: new Date().toISOString(),
        success: false,
        count: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
      }

      const updatedHistory = [newSyncEntry, ...syncHistory.slice(0, 9)]
      setSyncHistory(updatedHistory)
      localStorage.setItem('syncHistory', JSON.stringify(updatedHistory))

      alert('Đồng bộ thất bại. Vui lòng kiểm tra cấu hình.')
    } finally {
      setSyncing(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Google Sheets Sync</h2>
        <p className="text-gray-600 mt-1">Đồng bộ dữ liệu với Google Sheets</p>
      </div>

      {/* Sync Status */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Trạng thái đồng bộ</h3>
          <button
            onClick={handleManualSync}
            disabled={syncing}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {syncing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Đang đồng bộ...
              </>
            ) : (
              <>
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Đồng bộ ngay
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lần đồng bộ cuối:
            </div>
            <p className="text-gray-900 font-medium">
              {lastSync ? formatDate(lastSync) : 'Chưa đồng bộ'}
            </p>
          </div>

          <div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tự động đồng bộ:
            </div>
            <p className="text-gray-900 font-medium">
              Mỗi khi có thay đổi dữ liệu
            </p>
          </div>
        </div>
      </div>

      {/* Configuration Info */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">Cấu hình Google Sheets</h3>
            <div className="text-sm text-yellow-700 mt-1">
              <p>Để sử dụng tính năng đồng bộ, bạn cần cấu hình:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Google Sheets API credentials (service account)</li>
                <li>Spreadsheet ID của Google Sheets</li>
                <li>Quyền truy cập cho service account vào sheets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sync History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Lịch sử đồng bộ</h3>
        </div>
        <div className="overflow-hidden">
          {syncHistory.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Chưa có lịch sử đồng bộ</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {syncHistory.map((entry, index) => (
                <div key={index} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-3 ${
                      entry.success ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {formatDate(entry.date)}
                      </p>
                      {entry.success ? (
                        <p className="text-sm text-gray-500">
                          Đồng bộ thành công {entry.count} công ty
                        </p>
                      ) : (
                        <p className="text-sm text-red-600">
                          Lỗi: {entry.error}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    entry.success 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {entry.success ? 'Thành công' : 'Thất bại'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}