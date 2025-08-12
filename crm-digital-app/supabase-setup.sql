-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  team TEXT CHECK (team IN ('a', 'b', 'c')) NOT NULL,
  role TEXT CHECK (role IN ('admin', 'user')) DEFAULT 'user',
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
);

-- Create companies table
CREATE TABLE IF NOT EXISTS companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  thoi_gian_nhan_tin TEXT NOT NULL,
  ho_ten TEXT NOT NULL,
  so_dien_thoai TEXT NOT NULL,
  ghi_chu_khac TEXT DEFAULT '',
  nguon TEXT NOT NULL,
  ten_cong_ty TEXT NOT NULL,
  trang_thai TEXT NOT NULL,
  gia_tri_hop_dong TEXT DEFAULT '',
  thang_ghi_nhan_doanh_thu TEXT DEFAULT '',
  doanh_thu_khi_chot_hop_dong TEXT DEFAULT '',
  thang_chot_ki_hop_dong TEXT DEFAULT '',
  phu_trach TEXT NOT NULL,
  ghi_chu TEXT DEFAULT '',
  doanh_thu_chot_hop_dong TEXT DEFAULT '',
  thang TEXT NOT NULL,
  team TEXT CHECK (team IN ('a', 'b', 'c')) NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create email_recipients table
CREATE TABLE IF NOT EXISTS email_recipients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL,
  name TEXT,
  active BOOLEAN DEFAULT TRUE
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_recipients ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for users table
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid() = auth_id);

CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can insert users" ON users
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update users" ON users
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

-- Create RLS policies for companies table
CREATE POLICY "Users can view their team's companies" ON companies
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() 
      AND (users.team = companies.team OR users.role = 'admin')
    )
  );

CREATE POLICY "Users can insert companies for their team" ON companies
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() 
      AND (users.team = companies.team OR users.role = 'admin')
    )
  );

CREATE POLICY "Users can update their own companies or admins can update all" ON companies
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can delete companies" ON companies
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

-- Create RLS policies for email_recipients table
CREATE POLICY "Admins can manage email recipients" ON email_recipients
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE auth_id = auth.uid() AND role = 'admin'
    )
  );

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to update updated_at on companies table
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample admin user (you'll need to create this user in Supabase Auth first)
-- Replace 'admin@example.com' and the UUID with actual values
-- INSERT INTO users (email, full_name, team, role, auth_id)
-- VALUES ('admin@example.com', 'Admin User', 'b', 'admin', 'your-auth-uuid-here');

-- Insert sample email recipient
INSERT INTO email_recipients (email, name, active)
VALUES ('admin@example.com', 'Admin', true)
ON CONFLICT DO NOTHING;