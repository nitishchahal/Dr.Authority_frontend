import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaUserMd, FaCalendarCheck, FaClock } from 'react-icons/fa'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } =
    useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(false)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [showFullAbout, setShowFullAbout] = useState(false)

  const navigate = useNavigate()

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSolts = async () => {
    setDocSlots([])

    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        const slotDate = day + '_' + month + '_' + year
        const slotTime = formattedTime

        const isSlotAvailable =
          docInfo.slots_booked[slotDate] &&
          docInfo.slots_booked[slotDate].includes(slotTime)
            ? false
            : true

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          })
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Login to book appointment')
      return navigate('/login')
    }

    const date = docSlots[slotIndex][0].datetime
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    const slotDate = day + '_' + month + '_' + year

    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      )
      if (data.success) {
        toast.success(data.message)
        getDoctosData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (doctors.length > 0) fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSolts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docInfo])

  if (!docInfo) return null

  const fullAbout = docInfo.about || ''
  const isLongAbout = fullAbout.length > 220
  const displayedAbout =
    showFullAbout || !isLongAbout
      ? fullAbout
      : fullAbout.slice(0, 220) + '...'

  return (
   <div className="relative mt-8 sm:mt-16 lg:mt-20 mx-3 sm:mx-6 md:mx-12 lg:mx-auto max-w-7xl bg-[#F1FAEE] rounded-3xl p-4 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(29,53,87,0.08)] border border-[#A8DADC]/50 overflow-hidden">
  
  {/* Modern High-End Background Accents */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#A8DADC]/40 to-transparent rounded-full blur-3xl opacity-60" />
    <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-gradient-to-bl from-[#457B9D]/20 to-transparent rounded-full blur-3xl opacity-50" />
    <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white/40 rounded-full blur-2xl opacity-40" />
  </div>

  <div className="relative z-10 w-full">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-6 mb-8 border-b border-[#A8DADC]/40">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A8DADC]/30 border border-[#A8DADC]/80 text-[11px] sm:text-xs font-medium text-[#1D3557] tracking-wide backdrop-blur-sm shadow-sm w-fit">
          <span className="flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE]">
            <FaUserMd className="text-[10px]" />
          </span>
          <span>Verified Medical Specialist Booking</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3557] tracking-tight">
          Book Your Appointment
        </h1>
      </div>
      
      {/* Premium Step tracker indicators */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#457B9D] bg-white/50 backdrop-blur-sm px-4 py-2.5 rounded-2xl border border-[#A8DADC]/30 shadow-sm md:bg-transparent md:backdrop-blur-none md:p-0 md:border-0 md:shadow-none">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D]/10 text-[#457B9D] font-bold text-[10px]">1</span>
          <span className="text-[#1D3557]">Choose Date</span>
        </div>
        <span className="h-3 w-px bg-[#A8DADC]" />
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1D3557]/10 text-[#1D3557] font-bold text-[10px]">2</span>
          <span className="text-[#1D3557]/70">Pick Time & Confirm</span>
        </div>
      </div>
    </div>

    {/* ---------- Main Layout Grid ----------- */}
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-12 items-start">
      
      {/* Left Column: Doctor Details (Spans 5 of 12 cols) */}
      <div className="lg:col-span-5 w-full">
        <div className="bg-white border border-[#A8DADC]/50 rounded-2xl shadow-[0_10px_30px_rgba(29,53,87,0.04)] p-5 sm:p-6 flex flex-col sm:flex-row lg:flex-col gap-5 relative overflow-hidden group">
          
          {/* Decorative subtle top line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A8DADC] via-[#457B9D] to-[#1D3557]" />

          {/* Image Container */}
          <div className="flex-shrink-0 flex justify-center sm:justify-start lg:justify-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl bg-[#A8DADC]/10 ring-4 ring-[#F1FAEE] shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={docInfo.image}
                alt={docInfo.name}
              />
              {/* Repositioned Availability Badge (Bottom Right corner of the image) */}
              {typeof docInfo.available !== 'undefined' && (
                <div
                  className={`absolute bottom-2 right-2 px-2.5 py-1 rounded-xl text-[10px] font-semibold backdrop-blur-md shadow-md border ${
                    docInfo.available
                      ? 'bg-emerald-50/95 border-emerald-300 text-emerald-700'
                      : 'bg-rose-50/95 border-rose-300 text-rose-600'
                  }`}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1 animate-pulse" />
                  {docInfo.available ? 'Active' : 'Unavailable'}
                </div>
              )}
            </div>
          </div>

          {/* Text Info */}
          <div className="flex-1 space-y-3 text-center sm:text-left lg:text-center flex flex-col justify-center">
            <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-2 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D3557]">
                {docInfo.name}
              </h2>
              <img className="w-5 h-5 object-contain" src={assets.verified_icon} alt="Verified" />
            </div>

            <div className="flex flex-col gap-2 items-center sm:items-start lg:items-center">
              <p className="text-sm font-medium text-[#457B9D] tracking-wide">
                {docInfo.degree} · {docInfo.speciality}
              </p>
              <span className="px-3 py-1 rounded-md bg-[#F1FAEE] border border-[#A8DADC]/60 text-[#1D3557] font-semibold text-xs shadow-sm">
                {docInfo.experience} Experience
              </span>
            </div>

            {/* About Section */}
            {fullAbout && (
              <div className="text-left bg-[#F1FAEE]/40 border border-[#A8DADC]/30 rounded-xl p-3 mt-1 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-wider text-[#1D3557]/60 font-bold mb-1">About Doctor</p>
                <p className="text-xs text-[#1D3557]/80 leading-relaxed">
                  {displayedAbout}
                  {isLongAbout && (
                    <button
                      onClick={() => setShowFullAbout(!showFullAbout)}
                      className="text-[#457B9D] font-bold ml-1 hover:text-[#1D3557] transition-all underline decoration-dotted"
                    >
                      {showFullAbout ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>
            )}

            <div className="pt-2 sm:pt-3 border-t border-[#A8DADC]/30 flex items-center justify-between mt-auto">
              <span className="text-xs font-medium text-[#1D3557]/70">Consultation Fee</span>
              <span className="text-lg font-bold text-[#1D3557]">
                {currencySymbol}{docInfo.fees}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Booking Selection Card (Spans 7 of 12 cols) */}
      <div className="lg:col-span-7 bg-white border border-[#A8DADC]/50 rounded-2xl shadow-[0_10px_30px_rgba(29,53,87,0.04)] p-5 sm:p-6 lg:p-8 flex flex-col w-full relative overflow-hidden">
        
        <p className="text-lg font-bold text-[#1D3557] flex items-center gap-2 mb-6">
          <FaCalendarCheck className="text-[#457B9D]" />
          Select Schedule Slot
        </p>

        {/* Date Picker Container */}
        <div className="text-xs uppercase tracking-wider text-[#1D3557]/60 font-bold mb-2.5">
          1. Choose a day
        </div>
        
        <div className="flex gap-3 items-center w-full overflow-x-auto pb-3 snap-x scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#F1FAEE] [&::-webkit-scrollbar-thumb]:bg-[#A8DADC] [&::-webkit-scrollbar-thumb]:rounded-full">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <button
                type="button"
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-3 px-3.5 min-w-[3.75rem] sm:min-w-[4.2rem] rounded-xl cursor-pointer transition-all duration-300 snap-center outline-none ${
                  slotIndex === index
                    ? 'bg-gradient-to-b from-[#457B9D] to-[#1D3557] text-[#F1FAEE] shadow-md shadow-[#1D3557]/20 font-bold scale-[1.03]'
                    : 'border border-[#A8DADC]/60 text-[#457B9D] bg-white hover:bg-[#F1FAEE] hover:border-[#457B9D]/50 shadow-sm'
                }`}
              >
                <p className="text-[9px] tracking-widest font-semibold uppercase opacity-80">
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p className="mt-1 text-base font-extrabold">
                  {item[0] && item[0].datetime.getDate()}
                </p>
              </button>
            ))}
        </div>

        {/* Time Slot Picker Container */}
        <div className="mt-6">
          <div className="text-xs uppercase tracking-wider text-[#1D3557]/60 font-bold mb-2.5">
            2. Choose an available time
          </div>
          <div className="flex items-center gap-2.5 w-full overflow-x-auto pb-3 snap-x scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#F1FAEE] [&::-webkit-scrollbar-thumb]:bg-[#A8DADC] [&::-webkit-scrollbar-thumb]:rounded-full">
            {docSlots.length > 0 && docSlots[slotIndex]?.length > 0 ? (
              docSlots[slotIndex].map((item, index) => (
                <button
                  type="button"
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-xs flex-shrink-0 px-5 py-2.5 font-medium rounded-full border transition-all duration-200 cursor-pointer snap-center outline-none ${
                    item.time === slotTime
                      ? 'bg-[#1D3557] text-[#F1FAEE] border-transparent shadow-md font-semibold scale-[1.02]'
                      : 'text-[#1D3557] border-[#A8DADC]/60 bg-white hover:border-[#457B9D] hover:bg-[#F1FAEE]'
                  }`}
                >
                  {item.time.toLowerCase()}
                </button>
              ))
            ) : (
              <div className="w-full p-4 rounded-xl bg-rose-50 border border-rose-100 text-center">
                <p className="text-xs text-rose-600 font-medium">
                  Fully Booked: No slots available for this day.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Submission Button */}
        <button
          onClick={bookAppointment}
          disabled={!slotTime}
          type="button"
          className={`mt-8 text-sm px-8 py-3.5 rounded-xl transition-all duration-300 text-center font-bold tracking-wide shadow-md self-stretch lg:self-end min-w-[200px] ${
            slotTime 
              ? 'bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white hover:shadow-lg hover:shadow-[#1D3557]/20 hover:brightness-110 active:scale-[0.99]' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none'
          }`}
        >
          Confirm Appointment
        </button>
      </div>
    </div>

    {/* ---------- Related Doctors Section ----------- */}
    <div className="mt-12 sm:mt-16 border-t border-[#A8DADC]/40 pt-10">
      <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
    </div>
  </div>
</div>
  )
}

export default Appointment