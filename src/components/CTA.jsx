const CTA = () => {
  return (
    <section className='py-12'>
      <h2 className='text-2xl text-amber-800/80 font-[800] pb-4 text-center '>
        Ready to Start Your Quiz Journey?
      </h2>
      <div className=' w-[1040px]  mx-auto p-12 bg-amber-200 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-8'>
        <p className='font-regular  text-amber-800  text-center text-4xl rubik-bubbles-regular'>
          Join Mentoons Quiz today and embark on an exciting learning adventure
        </p>
        <button className='bg-amber-800 text-white px-12 py-2 rounded-full hover:bg-amber-800/80 transition-all duration-200 ease-in-out font-bold text-font-14 '>
          Sign Up
        </button>
      </div>

      <div className='svg-pattern h-20'></div>
    </section>
  );
};

export default CTA;
