import { AboutMentoonsQuiz, HeroSection, QuizCategory } from "./components";

const App = () => {
  return (
    <main className='bg-beige'>
      {/* Mentoons Quiz Page 
          Outline of Homepage:
          1. Hero Section
          2. About Mentoons Quiz
          3. Quiz Categories
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
    </main>
  );
};

export default App;
