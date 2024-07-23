import {
  AboutMentoonsQuiz,
  HeroSection,
  HowItWorks,
  QuizCategory,
  WhyMentoons,
} from "./components";

const App = () => {
  return (
    <main className='bg-beige'>
      {/* Mentoons Quiz Page 
          Outline of Homepage:
          6. Testimonials
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
    </main>
  );
};

export default App;
