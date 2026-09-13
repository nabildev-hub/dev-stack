import bannerImage from '../assets/banner-stack.png'
const Banner = () => {
  return (
    // Section Container
        <section className= 'max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Text Content */}
      <div className="flex-1 max-w-xl text-left">
      <h1 className="text-4xl md:text-[52px] font-black text-[#0f172a] leading-[1.15] tracking-tight mb-5">
        Build Your Ideal <br /> 
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
        </span>
    </h1>
    {/* Description */}
      <p className="text-[#475569] text-base md:text-[17px] leading-relaxed mb-8 max-w-lg">
        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
      </p>
        {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className='bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-semibold text-sm px-6 py-3 rounded-md shadow-sm hover:opacity-95 transition-opacity cursor-pointer'>
            Explore Technologies

        </button>
        <button className='border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-md hover:bg-slate-50 transition-colors shadow-sm bg-white cursor-pointer'>
            Learn More
            </button>
    </div>
      </div>
        {/* Image Container */}
      <div className="flex-1 flex justify-center md:justify-end w-full">

      <img src={bannerImage} className="w-full max-w-[480px] h-auto object-contain " alt="Banner" />
    </div>
        </section>
  )
}

export default Banner;
