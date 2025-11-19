import React, { useState } from "react";
import {
  FiShield,
  FiLock,
  FiUser,
  FiGlobe,
  FiMail,
  FiDatabase,
  FiActivity,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionDetails = {
    collection: {
      title: "Information We Collect",
      body: `
We collect the minimum data required to provide a smooth and secure healthcare experience:

• Personal details: Name, email, phone number, gender, age and your account preferences.  
• Health-related data: Symptoms, health history, reports and notes that you knowingly upload or share with a doctor.  
• Technical data: Device type, browser, IP, and interaction events (like pages viewed and buttons clicked) to improve performance and fix issues.  
• Communication: Messages, feedback, support requests and reviews you share with our team.

We never collect sensitive data silently. Whenever something is shared, it is always with your action or consent.`
    },
    usage: {
      title: "How We Use Your Data",
      body: `
We use your data strictly for providing and improving our platform:

• To create and manage your account and appointments.  
• To connect you with doctors, show your past consultations and help you continue your treatment.  
• To send reminders, alerts and important health or account notifications.  
• To monitor performance, prevent abuse, detect fraud and maintain platform security.  
• To comply with legal obligations and applicable healthcare regulations.

We do not sell your personal data to advertisers or third-party marketers.`
    },
    sharing: {
      title: "How We Share Your Data",
      body: `
We only share your information in controlled and transparent situations:

• With doctors or healthcare professionals you choose to consult with.  
• With secure third-party partners like payment gateways, SMS/email service providers and analytics tools—only what they strictly need.  
• When required by law, court order or government request.  
• To protect the rights, safety and property of users, healthcare professionals or our platform.

Every partner is bound by confidentiality and data protection obligations.`
    },
    rights: {
      title: "Your Rights & Controls",
      body: `
Depending on your location, you may have the right to:

• Access your personal data stored with us.  
• Update or correct inaccurate information.  
• Request deletion of your account and data (subject to legal retention requirements).  
• Limit or opt-out of certain communications like promotional emails.  
• Request a copy or transfer of your records, where applicable.

You can exercise many of these rights directly from your profile settings or by contacting us.`
    },
  };

  const openModal = (key) => setActiveSection(key);
  const closeModal = () => setActiveSection(null);

  const active = activeSection ? sectionDetails[activeSection] : null;

  return (
    <div className="mt-20">
      <div className="relative bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]/20 rounded-2xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 md:my-16 shadow-xl overflow-hidden">
        {/* Background Decor */}
        <div className="absolute -top-28 -left-20 w-96 h-96 bg-[#A8DADC] blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#F1FAEE] blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="relative z-10 space-y-14 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC] text-[11px] text-[#1D3557]/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FiShield />
              </span>
              <span>Your data, protected with care</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D3557]">
              PRIVACY <span className="text-[#457B9D] font-bold">POLICY</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/75">
              We built this platform with privacy and trust at the center.  
              Learn how we collect, use and protect your information.
            </p>
            <p className="text-[11px] text-[#1D3557]/60 mt-1">
              Last updated: 19 November 2025
            </p>
          </div>

          {/* Data Flow Diagram */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-[#A8DADC]/30 flex items-center justify-center mb-3">
                <FiDatabase className="text-[#1D3557]" />
              </div>
              <h3 className="text-sm font-semibold text-[#457B9D] mb-1">
                We Collect
              </h3>
              <p className="text-xs text-[#1D3557]/70">
                Only what&apos;s needed to create your account, book appointments
                and personalize your experience.
              </p>
            </div>
            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-[#A8DADC]/30 flex items-center justify-center mb-3">
                <FiActivity className="text-[#1D3557]" />
              </div>
              <h3 className="text-sm font-semibold text-[#457B9D] mb-1">
                We Use
              </h3>
              <p className="text-xs text-[#1D3557]/70">
                To connect you with doctors, improve performance and keep your
                experience safe and seamless.
              </p>
            </div>
            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-[#A8DADC]/30 flex items-center justify-center mb-3">
                <FiLock className="text-[#1D3557]" />
              </div>
              <h3 className="text-sm font-semibold text-[#457B9D] mb-1">
                We Protect
              </h3>
              <p className="text-xs text-[#1D3557]/70">
                Using encryption, access controls and monitoring to safeguard
                your personal and health data.
              </p>
            </div>
          </div>

          {/* Main Sections with "Read details" popups */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiUser className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    1. Information We Collect
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  Learn what types of personal, health and technical data we
                  handle when you use our platform.
                </p>
                <button
                  onClick={() => openModal("collection")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read full details
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiLock className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    2. How We Use Your Information
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  We use your data to run the platform, connect you with
                  doctors and enhance your experience.
                </p>
                <button
                  onClick={() => openModal("usage")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read full details
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiGlobe className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    3. How We Share & Store Data
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  We only share data with trusted partners, and only when it&apos;s
                  required for the service to work.
                </p>
                <button
                  onClick={() => openModal("sharing")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read full details
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiShield className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    4. Your Rights & Choices
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  You are always in control of your data. Request, update or
                  ask us to delete it at any time.
                </p>
                <button
                  onClick={() => openModal("rights")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read full details
                </button>
              </div>
            </div>
          </div>

          {/* Bottom: Contact + Note */}
          <div className="grid md:grid-cols-[2fr,3fr] gap-6 items-start">
            <div className="bg-white/80 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <FiMail className="text-[#457B9D]" />
                <h3 className="text-sm font-semibold text-[#1D3557]">
                  Questions about privacy?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-1">
                We&apos;re here to help you understand how your data is used.
              </p>
              <p className="text-xs sm:text-sm text-[#457B9D] font-medium">
                Email: support@yourappname.com
              </p>
            </div>
            <p className="text-[11px] sm:text-xs text-[#1D3557]/60 bg-white/60 border border-dashed border-[#CDE4D4] rounded-2xl p-4">
              This Privacy Policy is a general template and should be reviewed by
              a legal professional. Please update it to match your actual data
              practices and local regulations.
            </p>
          </div>
        </div>

        {/* Popup Modal */}
        {active && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-[#F1FAEE] max-w-lg w-full rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#A8DADC] p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                  {active.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-xs text-[#457B9D] hover:text-[#1D3557] font-medium"
                >
                  Close
                </button>
              </div>
              <p className="whitespace-pre-line text-xs sm:text-sm text-[#1D3557]/80 leading-relaxed">
                {active.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
