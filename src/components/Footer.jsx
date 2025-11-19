import React from 'react'
import Logo from '../assets/new_logo.png'
import { Link } from 'react-router-dom'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative mt-32 mb-10 mx-4 md:mx-10 rounded-3xl overflow-hidden bg-[#F9FAFB] shadow-xl border border-[#CDE4D450]">
      {/* Soft Floating Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#A8DADC] opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#457B9D] opacity-20 blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 py-12 md:py-14">
        {/* Top grid */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-[2.2fr_1.2fr_1.2fr_1.7fr]">
          {/* Brand Section */}
          <div className="space-y-4">
            <img className="w-44" src={Logo} alt="logo" />
            <p className="text-[#1D3557]/80 leading-relaxed max-w-sm text-sm">
              Connecting you with trusted medical professionals for fast, reliable,
              and convenient healthcare services — anytime, anywhere.
            </p>

            {/* Small highlight badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#CDE4D4] text-[11px] text-[#1D3557]/80">
              <span className="h-2 w-2 rounded-full bg-[#94B49F]" />
              <span>Secure · Verified · Patient-first</span>
            </div>

            {/* Social Icons (React Icons) */}
            <div className="flex items-center gap-3 mt-4">
              <FaFacebookF
                className="w-5 h-5 text-[#1D3557]/70 hover:text-[#1D3557] transition-all cursor-pointer"
              />
              <FaTwitter
                className="w-5 h-5 text-[#1D3557]/70 hover:text-[#1D3557] transition-all cursor-pointer"
              />
              <FaLinkedinIn
                className="w-5 h-5 text-[#1D3557]/70 hover:text-[#1D3557] transition-all cursor-pointer"
              />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-lg font-semibold text-[#1D3557] mb-4">Company</p>
            <ul className="space-y-3 text-sm text-[#457B9D]">
              <Link to="/" className="hover:text-[#1D3557] cursor-pointer transition-all block">Home</Link>
              <Link to="/doctors" className="hover:text-[#1D3557] cursor-pointer transition-all block">Doctors</Link>
              <Link to="/about" className="hover:text-[#1D3557] cursor-pointer transition-all block">About Us</Link>
              <Link to="/privacy-policy" className="hover:text-[#1D3557] cursor-pointer transition-all block">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#1D3557] cursor-pointer transition-all block">Terms & Conditions</Link>
            </ul>
          </div>

          {/* Support */}
        <div>
  <p className="text-lg font-semibold text-[#1D3557] mb-4">Support</p>
  <ul className="space-y-3 text-sm text-[#457B9D]">
    <li>
      <Link
        to="/help-center"
        className="hover:text-[#1D3557] cursor-pointer transition-all"
      >
        Help Center
      </Link>
    </li>
    <li>
      <Link
        to="/faqs"
        className="hover:text-[#1D3557] cursor-pointer transition-all"
      >
        FAQs
      </Link>
    </li>
    <li>
      <Link
        to="/cancellation-policy"
        className="hover:text-[#1D3557] cursor-pointer transition-all"
      >
        Cancellation Policy
      </Link>
    </li>
    <li>
      <Link
        to="/report-issue"
        className="hover:text-[#1D3557] cursor-pointer transition-all"
      >
        Report an Issue
      </Link>
    </li>
  </ul>
</div>

          {/* Contact + Hours */}
          <div className="space-y-5">
            <div>
              <p className="text-lg font-semibold text-[#1D3557] mb-3">Contact</p>
              <ul className="space-y-2 text-sm text-[#457B9D]">
                <li>+91 600-655-6223</li>
                <li>dr.authority@gmail.com</li>
                <li className="text-[#1D3557]/70 text-xs">
                  24/7 online appointment support
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#1D3557] mb-2">Working Hours</p>
              <ul className="space-y-1 text-xs text-[#457B9D]">
                <li>Mon – Sat: 08:00 AM – 10:00 PM</li>
                <li>Sun: 09:00 AM – 06:00 PM</li>
              </ul>
            </div>

            {/* App Chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 rounded-full text-[10px] bg-white/80 border border-[#CDE4D4] text-[#1D3557]/80">
                Patient app
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] bg-white/80 border border-[#CDE4D4] text-[#1D3557]/80">
                Doctor portal
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-10 border-[#1D3557]/15" />

        {/* Bottom bar */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1D3557]/80">
          <p>© 2024 Dr.Authority.com — All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <p className="hover:text-[#457B9D] cursor-pointer transition-colors">Cookies</p>
            <span className="h-3 w-[1px] bg-[#1D3557]/30" />
            <p className="hover:text-[#457B9D] cursor-pointer transition-colors">Data Security</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

/* Pulse Animation */
