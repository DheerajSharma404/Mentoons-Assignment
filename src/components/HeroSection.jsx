const HeroSection = () => {
  return (
    <header className='bg-orange  text-white flex flex-col items-center relative '>
      <nav
        className='flex
       items-center justify-center gap-12 '
      >
        <ul className='flex items-center gap-12 text-font-14'>
          <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-300 ease-ou'>
            Home
          </li>
          <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-300 ease-ou'>
            Quiz
          </li>
        </ul>
        <div className='w-96 '>
          <img
            src='/assets/images/mentoons-logo.png'
            alt='Logo'
            className='w-full object-cover'
          />
        </div>
        <ul className='flex items-center gap-12 whitespace-nowrap text-font-14'>
          <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-300 ease-out '>
            How it works
          </li>
          <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1 rounded-full hover:bg-white/10 transition-all duration-300 ease-ou'>
            Contact Us
          </li>
        </ul>
      </nav>

      <h1 className='rubik-bubbles-regular text-5xl pb-4 text-center pt-8'>
        {" "}
        Welcome to Mentoons Quiz
      </h1>
      <p className='max-w-[34%] font-regular text-font-16 text-white/90  text-center'>
        Discover, learn, and have fun with our interactive quizzes on
        inventions, inventors, and murder mysteries.
      </p>

      <div className='w-full   relative pb-24'>
        <img
          src='/assets/images/hero-image-2.png'
          alt='Hero Image'
          className='max-w-full w-full object-cover '
        />
        <div className='absolute top-8 left-1/2  transform -translate-x-1/2 justify-center bg-white rounded-full px-8 py-2 text-black text-font-16 font-bold z-10 hover:bg-white/80 hover:text-orange transition-all duration-300 whitespace-nowrap'>
          <button>Start Quizzing Now</button>
        </div>
      </div>
      <div className='w-full absolute bottom-0'>
        <img
          src='/assets/images/cloud-1.svg'
          alt='cloud patter'
          className='w-full object-cover'
        />
      </div>
    </header>
  );
};

export default HeroSection;
