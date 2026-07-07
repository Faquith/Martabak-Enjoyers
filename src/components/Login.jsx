import React, { useState } from 'react'
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const AKUN = [
    { username: 'admin', password: 'admin123', nama: 'Admin Toko' },
    { username: 'faqih', password: 'faqih123', nama: 'Muhammad Faqih' },
  ]

  const handleSubmit = () => {
    setError('')
    if (!form.username || !form.password) {
      setError('Username dan password wajib diisi!')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const cocok = AKUN.find(
        (a) => a.username === form.username && a.password === form.password
      )
      if (cocok) {
        onLogin(cocok)
      } else {
        setError('Username atau password salah!')
        setLoading(false)
      }
    }, 800)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="login-overlay">
      <div className="login-card">
        <div className="login-logo">🥞</div>
        <h2>Martabak Nusantara</h2>
        <p className="login-sub">Masuk untuk mulai memesan</p>

        <div className="login-field">
          <FaUser className="login-icon" />
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="login-field">
          <FaLock className="login-icon" />
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            onKeyDown={handleKeyDown}
          />
          <button className="toggle-pass" onClick={() => setShowPass((p) => !p)} type="button">
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {error && <p className="login-error">{error}</p>}

        <button className="btn-login" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Memverifikasi...' : 'Masuk'}
        </button>

        <div className="login-demo">
          <p>Akun Demo:</p>
          <code>admin / admin123</code>
          <code>faqih / faqih123</code>
        </div>
      </div>
    </div>
  )
}

export default Login
