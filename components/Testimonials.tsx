import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonials = [
  {
    quote: "O Instituto São Joaquim me deu a chance de recomeçar. Sem eles, eu não sei onde estaria hoje. Sou eternamente grato por terem acreditado em mim.",
    name: "José C.",
    image: "https://picsum.photos/200/200?random=2"
  },
  {
    quote: "Encontrei aqui não apenas um tratamento, mas uma família que me acolheu e me ensinou a viver de novo. A ajuda que recebi foi um divisor de águas na minha vida.",
    name: "Maria S.",
    image: "https://picsum.photos/200/200?random=3"
  },
  {
    quote: "Ver meu filho se recuperar foi um milagre que só foi possível com o apoio do instituto. Eles nos deram esperança quando mais precisávamos.",
    name: "Ana P. (Mãe)",
    image: "https://picsum.photos/200/200?random=4"
  }
];

const AUTOPLAY_INTERVAL = 5000; // 5 segundos

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        goToNext();
      }, AUTOPLAY_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, goToNext]);


  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Histórias que nos Inspiram</h2>
          <p className="text-gray-600 mt-4 text-lg">Relatos de vidas transformadas pelo poder da solidariedade.</p>
        </div>

        <div 
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-lg shadow-2xl bg-amber-50">
            {/* Progress Bar */}
            <div className="w-full bg-amber-200 h-1 rounded-t-lg overflow-hidden">
               {!isPaused && <div key={currentIndex} className="h-full bg-amber-600 progress-bar-animation"></div>}
            </div>

            <div className="relative h-[450px]">
              <div 
                className="flex transition-transform ease-in-out duration-500 h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
                    <img src={testimonial.image} alt={testimonial.name} className="w-28 h-28 rounded-full mb-6 border-4 border-white shadow-md" />
                    <p className="text-gray-600 italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-gray-800 text-xl">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Vida Transformada</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button onClick={goToPrev} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 p-2 rounded-full bg-white/50 hover:bg-white transition shadow-md">
            <ChevronLeftIcon />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 p-2 rounded-full bg-white/50 hover:bg-white transition shadow-md">
            <ChevronRightIcon />
          </button>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, slideIndex) => (
              <button 
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition ${currentIndex === slideIndex ? 'bg-amber-600' : 'bg-amber-300'}`}
                aria-label={`Ir para o depoimento ${slideIndex + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;