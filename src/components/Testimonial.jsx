import React from "react";

const Testimonial = () => {
  return (
    <section className=' py-12 pb-14 bg-beige '>
      <h2 className='text-4xl text-dark-gray rubik-bubbles-regular pb-8 text-center '>
        What Our Users Say.
      </h2>

      <div className='flex  gap-8 items-start justify-center '>
        <div className='   p-12  w-[340px]  rounded-3xl bg-lime-200 relative flex flex-col gap-4 shadow-2xl '>
          <div className='absolute left-0  right-0 px-6 flex items-start justify-between  '>
            <img
              src='/assets/images/quotation-mark.svg'
              alt='quotation mark icon'
              className='w-6'
            />
            <img
              src='/assets/images/quotation-mark.svg'
              alt='quotation mark icon'
              className='w-6 rotate-360 transform scale-x-[-1]'
            />
          </div>
          <p className='text-font-22  text-center font-bold text-lime-600  relative'>
            Mentoons Quiz has made learning fun for my kids. They love solving
            mysteries!
          </p>

          <div className='flex flex-col items-center justify-center '>
            <div className='w-12 h-12 rounded-full border border-lime-800 overflow-hidden'>
              <img
                src='/assets/images/sarah.jpg'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>{" "}
            <p className='text-font-16 font-bold text-lime-800'>
              {" "}
              Sarah&apos;s Parent
            </p>
          </div>
        </div>
        <div className='   p-12  w-[340px]  rounded-3xl bg-purple-200 relative flex flex-col gap-4 shadow-2xl'>
          <div className='absolute left-0  right-0 px-6 flex items-start justify-between  '>
            <img
              src='/assets/images/quotation-mark.svg'
              alt='quotation mark icon'
              className='w-6'
            />
            <img
              src='/assets/images/quotation-mark.svg'
              alt='quotation mark icon'
              className='w-6 rotate-360 transform scale-x-[-1]'
            />
          </div>
          <p className='text-font-22  text-center font-bold text-purple-600  relative'>
            I&apos;ve learned so much about inventions. It&apos;s amazing!
          </p>

          <div className='flex flex-col items-center justify-center '>
            <div className='w-12 h-12 rounded-full border border-purple-800 overflow-hidden'>
              <img
                src='/assets/images/tom.jpg'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>{" "}
            <p className='text-font-16 font-bold text-purple-800'>
              {" "}
              Tom, 12 years old
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
