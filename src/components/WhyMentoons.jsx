const WhyMentoons = () => {
  return (
    <section className='bg-light-purpel  relative'>
      <div className='w-full rounded-t-full pt-24 bg-beige h-[800px] flex flex-col items-center justify-start relative'>
        <h2 className='text-4xl text-dark-gray rubik-bubbles-regular pb-8 text-center pt-2 '>
          Why Choose Mentoons Quiz?
        </h2>

        <div className='absolute top-80  w-full flex flex-col items-center '>
          <div className='w-[640px] relative '>
            <img
              src='/assets/images/mentoons-logo.png'
              alt='Logo'
              className='w-full object-cover'
            />
            <p className='absolute text-7xl text-rose-600 rubik-bubbles-regular  w-full text-center'>
              Quiz
            </p>
            <div className=' absolute  p-4 top-[-140px] left-[-340px] px-8   rounded-3xl bg-amber-200'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-amber-600 pl-8 pr-8 '>
                Educational and entertaining content
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className=' absolute  p-4 top-[-80px] right-[-340px] px-8   rounded-3xl bg-rose-200'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-rose-400 pl-8 pr-8 '>
                Safe and age-appropriate quizzes
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className=' absolute  p-4 bottom-[-100px] left-[-280px] px-8   w-[320px] rounded-3xl bg-purple-200'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22 font-bold text-purple-600 pl-8 pr-8 '>
                Develops critical thinking skills
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
            <div className=' absolute  p-4 bottom-[-160px] right-[-300px] px-6 w-[320px]  rounded-3xl bg-lime-200'>
              <div className=' w-full flex items-start justify-start'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6'
                />
              </div>
              <p className='text-font-22  text-center font-bold text-lime-600 '>
                Encourages curiosity and learning
              </p>
              <div className=' flex items-end justify-end'>
                <img
                  src='/assets/images/quotation-mark.svg'
                  alt='quotation mark icon'
                  className='w-6 rotate-360 transform scale-x-[-1]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMentoons;
