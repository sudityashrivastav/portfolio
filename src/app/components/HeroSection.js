import Model from "./ModelWrapper"

const HeroSection = ({ profileInfo }) => {
  const { heading, name, tag, discription, button, resume } = profileInfo
  return (
    <div className={`rotate-z-90 w-full h-[60vh] flex justify-around items-center md:flex-row bg-transparent ${tag ? "flex-col-reverse" : "flex-col"}`}>
      {!tag && <Model data={{ scale: 0.95, path: "./green_tara_mantra/scene.gltf", speed: 4 }} />}

      <div className='flex flex-col gap-4 items-start justify-start w-full  p-5 min-h-[200px]'>
        <button className='border  p-2 px-5 rounded-md border-secondary bg-green-100 text-green-600 font-semibold text-[10px]'>{heading}</button>
        <h1 className='text-4xl sm:text-5xl font-extrabold'>{name}</h1>
        {tag && <p className='font-semibold  mt-[-10px]'>{tag}</p>}
        <p>{discription}</p>
        <div className='flex gap-4 mt-3'>
          <button className='border p-2 px-5 rounded-sm font-medium text-secondary bg-green-400 hover:border-black hover:text-black hover:bg-secondary'>{button}</button>
          {resume && <button className='bg-secondary border border-black p-2 px-5 rounded-sm text-black font-medium hover:bg-green-400 hover:border-green-400 hover:text-secondary transition-colors'>{resume}</button>}
        </div>
      </div>

      {tag && <div className='w-64 h-64 md:w-full md:h-full'>
        <Model data={{ scale: 2, path: "./moon_walk/scene.gltf", speed: 1.2 }} />
      </div>
      }

    </div>
  )
}

export default HeroSection