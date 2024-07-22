const AboutMentoonsQuiz = () => {
  return (
    <>
      {" "}
      <section className='bg-off-yellow flex flex-col items-center relative '>
        <h2 className='text-4xl text-orange rubik-bubbles-regular pb-4 text-center pt-0'>
          Spark Curiosity, Ignite Knowledge
        </h2>
        <p className='max-w-[50%] font-regular text-font-16 text-center text-gray-700/80 pt-4'>
          Mentoons Quiz offers engaging quizzes for children and teenagers,
          making learning an exciting adventure. Our quizzes cover a wide range
          of topics, from groundbreaking inventions to intriguing murder
          mysteries.
        </p>
        <div className=' w-full flex justify-center relative'>
          <img
            src='/assets/images/Human-1.svg'
            alt='3D Avatar'
            className='h-48 pt-4'
          />
          <div className='flex gap-96 w-full justify-around  absolute top-[-120px]'>
            <img src='/assets/images/stars-1.svg' alt='Star pattern ' />
            <img src='/assets/images/stars-2.svg' alt='Star Patter' />
          </div>
        </div>
      </section>
      <div className='w-full'>
        <img
          src='/assets/images/cloud-pattern-1.svg'
          alt=''
          className='w-full object-cover'
        />
      </div>
    </>
  );
};

export default AboutMentoonsQuiz;
