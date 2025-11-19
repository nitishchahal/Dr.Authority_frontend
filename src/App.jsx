import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/Terms&Conditions'
import ScrollToTop from './ScrolltoTop'
import HelpCenter from './pages/HelpCenter'
import Faqs from './pages/Faqs'
import CancellationPolicy from './pages/CancellationPolicy'
import ReportIssue from './pages/ReportIssue'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/help-center" element={<HelpCenter />} />
<Route path="/faqs" element={<Faqs />} />
<Route path="/cancellation-policy" element={<CancellationPolicy />} />
<Route path="/report-issue" element={<ReportIssue />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App