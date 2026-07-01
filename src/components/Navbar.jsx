import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { FiMenu, FiX, FiChevronDown, FiBell, FiUser, FiCalendar, FiLogOut } from 'react-icons/fi'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'All Doctors', path: '/doctors' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
          
          {/* Left: Logo & Brand Tag */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <img
              src={assets.new_logo || Logo}
              alt="Logo"
              className="w-28 sm:w-32 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="hidden lg:inline-block text-[11px] font-semibold tracking-wide text-slate-500 uppercase px-2.5 py-1 rounded-full border border-slate-100 bg-slate-50/50">
              Health & Appointments
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-300 group ${
                    isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-emerald-600 transition-all duration-300 ${
                        isActive ? 'w-5' : 'w-0 group-hover:w-4'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {token && userData ? (
              <>
                {/* Notification Icon */}
                <button className="hidden sm:inline-flex relative items-center justify-center h-10 w-10 rounded-full border border-slate-200/60 bg-white shadow-sm text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all duration-200">
                  <FiBell className="text-base" />
                  <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                </button>

                {/* User Dropdown */}
                <div className="relative group py-2">
                  <div className="flex items-center gap-2.5 cursor-pointer p-1 pr-2 rounded-full hover:bg-slate-50 transition-colors duration-200">
                    {userData.image ? (
                      <img
                        src={userData.image}
                        alt="User profile"
                        className="w-8 h-8 rounded-full border border-slate-200 object-cover shadow-sm"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-600">
                        <FiUser className="text-sm" />
                      </div>
                    )}
                    <div className="hidden sm:flex flex-col text-left">
                      <span className="text-xs font-semibold text-slate-800 leading-tight">
                        {userData.name || 'Account'}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Dashboard
                      </span>
                    </div>
                    <FiChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-300 group-hover:rotate-180" />
                  </div>

                  {/* Dropdown Menu Overlay */}
                  <div className="absolute right-0 top-full mt-1 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 px-1.5 flex flex-col gap-0.5 text-sm text-slate-600 w-52 opacity-0 scale-95 origin-top-right pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <button
                      onClick={() => navigate('/my-profile')}
                      className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      <FiUser className="text-slate-400 text-base" />
                      <span>My Profile</span>
                    </button>
                    <button
                      onClick={() => navigate('/my-appointments')}
                      className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      <FiCalendar className="text-slate-400 text-base" />
                      <span>Appointments</span>
                    </button>
                    <div className="h-px bg-slate-100 my-1 mx-2" />
                    <button
                      onClick={logout}
                      className="flex items-center gap-2.5 w-full text-left px-3 py-2 rounded-xl hover:bg-rose-50 text-rose-600 transition-colors"
                    >
                      <FiLogOut className="text-base" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-slate-800 active:scale-[0.98] shadow-sm hover:shadow transition-all duration-200"
              >
                <FiUser className="text-sm" />
                <span>Create Account</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
              onClick={() => setShowMenu(true)}
              aria-label="Open menu"
            >
              <FiMenu className="text-lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent fixed navbar content overlay */}
      <div className="h-16 sm:h-20" />

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowMenu(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 w-[80%] max-w-xs p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex justify-between items-center pb-6 border-b border-slate-100 mb-6">
            <img src={assets.new_logo || Logo} alt="Logo" className="w-28 object-contain" />
            <button 
              onClick={() => setShowMenu(false)}
              className="p-1 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Drawer User Card */}
          {token && userData && (
            <div className="mb-6 flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full border border-slate-200 object-cover shadow-sm"
                />
              ) : (
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500">
                  <FiUser className="text-base" />
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-slate-800 truncate">
                  {userData.name || 'User'}
                </span>
                <span className="text-[11px] text-slate-400 truncate">
                  Patient Dashboard
                </span>
              </div>
            </div>
          )}

          {/* Drawer Nav Links */}
          <ul className="flex flex-col gap-1 text-slate-600 font-medium text-base mb-6">
            {navItems.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                      : 'hover:bg-slate-50 active:bg-slate-100'
                  }`
                }
              >
                <span>{label}</span>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-4 border-t border-slate-100">
          {token && userData ? (
            <div className="flex flex-col gap-2 text-sm font-medium">
              <button
                onClick={() => {
                  setShowMenu(false)
                  navigate('/my-profile')
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white active:scale-[0.99] transition-all"
              >
                My Profile
              </button>
              <button
                onClick={() => {
                  setShowMenu(false)
                  navigate('/my-appointments')
                }}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white active:scale-[0.99] transition-all"
              >
                My Appointments
              </button>
              <button
                onClick={() => {
                  setShowMenu(false)
                  logout()
                }}
                className="w-full py-2.5 mt-2 rounded-xl text-rose-600 bg-rose-50 hover:bg-rose-100/70 active:scale-[0.99] transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowMenu(false)
                navigate('/login')
              }}
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold tracking-wide active:scale-[0.99] shadow-sm transition-all"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar