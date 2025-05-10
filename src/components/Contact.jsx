import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [showFAQ, setShowFAQ] = useState(false)

  const faqData = [
    {
      question: "How do I find a tutor?",
      answer: "Click on 'Find a Tutor' from the menu, fill in your details, and we’ll connect you to the right tutor.",
    },
    {
      question: "Is there a free trial class?",
      answer: "Yes! Every new student is eligible for a free demo session with their tutor.",
    },
    {
      question: "Can I change my tutor later?",
      answer: "Absolutely. If you're not satisfied, we help you find a better match immediately.",
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover all major subjects from KG to 12th, including JEE/NEET and language training.",
    },
    {
      question: "How can I contact support?",
      answer: "You can email us at support@hometutor.com or WhatsApp/call directly from this page.",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-blue-200 to-purple-100 py-16 px-6 mt-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Connect With Us</h1>
        <p className="text-gray-700 text-lg">Whether it's a question or feedback — we’re all ears!</p>
      </div>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
        >
          <i className="fab fa-whatsapp text-xl"></i> WhatsApp
        </a>
        <a
          href="mailto:support@hometutor.com"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          <i className="fas fa-envelope text-xl"></i> Email
        </a>
        <a
          href="tel:+911234567890"
          className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition"
        >
          <i className="fas fa-phone text-xl"></i> Call
        </a>
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          <i className="fas fa-robot text-xl"></i> Queries
        </button>
      </div>

      {/* FAQ / Chatbot Simulation */}
      {showFAQ && (
        <div className="max-w-4xl mx-auto mb-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4 text-center">Common Questions</h2>
          {faqData.map((faq, index) => (
            <details key={index} className="mb-4 border-b pb-2">
              <summary className="cursor-pointer text-lg font-medium text-gray-800 hover:text-purple-700">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Info */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Why HomeTutor?</h2>
          <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
            <li>Certified and experienced tutors</li>
            <li>Custom schedules & individual attention</li>
            <li>Safe and secure learning environment</li>
            <li>Round-the-clock assistance</li>
          </ul>
          <p className="mt-6 text-gray-600 text-md">
            Our team is always ready to guide you. Don’t hesitate to reach out—we value every student and parent!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <select
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              >
                <option value="">Choose an option</option>
                <option value="tutoring">Find a Tutor</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Floating Icon */}
      <button
        onClick={() => setShowFAQ(!showFAQ)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        <i className="fas fa-comment-dots text-2xl"></i>
      </button>
    </div>
  )
}

export default Contact