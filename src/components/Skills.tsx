import React from 'react'
import iconReact from './assets/React.png'
import iconJs from './assets/JS.png'
import iconHtml from './assets/html.png'
import iconTypeS from './assets/typescript-icon.svg'
import iconCss from './assets/CSS.png'
import iconTailwind from './assets/tailwing.jpeg'

const skills = [
  { src: iconReact, alt: 'React' },
  { src: iconJs, alt: 'JavaScript' },
  { src: iconHtml, alt: 'HTML' },
  { src: iconTypeS, alt: 'TypeScript' },
  { src: iconCss, alt: 'CSS' },
  { src: iconTailwind, alt: 'Tailwind' },
]

const Skills = () => (
  <div className="p-8 text-white text-center">
    <h2 className="text-2xl text-orange-400 font-bold mb-6">Skills</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {skills.map((icon) => (
        <div
          key={icon.alt}
          className="bg-white/10 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            title={icon.alt}
            className="w-12 h-12 object-contain mb-2"
          />
          <span className="text-sm text-gray-200">{icon.alt}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Skills
