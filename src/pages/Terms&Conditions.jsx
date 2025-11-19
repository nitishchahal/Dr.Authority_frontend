import React, { useState } from "react";
import {
  FiFileText,
  FiCheckCircle,
  FiAlertTriangle,
  FiUser,
  FiClock,
  FiCreditCard,
} from "react-icons/fi";

const TermsAndConditions = () => {
  const [activeClause, setActiveClause] = useState(null);

  const clauses = {
    acceptance: {
      title: "Acceptance of Terms",
      body: `
By accessing, browsing, creating an account or booking an appointment on our platform, you agree to be bound by these Terms & Conditions.

You confirm that:
• You are at least 18 years old, or using the platform under the guidance of a parent/guardian.  
• You have the legal capacity to enter into this agreement.  
• You have read and understood these Terms and our Privacy Policy.

If you do not agree with any part of these Terms, please do not use our services.`
    },
    services: {
      title: "Description of Services",
      body: `
Our platform is a digital bridge between you and healthcare professionals.

We provide:
• A way to discover doctors and clinics.  
• Online and offline appointment booking options.  
• Access to consultation history, prescriptions and basic health records.  

We do not provide medical services ourselves. Medical advice and treatment are the sole responsibility of the doctors/healthcare providers you choose to consult.`
    },
    account: {
      title: "User Accounts & Responsibilities",
      body: `
When you create an account, you agree to:

• Provide accurate, complete and updated information.  
• Keep your login credentials safe and not share them.  
• Inform us immediately of any unauthorized access or suspicious activity.  

Any action taken from your account will be treated as your own responsibility unless you have notified us of a compromise.`
    },
    payments: {
      title: "Appointments, Payments & Cancellations",
      body: `
For paid consultations or services:

• All applicable fees are shown before you confirm a booking.  
• Payment processing is handled by secure, PCI-compliant payment gateways.  
• Appointment confirmation is subject to doctor availability and payment success (where applicable).  
• Cancellations, rescheduling and refunds (if any) follow our Cancellation & Refund Policy and may vary per doctor/clinic.

We aim to support you if there are delays or doctor-initiated changes, but we are not responsible for their independent decisions.`
    },
    prohibited: {
      title: "Prohibited Use",
      body: `
You agree NOT to use the platform to:

• Share false, misleading or offensive content.  
• Harass, impersonate or harm doctors, staff or other users.  
• Upload viruses, malicious code or attempt to breach security.  
• Reverse engineer, copy or misuse any part of the platform.  
• Violate any local, national or international law.  

We reserve the right to suspend or terminate accounts that violate these rules.`
    },
    liability: {
      title: "Limitation of Liability",
      body: `
To the maximum extent allowed by law, we are not liable for:

• Any medical outcomes, diagnosis, prescriptions or advice provided by doctors.  
• Losses resulting from your reliance on information available on the platform.  
• Delays, failures or interruptions caused by technical issues or third-party services.  

You are responsible for verifying and following the medical advice of your doctor, and for seeking emergency help when needed.`
    },
  };

  const openClause = (key) => setActiveClause(key);
  const closeClause = () => setActiveClause(null);

  const active = activeClause ? clauses[activeClause] : null;

  return (
    <div className="mt-20">
      <div className="relative bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]/20 rounded-2xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 md:my-16 shadow-xl overflow-hidden">
        {/* Background decor */}
        <div className="absolute -top-28 -right-24 w-96 h-96 bg-[#A8DADC] blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-[#F1FAEE] blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="relative z-10 space-y-14 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC] text-[11px] text-[#1D3557]/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FiFileText />
              </span>
              <span>Simple terms, clear expectations</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D3557]">
              TERMS <span className="text-[#457B9D] font-bold">&amp; CONDITIONS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/75">
              These terms explain how you can use our platform and what you
              can expect from us in return.
            </p>
            <p className="text-[11px] text-[#1D3557]/60 mt-1">
              Last updated: 19 November 2025
            </p>
          </div>

          {/* Onboarding / diagram-style strip */}
          <div className="bg-white/80 border border-[#CDE4D4] rounded-2xl p-5 md:p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FiCheckCircle className="text-[#457B9D]" />
              <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                How using our platform works
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 rounded-full bg-[#A8DADC]/30 flex items-center justify-center text-xs font-semibold text-[#1D3557]">
                  1
                </div>
                <p className="text-[11px] text-[#1D3557]/80">
                  Create your account with basic details.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 rounded-full bg-[#A8DADC]/30 flex items-center justify-center text-xs font-semibold text-[#1D3557]">
                  2
                </div>
                <p className="text-[11px] text-[#1D3557]/80">
                  Find a doctor or clinic that suits your need.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 rounded-full bg-[#A8DADC]/30 flex items-center justify-center text-xs font-semibold text-[#1D3557]">
                  3
                </div>
                <p className="text-[11px] text-[#1D3557]/80">
                  Book your appointment and make payment (if required).
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 rounded-full bg-[#A8DADC]/30 flex items-center justify-center text-xs font-semibold text-[#1D3557]">
                  4
                </div>
                <p className="text-[11px] text-[#1D3557]/80">
                  Consult your doctor and follow their medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Conditions Cards (scroll-friendly, clickable for popup) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiUser className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  Using our platform means you agree to follow these rules and
                  respect other users and doctors.
                </p>
                <button
                  onClick={() => openClause("acceptance")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiFileText className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    2. Our Services
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  We connect you with healthcare professionals but do not
                  replace them or provide medical care ourselves.
                </p>
                <button
                  onClick={() => openClause("services")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    3. User Accounts
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  You&apos;re responsible for keeping your account details
                  correct and your login secure.
                </p>
                <button
                  onClick={() => openClause("account")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiCreditCard className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    4. Payments & Cancellations
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  All payments are processed securely, and refunds depend on
                  doctor and clinic policies.
                </p>
                <button
                  onClick={() => openClause("payments")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiAlertTriangle className="text-[#E76F51]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    5. Prohibited Activities
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  Any misuse, abuse, fraud or illegal activity on our platform
                  can lead to suspension or permanent ban.
                </p>
                <button
                  onClick={() => openClause("prohibited")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>

              <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <FiCheckCircle className="text-[#457B9D]" />
                  <h2 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                    6. Limitation of Liability
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[#1D3557]/75 mb-3">
                  We provide the platform “as is” and are not responsible for
                  medical outcomes or emergency situations.
                </p>
                <button
                  onClick={() => openClause("liability")}
                  className="text-[11px] font-medium text-[#457B9D] underline underline-offset-4 hover:text-[#1D3557] transition"
                >
                  Read condition
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="grid md:grid-cols-[3fr,2fr] gap-6 items-start">
            <p className="text-[11px] sm:text-xs text-[#1D3557]/70 bg-white/70 border border-dashed border-[#CDE4D4] rounded-2xl p-4">
              These Terms &amp; Conditions are a general template designed
              for a healthcare platform. Please review and customize them with
              a legal expert to match your exact business model and local laws.
            </p>
            <div className="bg-white/80 border border-[#CDE4D4] rounded-2xl p-4 shadow-sm text-xs sm:text-sm text-[#1D3557]/80">
              <p className="font-semibold text-[#457B9D] mb-1">
                Need clarification?
              </p>
              <p className="mb-1">Our team can help explain any part in simple words.</p>
              <p className="text-[#457B9D] font-medium">
                Email: support@yourappname.com
              </p>
            </div>
          </div>
        </div>

        {/* Clause popup */}
        {active && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4">
            <div className="bg-[#F1FAEE] max-w-lg w-full rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#A8DADC] p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-sm sm:text-base font-semibold text-[#1D3557]">
                  {active.title}
                </h3>
                <button
                  onClick={closeClause}
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

export default TermsAndConditions;
