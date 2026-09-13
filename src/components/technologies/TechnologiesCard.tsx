import React from 'react'

const TechnologiesCard = ({ technologies }) => {
    console.log(technologies, "tech from card")
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {technologies.map((tech) => {

        return (
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div>
        <div className="flex items-start justify-between mb-5">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.title}
              className="w-8 h-8 object-contain"
            />
          </div>

          <span
            className={` font-medium text-xs rounded-full px-3 py-1 ${tech.badgeColor}`}
          >
            {tech.badge}
          </span>
        </div>
            <h2 className="text-black text-sm font-bold">{tech.name}</h2>
    
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {tech.title}
        </h3>

    
        <p className="text-slate-500 text-sm leading-6 mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>


      <div>
    
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
              {tech.category}
            </span>
            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
              {tech.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400 text-sm">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        
        <button
          type="button"
          className="w-full py-3 text-white text-sm bg-slate-950 hover:bg-slate-800 font-semibold rounded-xl transition-all"
        >
          Add to Stack
        </button>
      </div>
          </div>
        )
    
    })}
    </div>
  )
}

export default TechnologiesCard
