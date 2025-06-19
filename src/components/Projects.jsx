import { useState } from "react"
import { PROJECTS } from "../constants"

const ITEMS_PER_PAGE = 4

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProjects = PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 flex flex-col justify-between'>
      <h2 className="my-20 text-center text-purple-800 text-4xl">
        Tech <span className="text-neutral-300">Projects</span>
      </h2>

      <div>
        {currentProjects.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img className="size-28 mb-4" src={projects.image} alt={projects.title} />
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <a
                href={projects.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl mb-2 hover:text-purple-500 hover:cursor-pointer active:text-purple-900 font-semibold"
              >
                {projects.title}
              </a>
              <p className="mb-4 text-neutral-500">{projects.description}</p>
              <div className="flex flex-wrap gap-2">
                {projects.technologies.map((tech, index2) => (
                  <span
                    key={index2}
                    className="rounded-md text-purple-800 bg-neutral-900 px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 my-8">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-800 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-purple-800 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Projects
