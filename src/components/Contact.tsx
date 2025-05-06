import React from 'react'

const Contact = () => (
  <div className="p-8 max-w-xl mx-auto text-white text-center">
    <h2 className="text-2xl font-bold text-orange-400 mb-4">Contact</h2>
    <p className="text-gray-300 text-sm sm:text-base mb-6">
      Let’s connect! Whether you're interested in collaborating, have a
      question, or just want to say hi — feel free to reach out.
    </p>
    <a
      href="mailto:rabiagelgi@gmail.com"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md"
    >
      Say Hello → rabiagelgi@gmail.com
    </a>
  </div>
)

export default Contact
