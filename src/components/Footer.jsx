const Footer = () => {
  return (
    <section className='relative'>
      <img
        src='/assets/images/mentoons-logo.png'
        alt='Mentoons Logo'
        className='w-full object-cover opacity-15  absolute top-[-120px] -z-14 '
      />
      <div className='w-full relative'>
        <img
          src='/assets/images/wave.svg'
          alt=''
          className='w-full object-cover rotate-180 transform scale-x-[-1]'
        />
      </div>
      <div className='bg-orange h-72 relative z-15'>
        <nav
          className='flex
       items-center justify-center gap-12  '
        >
          <ul className='flex items-center gap-12 text-font-14 border-y border-white text-white'>
            <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1  hover:bg-white/10 transition-all duration-300 ease-ou'>
              Home
            </li>
            <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1  hover:bg-white/10 transition-all duration-300 ease-ou'>
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
          <ul className='flex items-center  text-white gap-12 whitespace-nowrap text-font-14 border-y border-white'>
            <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1  hover:bg-white/10 transition-all duration-300 ease-out  '>
              How it works
            </li>
            <li className='hover:text-white cursor-pointer border border-transparent hover:border hover:border-white/10 px-4 py-1  hover:bg-white/10 transition-all duration-300 ease-out'>
              Contact Us
            </li>
          </ul>
        </nav>
        <p className=' text-center text-white text-font-12 pt-12 pr-16'>
          &copy; 2024 All Right Reserverd Mentoons.com
        </p>
      </div>
    </section>
  );
};

export default Footer;
