const HowItWorks = () => {
  return (
    <section className='bg-light-purpel pb-8'>
      <h2 className='text-4xl text-purple-500 rubik-bubbles-regular pb-8 text-center pt-8 '>
        How It Works
      </h2>

      <div className='w-full flex flex-col items-center justify-center gap-4'>
        <div className='flex items-center justify-center gap-8 w-full'>
          <div className=''>
            <img
              src='/assets/images/select-quiz.svg
            '
              alt='Select quiz illustrantion'
              className='w-full object-cover'
            />
          </div>
          <div className=' h-full flex flex-col text-5xl font-bold rubik-bubbles-regular text-purple-400'>
            <p className=' font-bold rubik-bubbles-regular text-purple-400'>
              01.
            </p>
            <p className='text-3xl'> Select a quiz category</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-8  w-full'>
          <div className=' h-full flex flex-col text-5xl font-bold rubik-bubbles-regular text-purple-400'>
            <p className=' font-bold rubik-bubbles-regular text-purple-400'>
              02.
            </p>
            <p className='text-3xl'>Answer thought-provoking questions</p>
          </div>
          <div className=''>
            <img
              src='/assets/images/answer.svg
            '
              alt='Select quiz illustrantion'
              className='w-full object-cover'
            />
          </div>
        </div>
        <div className='flex items-center justify-center gap-8 w-full'>
          <div className=''>
            <img
              src='/assets/images/learn.svg
            '
              alt='Select quiz illustrantion'
              className='w-full object-cover'
            />
          </div>
          <div className=' h-full flex flex-col text-5xl font-bold rubik-bubbles-regular text-purple-400'>
            <p className=' font-bold rubik-bubbles-regular text-purple-400'>
              03.
            </p>
            <p className='text-3xl'>Learn fascinating facts along the way</p>
          </div>
        </div>

        <div className='flex items-center justify-center gap-8  w-full'>
          <div className=' h-full flex flex-col text-5xl font-bold rubik-bubbles-regular text-purple-400'>
            <p className=' font-bold rubik-bubbles-regular text-purple-400'>
              02.
            </p>
            <p className='text-3xl'>Track your progress and improve</p>
          </div>
          <div className=''>
            <img
              src='/assets/images/track.svg
            '
              alt='Select quiz illustrantion'
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
