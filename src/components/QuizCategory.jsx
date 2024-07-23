const QuizCategory = () => {
  return (
    <section>
      <h2 className='text-4xl text-dark-gray rubik-bubbles-regular pb-8 text-center pt-8 '>
        Choose Your Quiz Adventure
      </h2>
      <div className='w-full   flex items-center justify-center relative'>
        <div className='w-full  flex items-center justify-center  py-20 '>
          <img
            src='/assets/images/paper-bg-1.svg'
            alt='Custom background imagae'
            className=' w-[40%] object-cover'
          />
          <div className=' w-[200px]  absolute top-0 '>
            <img
              src='/assets/images/ball-pattern.svg
              '
              alt='Ball pattern'
              className='w-full object-cover'
            />
          </div>
          <div className='flex flex-col items-center justify-center absolute gap-4'>
            <span className='text-3xl rubik-bubbles-regular text-orange '>
              Invention and Inventors
            </span>
            <span className='w-96 text-center text-orange'>
              Explore the world of innovation and the brilliant minds behind it.
            </span>
          </div>
        </div>
      </div>

      <div className='w-full   flex items-center justify-center relative'>
        <div className='w-full  flex items-center justify-center  py-20 '>
          <img
            src='/assets/images/hexagon-pattern.svg'
            alt='Custom background imagae'
            className=' w-[50%] object-cover'
          />
          <div className=' w-[200px]  absolute top-10 '>
            <img
              src='/assets/images/detective-hat.svg
              '
              alt='Detective hat'
              className='w-full object-cover'
            />
          </div>
          <div className='flex flex-col items-center justify-center absolute gap-4'>
            <span className='text-3xl rubik-bubbles-regular text-orange '>
              Murder Mysteries
            </span>
            <span className='w-96 text-center text-orange'>
              Put on your detective hat and solve thrilling cases.
            </span>
          </div>
        </div>
      </div>
      <div className='w-full '>
        <img
          src='/assets/images/cloud-3.svg'
          alt='Cloud pattern'
          className='w-full object-cover'
        />
      </div>
    </section>
  );
};

export default QuizCategory;
