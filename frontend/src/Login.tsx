import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState<'jobseeker' | 'employer'>('jobseeker')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, role })
  }

  return (
    <div className="login-page">
      {/* LEFT */}
      <div className="login-left">
        <div className="brand">
          <div className="brand-logo">
            <svg viewBox="0 0 32 32" fill="none" width="22" height="22">
              <rect width="32" height="32" rx="8" fill="white" opacity="0.9"/>
              <path d="M8 22V13l8-5 8 5v9l-8 5-8-5z" fill="#2563eb"/>
            </svg>
          </div>
          <span className="brand-name">JobConnect</span>
        </div>

        <div className="left-content">
          <h1>Tìm việc làm<br />mơ ước của bạn</h1>
          <p>Kết nối hàng nghìn nhà tuyển dụng uy tín với ứng viên tài năng trên toàn quốc.</p>
          <ul className="feature-list">
            <li><span>✓</span> Hơn 50.000 việc làm mới mỗi tháng</li>
            <li><span>✓</span> Kết nối trực tiếp với nhà tuyển dụng</li>
            <li><span>✓</span> Công cụ tạo CV chuyên nghiệp miễn phí</li>
          </ul>
        </div>

        <div className="stats">
          <div className="stat"><strong>50K+</strong><span>Việc làm</span></div>
          <div className="stat"><strong>10K+</strong><span>Công ty</span></div>
          <div className="stat"><strong>500K+</strong><span>Ứng viên</span></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="login-form-wrap">
          <h2>Đăng nhập</h2>
          <p className="subtitle">Chào mừng bạn quay trở lại</p>

          <div className="role-toggle">
            <button className={role === 'jobseeker' ? 'active' : ''} onClick={() => setRole('jobseeker')}>Ứng viên</button>
            <button className={role === 'employer' ? 'active' : ''} onClick={() => setRole('employer')}>Nhà tuyển dụng</button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </span>
                <input id="email" type="email" placeholder="Nhập địa chỉ email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email"/>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                </span>
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Nhập mật khẩu" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password"/>
                <button type="button" className="toggle-password" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? 'Ẩn' : 'Hiện'}>
                  {showPassword
                    ? <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>
                    : <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                  }
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me"><input type="checkbox"/><span>Ghi nhớ đăng nhập</span></label>
              <a href="#" className="forgot-link">Quên mật khẩu?</a>
            </div>

            <button type="submit" className="btn-login">Đăng nhập</button>
          </form>

          <div className="divider"><span>hoặc đăng nhập với</span></div>

          <div className="social-login">
            <button type="button" className="btn-social">
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button type="button" className="btn-social">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <p className="register-link">Chưa có tài khoản? <a href="#">Đăng ký ngay</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
