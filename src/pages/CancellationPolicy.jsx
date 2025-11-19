import React from "react";
import {
  FaUndoAlt,
  FaCalendarTimes,
  FaMoneyBillWave,
  FaClock,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

const CancellationPolicy = () => {
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
                <FaUndoAlt />
              </span>
              <span>Simple & transparent cancellation rules</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-[#1D3557]">
              CANCELLATION <span className="text-[#457B9D] font-bold">POLICY</span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/75">
              We know plans can change. Here’s how cancellations and refunds work
              for your appointments booked through our platform.
            </p>
          </div>

          {/* Quick Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#A8DADC]/40 flex items-center justify-center">
                <FaCalendarTimes className="text-[#1D3557]" />
              </div>
              <p className="text-sm font-semibold text-[#457B9D]">
                Easy Appointment Cancellation
              </p>
              <p className="text-xs text-[#1D3557]/75">
                Cancel appointments directly from your account in just a few taps.
              </p>
            </div>

            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#A8DADC]/40 flex items-center justify-center">
                <FaMoneyBillWave className="text-[#1D3557]" />
              </div>
              <p className="text-sm font-semibold text-[#457B9D]">
                Fair Refund Rules
              </p>
              <p className="text-xs text-[#1D3557]/75">
                Refunds depend on how early you cancel and the doctor/clinic policy.
              </p>
            </div>

            <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#A8DADC]/40 flex items-center justify-center">
                <FaClock className="text-[#1D3557]" />
              </div>
              <p className="text-sm font-semibold text-[#457B9D]">
                Time-Based Windows
              </p>
              <p className="text-xs text-[#1D3557]/75">
                Different cancellation windows may apply for different doctors and services.
              </p>
            </div>
          </div>

          {/* Before You Cancel */}
          <div className="grid md:grid-cols-[3fr,2fr] gap-8">
            <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-6 shadow-md space-y-3">
              <p className="text-sm font-semibold text-[#1D3557] flex items-center gap-2">
                <FaInfoCircle className="text-[#457B9D]" />
                Before you cancel an appointment
              </p>
              <p className="text-xs sm:text-sm text-[#1D3557]/75">
                Each doctor or clinic may follow slightly different rules. The most
                accurate cancellation and refund details will always be shown on the
                appointment screen before you confirm your booking.
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#1D3557]/75 space-y-1 pt-1">
                <li>Check the exact cut-off time for free or partial cancellation.</li>
                <li>Read the refund eligibility note on the confirmation page.</li>
                <li>Reschedule instead of cancel, wherever possible.</li>
                <li>For emergencies, you can also reach out to the clinic directly.</li>
              </ul>
            </div>

            <div className="bg-white/80 border border-dashed border-[#CDE4D4] rounded-2xl p-5 shadow-sm text-xs sm:text-sm text-[#1D3557]/75">
              <p className="font-semibold text-[#457B9D] mb-2">
                Important:
              </p>
              <p>
                This Cancellation Policy is a general template. Specific terms may
                vary based on doctor/clinic rules, location and service type. Always
                review the exact cancellation conditions shown at the time of booking.
              </p>
            </div>
          </div>

          {/* Time-based refund rules */}
          <div className="space-y-6">
            <p className="text-lg font-semibold text-[#1D3557] text-center">
              General Cancellation & Refund Timeline
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col">
                <p className="text-[11px] font-semibold text-[#457B9D] uppercase mb-1">
                  24+ hours before
                </p>
                <p className="text-xs sm:text-sm text-[#1D3557]/80 flex-1">
                  In most cases, cancelling at least 24 hours before the appointment
                  start time makes you eligible for a full or high-percentage refund,
                  depending on the clinic’s policy.
                </p>
              </div>

              <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col">
                <p className="text-[11px] font-semibold text-[#457B9D] uppercase mb-1">
                  4–24 hours before
                </p>
                <p className="text-xs sm:text-sm text-[#1D3557]/80 flex-1">
                  Cancelling close to the appointment time may result in a partial
                  refund or only rescheduling option, as doctors reserve this time
                  specifically for you.
                </p>
              </div>

              <div className="bg-white/90 border border-[#CDE4D4] rounded-2xl p-5 shadow-sm flex flex-col">
                <p className="text-[11px] font-semibold text-[#457B9D] uppercase mb-1">
                  Less than 4 hours / No-show
                </p>
                <p className="text-xs sm:text-sm text-[#1D3557]/80 flex-1">
                  Late cancellations or not showing up are usually not eligible for
                  a refund. However, this can still vary by doctor or clinic.
                </p>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-[#1D3557]/60 text-center">
              * These are general guidelines. Always refer to the exact policy shown during booking.
            </p>
          </div>

          {/* How to cancel & refund process */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-6 shadow-md space-y-3">
              <p className="text-sm font-semibold text-[#1D3557]">
                How to cancel an appointment
              </p>
              <ol className="list-decimal list-inside text-xs sm:text-sm text-[#1D3557]/75 space-y-1">
                <li>Open the app/website and go to <span className="font-medium">My Appointments</span>.</li>
                <li>Select the appointment you want to cancel.</li>
                <li>Tap on <span className="font-medium">Cancel Appointment</span>.</li>
                <li>Review the shown cancellation terms and confirm.</li>
                <li>You will receive a confirmation notification/email after successful cancellation.</li>
              </ol>
            </div>

            <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-6 shadow-md space-y-3">
              <p className="text-sm font-semibold text-[#1D3557]">
                Refunds (if applicable)
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#1D3557]/75 space-y-1">
                <li>Refunds are processed back to the original payment method.</li>
                <li>Processing time may range from 3–7 business days, depending on your bank or payment provider.</li>
                <li>Some services may offer wallet credits instead of direct refunds.</li>
                <li>Convenience or platform fees (if any) may be non-refundable.</li>
              </ul>
            </div>
          </div>

          {/* Doctor/Clinic initiated cancellation */}
          <div className="bg-white/85 border border-[#CDE4D4] rounded-2xl p-6 shadow-md space-y-3">
            <p className="text-sm font-semibold text-[#1D3557]">
              If the doctor or clinic cancels your appointment
            </p>
            <p className="text-xs sm:text-sm text-[#1D3557]/75">
              Sometimes, doctors may have to cancel or reschedule due to emergencies,
              unavailability or operational reasons. In such cases:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-[#1D3557]/75 space-y-1">
              <li>You will be notified via app, SMS or email as soon as possible.</li>
              <li>You may be offered an alternative time slot with the same doctor.</li>
              <li>If you don’t wish to reschedule, you may be eligible for a full refund as per the clinic’s policy.</li>
            </ul>
          </div>

          {/* Contact + note */}
          <div className="grid md:grid-cols-[2fr,3fr] gap-6 items-start">
            <div className="bg-white/85 border border-[#A8DADC] rounded-2xl p-5 shadow-sm text-xs sm:text-sm text-[#1D3557]/80">
              <p className="font-semibold text-[#457B9D] mb-2 flex items-center gap-2">
                <FaPhoneAlt /> Need help with a cancellation?
              </p>
              <p className="mb-1">
                If something doesn&apos;t look right or you&apos;re not sure about the
                refund status, our support team is happy to assist.
              </p>
              <p className="text-[#457B9D] font-medium">
                Email: support@yourappname.com
              </p>
            </div>
            <p className="text-[11px] sm:text-xs text-[#1D3557]/65 bg-white/70 border border-dashed border-[#CDE4D4] rounded-2xl p-4">
              Disclaimer: This Cancellation Policy is a generic template meant for
              healthcare/appointment platforms. Please review and customize it with a
              legal or compliance professional to match your exact business rules,
              services and local regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;

/* Make sure this animation exists once in your global CSS:
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
*/
