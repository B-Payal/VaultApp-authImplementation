import { Link, useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { useAuth } from '../hooks/useAuth';

/**
 * Navbar component.
 * BUG 4: Navbar ignores auth state completely.
 * It always shows the "Login" link and never shows "Logout" or the User info.
 */
function Navbar() {
  // ❌ BUG 4: useAuth() hook is not called here
  const {isAuthenticated, logout } = useAuth()

  const navigate = useNavigate();

  const handleLogout =()=>{
    logout();
    navigate('/login');
  }

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-brand-600 font-bold text-xl">
          <Shield className="w-6 h-6" />
          <span>VaultApp</span>
        </Link>
        
        <div className="flex items-center space-x-6 text-sm font-medium">
          {isAuthenticated ? (<><Link to="/dashboard" className="text-slate-600 hover:text-brand-600 transition-colors">Dashboard</Link>
          <Link to="/settings" className="text-slate-600 hover:text-brand-600 transition-colors">Settings</Link>
          <Link to="/profile" className="text-slate-600 hover:text-brand-600 transition-colors">Profile</Link>
          <button onClick={handleLogout}>Log Out</button>
          
          <div className="h-6 w-px bg-slate-200 mx-2"></div></>):(<Link 
            to="/login" 
            className="bg-brand-50 text-brand-600 px-4 py-2 rounded-lg hover:bg-brand-100 transition-all font-semibold"
          >
            Login
          </Link>)}
          
          
          {/* ❌ BUG 4: Hardcoded Login link, no Logout option */}
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
