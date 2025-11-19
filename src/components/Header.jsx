import React, { useContext, useMemo } from 'react'
import { assets } from '../assets/assets'
import { FaUserMd, FaCalendarCheck, FaShieldAlt, FaVideo } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const smoothScrollTo = (x, y) => {
  window.scrollTo({ top: y, left: x, behavior: 'smooth' })
}

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
}

const chipsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const chipItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const statsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

const statItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
}

const Header = () => {
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()

  // Pick a random featured doctor from database (prefer available one)
  const featuredDoctor = useMemo(() => {
    if (!doctors || doctors.length === 0) return null

    const available = doctors.filter((d) => d.available)
    const pool = available.length > 0 ? available : doctors

    const randomIndex = Math.floor(Math.random() * pool.length)
    return pool[randomIndex]
  }, [doctors])

  return (
    <motion.div
      className="relative bg-[#F1FAEE] text-[#1D3557] rounded-3xl 
      px-4 sm:px-6 md:px-10 lg:px-16 
      py-10 md:py-14 pt-24
      my-10 sm:my-14 md:my-20 
      mx-3 sm:mx-6 md:mx-8 lg:mx-14 
      overflow-hidden border border-[#A8DADC]/40 shadow-md"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 w-52 sm:w-64 h-52 sm:h-64 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-[#457B9D] opacity-30 rounded-full blur-3xl" />
        <div className="absolute inset-x-6 sm:inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-[#A8DADC]/60 to-transparent opacity-50" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center">
        {/* Left side */}
        <motion.section
          className="lg:col-span-7 flex flex-col gap-6"
          variants={leftVariants}
        >
          {/* Top badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8DADC]/30 border border-[#A8DADC]/60 text-[11px] sm:text-xs font-medium tracking-wide w-fit"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
              <FaUserMd />
            </span>
            Smart Online Health Platform
          </motion.div>

          {/* Heading */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Your Health,
              <span className="block">Our Responsibility.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#457B9D] to-[#A8DADC]">
                Book Appointments Seamlessly
              </span>
            </h1>

            <p className="text-[#1D3557]/80 max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
              Consult certified doctors, manage appointments, and access care from anywhere. 
              Secure, convenient, and built to keep your health on track.
            </p>
          </motion.div>

          {/* Feature chips */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm"
            variants={chipsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow-sm border border-[#A8DADC]/40"
              variants={chipItem}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-xs">
                <FaCalendarCheck />
              </span>
              <div>
                <p className="font-semibold">Instant Booking</p>
                <p className="text-[11px] opacity-70">Slots in real-time</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow-sm border border-[#A8DADC]/40"
              variants={chipItem}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A8DADC] text-[#1D3557] text-xs">
                <FaVideo />
              </span>
              <div>
                <p className="font-semibold">Video Consults</p>
                <p className="text-[11px] opacity-70">From home comfort</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow-sm border border-[#A8DADC]/40"
              variants={chipItem}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F1FAEE] border border-[#457B9D]/50 text-xs">
                <FaShieldAlt />
              </span>
              <div>
                <p className="font-semibold">Secure Records</p>
                <p className="text-[11px] opacity-70">Privacy first</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA + profiles */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex flex-col xs:flex-row gap-3">
              <a
                href="#speciality"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#F1FAEE] bg-gradient-to-r from-[#457B9D] to-[#1D3557] hover:shadow-xl hover:translate-y-[1px] transition-all duration-300 active:scale-95"
              >
                Book Appointment
                <img className="w-3" src={assets.arrow_icon} alt="arrow" />
              </a>
              <button
                onClick={() => {
                  navigate('/doctors')
                  smoothScrollTo(0, 0)
                }}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium border border-[#A8DADC] bg-white/70 hover:bg-[#A8DADC]/20 transition-all"
              >
                Explore Doctors
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs md:text-sm">
              <img
                className="w-16 sm:w-20 md:w-24 opacity-90"
                src={assets.group_profiles}
                alt="group"
              />
              <div>
                <p className="font-semibold">120+ Trusted Doctors</p>
                <p className="text-[11px] md:text-[12px] text-[#1D3557]/70">
                  Verified specialists · 4.9★ average rating
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Right side: mini dashboard card */}
        <motion.aside
          className="lg:col-span-5"
          variants={rightVariants}
        >
          <div className="relative max-w-sm sm:max-w-md mx-auto w-full">
            {/* Gradient border wrapper */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#A8DADC] via-[#457B9D] to-[#1D3557] rounded-3xl opacity-40 blur-sm" />
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-xl flex flex-col gap-4 border border-[#A8DADC]/40">
              {/* Doctor row (dynamic) */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl overflow-hidden border border-[#A8DADC]/60 bg-[#F1FAEE] flex items-center justify-center">
                    {featuredDoctor ? (
                      <img
                        src={featuredDoctor.image}
                        alt={featuredDoctor.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-[#A8DADC]/40 animate-pulse" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm">
                    {featuredDoctor ? (
                      <>
                        <p className="font-semibold flex items-center gap-1">
                          {featuredDoctor.name}
                          {featuredDoctor.available && (
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                          )}
                        </p>
                        <p className="text-[10px] sm:text-[11px] opacity-70">
                          {featuredDoctor.speciality}
                          {featuredDoctor.experience && (
                            <> · {featuredDoctor.experience}+ yrs exp.</>
                          )}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold">Loading doctor...</p>
                        <p className="text-[10px] sm:text-[11px] opacity-60">
                          Please wait
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-right text-[10px] sm:text-xs">
                  <p className="font-semibold">Next available</p>
                  <p className="opacity-70">
                    {featuredDoctor
                      ? featuredDoctor.available
                        ? 'Slots open today'
                        : 'Check schedule'
                      : 'Fetching...'}
                  </p>
                </div>
              </div>

              {/* Schedule preview (static for now) */}
              <div className="rounded-2xl bg-[#F1FAEE] border border-[#A8DADC]/50 p-3 text-[11px] sm:text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[12px] sm:text-[13px]">
                      Today&apos;s slots
                    </p>
                    <p className="opacity-70 text-[10px] sm:text-[11px]">
                      Limited seats available
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-white text-[10px] sm:text-[11px] border border-[#A8DADC]/60">
                    6 open
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['10:00 AM', '11:30 AM', '04:30 PM', '06:00 PM'].map((time, idx) => (
                    <button
                      key={time}
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] border ${
                        idx === 2
                          ? 'bg-[#457B9D] text-[#F1FAEE] border-[#457B9D]'
                          : 'bg-white border-[#A8DADC]/60 text-[#1D3557]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom stats row */}
              <motion.div
                className="grid grid-cols-3 gap-3 text-[10px] sm:text-xs"
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.div
                  className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/50"
                  variants={statItem}
                >
                  <p className="text-[10px] sm:text-[11px] opacity-70">
                    Patients served
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold">12k+</p>
                </motion.div>
                <motion.div
                  className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/50"
                  variants={statItem}
                >
                  <p className="text-[10px] sm:text-[11px] opacity-70">
                    Response time
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold">&lt; 5 min</p>
                </motion.div>
                <motion.div
                  className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/50"
                  variants={statItem}
                >
                  <p className="text-[10px] sm:text-[11px] opacity-70">
                    Satisfaction
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold">4.9★</p>
                </motion.div>
              </motion.div>

              {/* View profile button */}
              <button
                onClick={() => {
                  if (!featuredDoctor) return
                  navigate(`/appointment/${featuredDoctor._id}`)
                  smoothScrollTo(0, 0)
                }}
                className="mt-1 w-full text-[11px] sm:text-xs md:text-sm font-medium rounded-full border border-[#457B9D] py-2 hover:bg-[#457B9D] hover:text-[#F1FAEE] transition-colors"
              >
                View doctor profile &amp; reviews
              </button>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  )
}

export default Header
