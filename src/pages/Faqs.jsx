import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I update my profile?",
      a: "Go to your Profile section → click Edit Profile → update your information and save changes. Your updated profile will reflect immediately.",
    },
    {
      q: "Can I talk to a doctor instantly?",
      a: "Instant consultation depends on doctor availability. If a doctor is marked 'Online Now', you can connect instantly using the Quick Consult feature.",
    },
    {
      q: "How do refunds work?",
      a: "If your appointment is canceled or the doctor is unavailable, refunds are processed automatically within 3–7 business days based on your payment method.",
    },
    {
      q: "How do I reset my password?",
      a: "Click on Forgot Password on the login page → enter your email → follow the instructions sent to your inbox to create a new password.",
    },
    {
      q: "Is my health data secure?",
      a: "Yes. We use advanced encryption, secure servers, access control, and privacy compliance practices to ensure your health data remains fully protected.",
    },
    {
      q: "Do you support emergency services?",
      a: "No. Our platform is not designed for emergency care. In case of a medical emergency, please contact your nearest hospital or emergency helpline immediately.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="relative bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]/30 rounded-2xl px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 my-16 shadow-xl overflow-hidden">

        {/* Background Blur Decor */}
        <div className="absolute -top-28 -left-20 w-96 h-96 bg-[#A8DADC] blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-[#F1FAEE] blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="relative z-10 space-y-10 md:space-y-14">

          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC] text-[11px] text-[#1D3557]/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FiHelpCircle />
              </span>
              <span>Quick Answers for You</span>
            </div>
            <h1 className="text-3xl font-semibold text-[#1D3557]">
              FREQUENTLY ASKED <span className="text-[#457B9D]">QUESTIONS</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#1D3557]/70">
              Find quick solutions to the most common questions asked by users.
            </p>
          </div>

          {/* FAQ Accordion Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white/90 border border-[#A8DADC] rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-sm sm:text-base text-[#1D3557] font-medium">
                    {item.q}
                  </p>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-[#457B9D] text-lg" />
                  ) : (
                    <FiChevronDown className="text-[#457B9D] text-lg" />
                  )}
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-[#1D3557]/70 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="text-center pt-6">
            <p className="text-sm text-[#1D3557]/70 mb-2">
              Still can't find your answer?
            </p>

            <button className="bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white px-8 py-3 rounded-full text-sm shadow-md hover:shadow-xl transition-all hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

/* Paste this once in global CSS:
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
*/
