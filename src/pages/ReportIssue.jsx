import React from "react";
import {
  FaBug,
  FaExclamationTriangle,
  FaMobileAlt,
  FaMoneyBillWave,
  FaUserShield,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const ReportIssue = () => {
  return (
    <div className="mt-20">
      <div className="relative bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]/25 rounded-2xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 my-16 shadow-xl overflow-hidden">
        {/* Background decor */}
        <div className="absolute -top-28 -left-20 w-96 h-96 bg-[#A8DADC] blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#F1FAEE] blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="relative z-10 space-y-14 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC] text-[11px] text-[#1D3557]/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FaBug />
              </span>
              <span>Facing a problem? Tell us what went wrong.</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D3557]">
              REPORT <span className="text-[#457B9D] font-bold">AN ISSUE</span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/75">
              Share details about bugs, payment issues, or anything that&apos;s not
              working as expected. Our team will look into it as quickly as possible.
            </p>
          </div>

          {/* Issue Type Quick Select */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#1D3557] text-center">
              What type of issue are you facing?
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaMobileAlt />,
                  title: "App / Website Issue",
                  desc: "Buttons not working, page not loading, errors, etc.",
                },
                {
                  icon: <FaMoneyBillWave />,
                  title: "Payment Issue",
                  desc: "Amount debited, refund not received, payment failed.",
                },
                {
                  icon: <FaUserShield />,
                  title: "Account / Login",
                  desc: "Cannot log in, OTP not received, profile problems.",
                },
                {
                  icon: <FaExclamationTriangle />,
                  title: "Other",
                  desc: "Anything else that doesn’t feel right.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/85 border border-[#A8DADC] rounded-2xl p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-xl bg-[#A8DADC]/40 flex items-center justify-center text-[#1D3557]">
                      {item.icon}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#457B9D]">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#1D3557]/75">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main layout: Form + Timeline / Tips */}
          <div className="grid lg:grid-cols-[3fr,2fr] gap-10">
            {/* Left: Report form */}
            <div className="bg-white/90 border border-[#A8DADC] rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
              <p className="text-base font-semibold text-[#1D3557] mb-1">
                Share your issue details
              </p>
              <p className="text-xs sm:text-sm text-[#1D3557]/70 mb-3">
                The more details you give, the easier it is for us to understand and fix
                the problem.
              </p>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs text-[#1D3557]/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-[#1D3557]/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs text-[#1D3557]/80">
                      Issue Category
                    </label>
                    <select className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition">
                      <option>App / Website Issue</option>
                      <option>Payment Issue</option>
                      <option>Account / Login Issue</option>
                      <option>Doctor / Appointment Issue</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs text-[#1D3557]/80">
                      Urgency
                    </label>
                    <select className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition">
                      <option>Low (Informational)</option>
                      <option>Medium (Needs attention)</option>
                      <option>High (Affects my appointment)</option>
                      <option>Critical (Cannot use app)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-[#1D3557]/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Short title of your issue"
                    className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs text-[#1D3557]/80">
                    Describe the issue
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what happened, which screen you were on, and what you expected to see."
                    className="w-full p-3 border border-[#CDE4D4] rounded-xl bg-white/95 text-xs sm:text-sm outline-none focus:border-[#457B9D] transition resize-none"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs text-[#1D3557]/80">
                    Attach screenshots (optional)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-[11px] sm:text-xs text-[#1D3557]/75">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-full border border-dashed border-[#A8DADC] bg-white/80 hover:bg-[#A8DADC]/20 transition text-xs font-medium text-[#457B9D]"
                    >
                      Upload File
                    </button>
                    <p>
                      Screenshots of the problem screen help us understand and fix
                      issues faster.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Submit Issue
                </button>
              </form>
            </div>

            {/* Right: What happens next / timeline */}
            <div className="space-y-6">
              <div className="bg-white/85 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#1D3557] mb-2">
                  What happens after you submit?
                </p>
                <div className="space-y-4 text-xs sm:text-sm text-[#1D3557]/80">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <FaClock className="text-[#457B9D]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#457B9D]">
                        1. We log your issue
                      </p>
                      <p>
                        Your issue is automatically recorded in our internal tracking
                        system along with your app details and timestamps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1">
                      <FaBug className="text-[#457B9D]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#457B9D]">
                        2. Support reviews it
                      </p>
                      <p>
                        Our support and technical team reviews the details, tries to
                        reproduce the problem and identifies the root cause.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1">
                      <FaCheckCircle className="text-[#457B9D]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#457B9D]">
                        3. You get an update
                      </p>
                      <p>
                        We&apos;ll email you with an update, solution or workaround as
                        soon as we have one. For critical issues, we prioritize faster
                        response times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white/80 border border-dashed border-[#CDE4D4] rounded-2xl p-5 shadow-sm text-xs sm:text-sm text-[#1D3557]/80">
                <p className="font-semibold text-[#457B9D] mb-2">
                  Tips to help us resolve your issue faster
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Mention your device type (Android, iOS, Web, etc.).</li>
                  <li>Share approximate date & time when the issue occurred.</li>
                  <li>Include error messages you see on the screen.</li>
                  <li>Add screenshots showing the exact problem area.</li>
                </ul>
              </div>

              {/* Extra contact */}
              <div className="bg-white/80 border border-[#A8DADC] rounded-2xl p-4 shadow-sm text-xs sm:text-sm text-[#1D3557]/80">
                <p className="font-semibold text-[#457B9D] mb-1">
                  For urgent issues related to payments or appointments:
                </p>
                <p className="mb-1">
                  You can also reach our support team directly for quicker attention.
                </p>
                <p className="font-medium text-[#457B9D]">
                  Email: support@yourappname.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;

/* Ensure this animation is in your global CSS once:
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
*/
