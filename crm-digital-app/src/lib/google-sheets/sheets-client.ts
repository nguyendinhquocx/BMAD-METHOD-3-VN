import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export async function getGoogleSheetsAuth() {
  const credentials = {
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  }

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  })

  return auth
}

export async function getGoogleSheetsClient() {
  const auth = await getGoogleSheetsAuth()
  return google.sheets({ version: 'v4', auth })
}

export interface CompanyData {
  'thoi gian nhan tin': string
  'ho ten': string
  'so dien thoai': string
  'ghi chu khac': string
  'nguon': string
  'ten cong ty': string
  'trang thai': string
  'gia tri hop dong': string
  'thang ghi nhan doanh thu': string
  'doanh thu khi chot hop dong': string
  'thang chot ki hop dong': string
  'phu trach': string
  'ghi chu': string
  'doanh thu chot hop dong': string
  'thang': string
  'id': string
}

export async function syncToGoogleSheets(companies: CompanyData[]) {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!spreadsheetId) {
      throw new Error('Google Sheets Spreadsheet ID is not configured')
    }

    // Clear existing data (except headers)
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: 'A2:P1000', // Adjust range as needed
    })

    // Prepare headers
    const headers = [
      'thoi gian nhan tin',
      'ho ten',
      'so dien thoai',
      'ghi chu khac',
      'nguon',
      'ten cong ty',
      'trang thai',
      'gia tri hop dong',
      'thang ghi nhan doanh thu',
      'doanh thu khi chot hop dong',
      'thang chot ki hop dong',
      'phu trach',
      'ghi chu',
      'doanh thu chot hop dong',
      'thang',
      'id'
    ]

    // Prepare data rows
    const rows = companies.map(company => [
      company['thoi gian nhan tin'],
      company['ho ten'],
      company['so dien thoai'],
      company['ghi chu khac'],
      company['nguon'],
      company['ten cong ty'],
      company['trang thai'],
      company['gia tri hop dong'],
      company['thang ghi nhan doanh thu'],
      company['doanh thu khi chot hop dong'],
      company['thang chot ki hop dong'],
      company['phu trach'],
      company['ghi chu'],
      company['doanh thu chot hop dong'],
      company['thang'],
      company['id']
    ])

    // Update the sheet with headers and data
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'A1:P' + (rows.length + 1),
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers, ...rows]
      }
    })

    return { success: true, syncedCount: companies.length }
  } catch (error) {
    console.error('Google Sheets sync error:', error)
    throw error
  }
}

export async function readFromGoogleSheets(): Promise<CompanyData[]> {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!spreadsheetId) {
      throw new Error('Google Sheets Spreadsheet ID is not configured')
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A1:P1000', // Adjust range as needed
    })

    const rows = response.data.values
    if (!rows || rows.length < 2) {
      return []
    }

    const [headers, ...dataRows] = rows
    
    return dataRows.map(row => {
      const company: Partial<CompanyData> = {}
      headers.forEach((header, index) => {
        company[header as keyof CompanyData] = row[index] || ''
      })
      return company as CompanyData
    })
  } catch (error) {
    console.error('Google Sheets read error:', error)
    throw error
  }
}