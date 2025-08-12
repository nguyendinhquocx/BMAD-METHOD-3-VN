import { supabase } from './supabase'

export async function syncAfterCompanyChange() {
  try {
    // Only sync if we're in production or if ENABLE_AUTO_SYNC is true
    const shouldAutoSync = process.env.NODE_ENV === 'production' || process.env.ENABLE_AUTO_SYNC === 'true'
    
    if (!shouldAutoSync) {
      console.log('Auto-sync disabled in development')
      return
    }

    // Trigger sync in background
    fetch('/api/sync-sheets', {
      method: 'POST',
    }).catch(error => {
      console.error('Background sync failed:', error)
    })
  } catch (error) {
    console.error('Auto-sync error:', error)
  }
}

// Hook into Supabase real-time changes
export function setupRealtimeSync() {
  const channel = supabase
    .channel('companies-changes')
    .on('postgres_changes', 
      { 
        event: '*', 
        schema: 'public', 
        table: 'companies' 
      }, 
      (payload) => {
        console.log('Company change detected:', payload)
        syncAfterCompanyChange()
      }
    )
    .subscribe()

  return () => {
    supabase.removeChannel(channel)
  }
}