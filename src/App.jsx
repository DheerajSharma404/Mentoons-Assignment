import {
  AboutMentoonsQuiz,
  CTA,
  Footer,
  HeroSection,
  HowItWorks,
  QuizCategory,
  Testimonial,
  WhyMentoons,
} from "./components";

const App = () => {
  return (
    <main className='bg-beige'>
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
      {/*  Footer  */}
      <Footer />
    </main>
  );
};

export default App;
