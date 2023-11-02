import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Home, Dashboard, Analytics, Admin } from './pages'
import { useState } from 'react'
import { ProtectRoute } from './components/ProtectRoute'

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 1,
      name: "Roddy",
      permission: ['analize']
    })
  }

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {
        user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route element={<ProtectRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/analytics" element={
          <ProtectRoute isAllowed={!!user && user.permission.includes('analize')}>
            <Analytics />
          </ProtectRoute>
        } />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to="/landing">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App