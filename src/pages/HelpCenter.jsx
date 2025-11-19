import React from "react";
import {
  FiSearch,
  FiHelpCircle,
  FiFileText,
  FiPhone,
  FiSettings,
  FiUser,
  FiShield,
} from "react-icons/fi";

const HelpCenter = () => {
  return (
    <div className="mt-20">
      <div className="relative bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]/20 rounded-2xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 md:my-16 shadow-xl overflow-hidden">

        {/* Background Decor */}
        <div className="absolute -top-28 -left-20 w-96 h-96 bg-[#A8DADC] blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#F1FAEE] blur-3xl opacity-40 animate-pulse-slow"></div>

        {/* Main Content */}
        <div className="relative z-10 space-y-16 md:space-y-20">

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC] text-[11px] text-[#1D3557]/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FiHelpCircle />
              </span>
              <span>We’re here to help you</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D3557]">
              HELP <span className="text-[#457B9D] font-bold">CENTER</span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/75">
              Find answers, explore guides, or connect with support.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <FiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-[#457B9D]/70" />
              <input
                type="text"
                placeholder="Search for help... (e.g. Appointment, Refund, Account)"
                className="w-full py-3 pl-12 pr-4 bg-white/90 border border-[#CDE4D4] rounded-full text-sm outline-none focus:border-[#457B9D] transition"
              />
            </div>
          </div>

          {/* Popular Topics */}
          <div className="space-y-6">
            <p className="text-center text-lg font-semibold text-[#1D3557]">
              Popular Help Topics
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Topic Cards */}
              {[
                {
                  icon: <FiUser />,
                  title: "Managing Your Account",
                  desc: "Update profile, change password & secure your data.",
                },
                {
                  icon: <FiFileText />,
                  title: "Booking Appointments",
                  desc: "How to book, reschedule or cancel appointments.",
                },
                {
                  icon: <FiPhone />,
                  title: "Contacting Support",
                  desc: "Reach out to our support team anytime.",
                },
                {
                  icon: <FiSettings />,
                  title: "App Settings",
                  desc: "Customize notifications, preferences, and more.",
                },
                {
                  icon: <FiShield />,
                  title: "Privacy & Security",
                  desc: "Understand how we protect your data.",
                },
                {
                  icon: <FiHelpCircle />,
                  title: "General FAQs",
                  desc: "Find quick answers to common questions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 border border-[#A8DADC] rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#A8DADC]/40 flex items-center justify-center mb-4 text-[#1D3557] text-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#457B9D] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#1D3557]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Guides */}
          <div className="space-y-10">
            <p className="text-center text-lg font-semibold text-[#1D3557]">
              Step-by-Step Guides
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Guide 1 */}
              <div className="bg-white/85 border border-[#CDE4D4] rounded-2xl p-6 shadow-md">
                <h3 className="text-base font-semibold text-[#1D3557] mb-3">
                  How to Book an Appointment
                </h3>
                <ul className="text-sm text-[#1D3557]/75 space-y-2 list-disc list-inside">
                  <li>Go to the Doctors section.</li>
                  <li>Select the doctor you want to consult.</li>
                  <li>Choose a time slot that suits you.</li>
                  <li>Confirm your booking and complete payment (if required).</li>
                  <li>You'll receive your appointment details instantly.</li>
                </ul>
              </div>

              {/* Guide 2 */}
              <div className="bg-white/85 border border-[#CDE4D4] rounded-2xl p-6 shadow-md">
                <h3 className="text-base font-semibold text-[#1D3557] mb-3">
                  How to Cancel or Reschedule
                </h3>
                <ul className="text-sm text-[#1D3557]/75 space-y-2 list-disc list-inside">
                  <li>Open your profile and go to “My Appointments”.</li>
                  <li>Select the appointment you want to change.</li>
                  <li>Choose reschedule or cancel.</li>
                  <li>Follow the on-screen steps.</li>
                  <li>Refunds (if eligible) follow doctor’s policy.</li>
                </ul>
              </div>
            </div>
          </div>

         
          {/* Contact Support CTA */}
          <div className="text-center mt-10">
            <p className="text-sm text-[#1D3557]/70 mb-3">Still need help?</p>

            <button className="bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white px-8 py-3 rounded-full text-sm shadow-md hover:shadow-xl transition-all hover:scale-105">
              Contact Support Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

/* Animation (put in global CSS)
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
*/
