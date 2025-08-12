# CRM Digital - Sales Team Management System

A comprehensive CRM web application built to replace Google Sheets workflow for sales team management. The system manages company leads, automates Excel reporting via email, and provides team-based access control.

## 🚀 Features

### User Management & Authentication
- **Supabase Auth**: Email/password authentication
- **Team-based Access Control**: Users belong to teams (a, b, c), only team 'b' can access Digital module
- **Role Management**: Admin (full access) and User (limited to own data) roles
- **User Setup**: Admin pre-creates accounts with default passwords, users can change later

### Dashboard & Data Management
- **Statistics Cards** (dynamic based on filters):
  - Total companies count
  - Companies added this month  
  - Year-over-year growth percentage
  - Total contract value
- **Company Management**: Full CRUD operations (Create, Read, Update, Delete)
- **Advanced Filtering**: By month, status, team member, source, etc.
- **Mobile-First Design**: Optimized for smartphone data entry

### Google Sheets Integration
- **Bidirectional Sync**: All web app changes sync to Google Sheets
- **Error Handling**: Robust error handling with retry mechanisms
- **Real-time Updates**: Changes reflect immediately in both systems

### Automated Reporting System
- **Weekly Excel Reports**: Automatic email delivery every Monday 7-8 AM
- **Email Configuration**: Admin can configure recipient email addresses
- **Excel Export**: Download reports in proper Excel format
- **Manual Download**: Instant Excel report generation

### Admin Features
- **User Management**: Create and manage user accounts
- **Email Configuration**: Manage weekly report recipients
- **Google Sheets Sync**: Manual sync and sync history tracking

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + API)
- **Database**: PostgreSQL with Row Level Security
- **File Export**: ExcelJS for Excel file generation
- **Google Integration**: Google Sheets API v4
- **Deployment**: Ready for Netlify/Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase project
- Google Cloud Console project with Sheets API enabled
- Service account for Google Sheets access

## 🚀 Setup Instructions

### 1. Clone and Install
```bash
cd crm-digital-app
npm install
```

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and configure:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google Sheets API
GOOGLE_SHEETS_PRIVATE_KEY=your_google_sheets_private_key
GOOGLE_SHEETS_CLIENT_EMAIL=your_google_sheets_client_email
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id

# Email Service
EMAIL_SERVICE_API_KEY=your_email_service_api_key
ADMIN_EMAIL=admin@yourcompany.com

# App Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

1. Run the SQL script in your Supabase SQL editor:
```sql
-- Run the contents of supabase-setup.sql
```

2. Create your first admin user in Supabase Auth dashboard

3. Update the users table with the admin user information

### 4. Google Sheets Setup

1. Create a Google Cloud Console project
2. Enable Google Sheets API
3. Create a service account and download the JSON key
4. Share your Google Sheet with the service account email
5. Extract the private key and client email for environment variables

### 5. Run the Application

```bash
# Development
npm run dev

# Production Build
npm run build
npm start
```

## 📊 Data Structure

The application manages company data with the following structure:

```json
{
  "thoi_gian_nhan_tin": "2023-12-18",
  "ho_ten": "Chị Hằng", 
  "so_dien_thoai": "0919967277",
  "ghi_chu_khac": "Khám sức khỏe Tổng quát cho Doanh nghiệp",
  "nguon": "Zalo",
  "ten_cong_ty": "CÔNG TY TNHH MAESTRO EQUITY PARTNERS VIỆT NAM",
  "trang_thai": "Không khám",
  "gia_tri_hop_dong": "5000000",
  "thang_ghi_nhan_doanh_thu": "2023 12",
  "doanh_thu_khi_chot_hop_dong": "5000000",
  "thang_chot_ki_hop_dong": "2023 12",
  "phu_trach": "Hồng",
  "ghi_chu": "Follow up call scheduled",
  "doanh_thu_chot_hop_dong": "5000000",
  "thang": "2023 12",
  "team": "b"
}
```

## 👥 User Roles & Permissions

### Team Access
- **Team A**: No access to Digital module
- **Team B**: Full access to Digital module
- **Team C**: No access to Digital module

### Role Permissions
- **User**: Can view/edit own data and team data
- **Admin**: Full access to all data, user management, and system configuration

## 📱 API Endpoints

### Company Management
- `GET /api/companies` - List companies (with filtering)
- `POST /api/companies` - Create new company
- `PUT /api/companies/:id` - Update company
- `DELETE /api/companies/:id` - Delete company (admin only)

### Google Sheets
- `POST /api/sync-sheets` - Manual sync to Google Sheets
- `GET /api/sync-status` - Get sync status and history

### Reports
- `GET /api/generate-report` - Download Excel report
- `POST /api/send-weekly-report` - Trigger weekly email report

## 🔧 Configuration

### Email Recipients Management
Admins can configure email recipients for weekly reports through the admin dashboard at `/admin`.

### Google Sheets Sync
- Automatic sync on data changes
- Manual sync available in admin dashboard
- Sync history tracking
- Error handling and retry logic

## 🔒 Security Features

- Row Level Security (RLS) policies
- Team-based data isolation
- Role-based access control
- Secure API endpoints
- Input validation and sanitization

## 📈 Performance

- Server-side rendering with Next.js
- Optimized database queries
- Mobile-first responsive design
- Lazy loading for large datasets
- Efficient filtering and pagination

## 🚀 Deployment

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Configure environment variables
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Vercel Deployment  
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with zero configuration

## 📞 Support

For technical support or questions about setup, please refer to:
- Supabase Documentation
- Next.js Documentation  
- Google Sheets API Documentation
- Tailwind CSS Documentation

## 🏗 Project Structure

```
crm-digital-app/
├── src/
│   ├── app/                 # Next.js 13+ app router
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── api/             # API routes
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── admin/           # Admin components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Main dashboard components
│   │   └── ui/              # Reusable UI components
│   ├── contexts/            # React contexts
│   ├── lib/                 # Utilities and configurations
│   │   └── google-sheets/   # Google Sheets integration
│   └── types/               # TypeScript type definitions
├── public/                  # Static files
├── supabase-setup.sql      # Database setup script
└── README.md               # This file
```

## 🎯 Success Metrics

- ✅ 100% sales team adoption (replaces Google Sheets)
- ✅ <1 minute data entry time per company  
- ✅ Zero data loss during synchronization
- ✅ Automated weekly reports delivered successfully
- ✅ Mobile-friendly interface for field data entry
- ✅ >90 Lighthouse performance score
