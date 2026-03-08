import { useState } from "react"
import { EXPERIENCES } from "../constants"

const ITEMS_PER_PAGE = 5

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(EXPERIENCES.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentExperiences = EXPERIENCES.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 flex flex-col'>
      <h2 className="my-20 text-center text-4xl">Organization & Volunteer Experiences</h2>
      <div>
        {currentExperiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4 max-w-xl">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="text-neutral-500">{experience.description}</p>
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

      <div className="flex bg-gradient-to-r from-transparent via-purple-900 to-transparent h-1 w-full" />

      <div className='py-4 lg:mb-35'>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <img className="size-20 lg:size-40" src="/kmb.png" alt="KMB ITB" />
          </div>
          <div className="p-4">
            <img className="size-20 lg:size-40" src="/itbjazz.png" alt="ITBJazz" />
          </div>
          <div className="p-4">
            <img className="size-20 lg:size-40" src="/hmif.jpeg" alt="HMIF ITB" />
          </div>
          <div className="p-4">
            <img className="size-20 lg:size-40" src="/itb.png" alt="ITB" />
          </div>
          <div className="p-4">
            <img className="size-20 lg:size-40 rounded-lg" src="/km-itb.jpg" alt="KM-ITB" />
          </div>
        </div>
      </div>

      <div className="flex bg-gradient-to-r from-transparent via-purple-900 to-transparent h-1 w-full" />
    </div>
  )
}

export default Experience
