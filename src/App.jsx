import {
  AboutMentoonsQuiz,
  CTA,
  HeroSection,
  HowItWorks,
  QuizCategory,
  Testimonial,
  WhyMentoons,
} from "./components";

const App = () => {
  return (
    <main className='bg-beige'>
      {/* Mentoons Quiz Page 
          Outline of Homepage:
          7. Call to Action
          8. Footer 
      */}
      {/* Hero Section */}
      <HeroSection />
      {/* About Mentoons Quiz */}
      <AboutMentoonsQuiz />
      {/*Quiz Categories  */}
      <QuizCategory />
      {/* How It Works */}
      <HowItWorks />
      {/* Benefits */}
      <WhyMentoons />
      {/* Testimonial  */}
      <Testimonial />
      {/*  Call to Action */}
      <CTA />
    </main>
  );
};

export default App;
