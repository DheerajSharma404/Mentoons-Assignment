import {
  AboutMentoonsQuiz,
  HeroSection,
  HowItWorks,
  QuizCategory,
} from "./components";

const App = () => {
  return (
    <main className='bg-beige'>
      {/* Mentoons Quiz Page 
          Outline of Homepage:
          4. How It Works
          5. Benefits
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
    </main>
  );
};

export default App;
