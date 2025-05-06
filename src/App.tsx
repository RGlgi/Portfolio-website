// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Layout from './components/Layout.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
