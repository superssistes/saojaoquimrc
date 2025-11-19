
import React, { useRef, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ImpactNumbers from './components/ImpactNumbers';
import Programs from './components/Programs';
import DependenciesInfo from './components/DependenciesInfo';
import StreetSituationInfo from './components/StreetSituationInfo';
import Articles from './components/Articles'; 
import Testimonials from './components/Testimonials';
import HowToHelp from './components/HowToHelp';
import Gemini from './components/Gemini';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import NewsAndEvents from './components/NewsAndEvents';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Componente wrapper para a animação de fade-in
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // Threshold 0 ensures the section becomes visible as soon as any part of it enters the viewport
        threshold: 0,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it's fully in view
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <>
      {/* Main Content Container */}
      <div className="bg-white/90 backdrop-blur-xl text-stone-900 font-sans my-8 lg:my-12 mx-4 lg:mx-auto max-w-screen-2xl rounded-3xl shadow-2xl overflow-hidden relative ring-1 ring-white/50">
        <Header />
        <main>
          <Hero />
          
          {/* Grupo 1: Identidade e Credibilidade */}
          <AnimatedSection>
            <AboutUs />
          </AnimatedSection>
          <AnimatedSection>
            <ImpactNumbers />
          </AnimatedSection>
          <AnimatedSection>
            <Partners />
          </AnimatedSection>

          {/* Grupo 2: Chamada para Ação (Destaque) */}
          <AnimatedSection>
            <HowToHelp />
          </AnimatedSection>

          {/* Grupo 3: O Que Fazemos (Metodologia) */}
          <AnimatedSection>
            <Programs />
          </AnimatedSection>
          <AnimatedSection>
            <StreetSituationInfo />
          </AnimatedSection>
          <AnimatedSection>
            <DependenciesInfo />
          </AnimatedSection>
          <AnimatedSection>
            <Articles />
          </AnimatedSection>

          {/* Grupo 4: Vidas Transformadas (Prova Social) */}
          <AnimatedSection>
            <SuccessStories />
          </AnimatedSection>
          <AnimatedSection>
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection>
            <NewsAndEvents />
          </AnimatedSection>

          {/* Grupo 5: Atendimento */}
          <AnimatedSection>
            <FAQ />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
      
      {/* Gemini component placed OUTSIDE the main container to ensure position:fixed works relative to the viewport */}
      <Gemini />
    </>
  );
};

export default App;
