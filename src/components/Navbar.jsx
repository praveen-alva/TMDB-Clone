import React, { useState } from 'react'
import Logo from '../movielogo.jpg'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-[45px] rounded-lg" />
          <h1 className="text-2xl font-bold text-blue-600">MovieApp</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-blue-500 text-lg font-semibold hover:text-blue-700 transition">Home</Link>
          <Link to="/watchlist" className="text-blue-500 text-lg font-semibold hover:text-blue-700 transition">Watchlist</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-6 pb-4 bg-white border-t">
          <Link 
            to="/" 
            onClick={() => setOpen(false)} 
            className="text-blue-500 text-lg font-semibold hover:text-blue-700 transition"
          >
            Home
          </Link>
          <Link 
            to="/watchlist" 
            onClick={() => setOpen(false)} 
            className="text-blue-500 text-lg font-semibold hover:text-blue-700 transition"
          >
            Watchlist
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
