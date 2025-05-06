import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import MyPhoto from './assets/rabia.jpg'
import backgroundImage from './assets/m-background.png'

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div
      className="min-h-screen text-white relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Top Image & Top Right Button */}
      <div className="absolute top-4 left-4 w-24 h-24 rounded-full border border-orange-400">
        <img
          src={MyPhoto}
          alt="Rabia"
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      <div className="absolute top-4 right-4 flex space-x-2 text-xs">
        <span>San Jose 🇺🇸</span>
        <button className="border border-white px-3 py-1 rounded-full text-green-400 hover:bg-white hover:text-black">
          OPEN TO WORK
        </button>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 flex space-x-2 border border-white px-4 py-2 rounded-full text-xs hover:scale-105">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
            className="hover:underline hover:text-orange-400"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Page Content */}
      <div className="pt-20 pb-32 px-4 text-center w-full">
        {isHome ? (
          <div>
            <h1 className="text-4xl animate-fade-in-up animate-delay-100 sm:text-5xl md:text-6xl font-bold">
              I'm <span className="text-orange-400">Rabia Gelgi</span>
              <br />
              Front-End Developer & Creative Problem Solver
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl mx-auto  ">
              Passionate about crafting engaging, accessible web experiences
              that empower users and bring ideas to life.
            </p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default Layout
