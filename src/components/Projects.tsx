import React from 'react'
import Slider from 'react-slick'
import { ProjectData } from './ProjectData.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className="p-8 text-white max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-orange-400 text-center">
        Projects
      </h2>
      <Slider {...settings}>
        {ProjectData.map((project) => (
          <div key={project.title} className="px-4">
            <div className="bg-white/10 rounded-xl p-6 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-64 h-64 object-cover rounded-md mb-4 mx-auto"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-orange-400 text-center">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 text-center">
                {project.description}
              </p>
              <div className="text-xs mt-2 text-center">
                <strong>Tech:</strong> {project.stack.join(', ')}
              </div>
              <div className="flex justify-center gap-4 mt-3 text-xs text-orange-300">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-100"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-orange-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Projects
