
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

// Dados alterados para refletir formas de ajudar (Doações Financeiras Exclusivamente)
const helpOptions = [
  {
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Custeio de Internações',
    summary: 'Muitas famílias não têm condições de pagar uma clínica de reabilitação. Sua contribuição financeira paga diretamente o tratamento, medicamentos e internação de quem precisa se libertar da dependência.',
  },
  {
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Doações em Dinheiro',
    summary: 'Não aceitamos doações de alimentos, roupas ou cestas básicas. Arrecadamos recursos exclusivamente financeiros para gerir a compra de suprimentos e manter a operação de acolhimento com eficiência.',
  },
  {
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Investimento Social Privado',
    summary: 'Empresas podem realizar aportes financeiros mensais ou pontuais. Seu investimento financeiro viabiliza nossa estrutura de atendimento e amplia o alcance de nossos programas de reintegração.',
  },
   {
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fundo de Tratamento Continuado',
    summary: 'A recuperação exige tempo. Seu apoio financeiro recorrente garante que o tratamento não seja interrompido por falta de recursos, cobrindo terapias e acompanhamento psiquiátrico a longo prazo.',
  }
];

const AUTOPLAY_INTERVAL = 6000; // Aumentado um pouco para dar tempo de ler

const SuccessStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === helpOptions.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? helpOptions.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, goToNext]);

  return (
    <section id="historias-sucesso" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Como Você Pode Ajudar a Mudar Vidas</h2>
          <p className="text-gray-600 mt-4 text-lg">Atuamos exclusivamente com doações financeiras para garantir agilidade e eficiência no atendimento.</p>
        </div>

        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white transform hover:scale-[1.01] transition-all duration-500">
             <div className="w-full bg-amber-100 h-1.5 overflow-hidden">
               {!isPaused && <div key={currentIndex} className="h-full bg-gradient-to-r from-amber-400 to-amber-600 progress-bar-animation" style={{ animationDuration: `${AUTOPLAY_INTERVAL}ms` }}></div>}
            </div>
            <div className="relative h-[550px] md:h-[450px]">
              <div 
                className="flex transition-transform ease-in-out duration-700 h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {helpOptions.map((option, index) => (
                  <div key={index} className="w-full flex-shrink-0 h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                        <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">
                      <h3 className="text-2xl font-bold text-stone-800 mb-4">{option.title}</h3>
                      <p className="text-gray-600 mb-8 flex-grow text-lg leading-relaxed">{option.summary}</p>
                      <a href="#ajudar" className="mt-auto self-start bg-amber-500 text-white font-bold py-4 px-8 rounded-full text-base hover:bg-amber-600 transition duration-300 transform hover:shadow-lg hover:-translate-y-1">
                        Quero Contribuir
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button onClick={goToPrev} className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16 p-3 rounded-full bg-white/80 hover:bg-white transition shadow-lg z-10 backdrop-blur-sm text-amber-800">
            <ChevronLeftIcon />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16 p-3 rounded-full bg-white/80 hover:bg-white transition shadow-lg z-10 backdrop-blur-sm text-amber-800">
            <ChevronRightIcon />
          </button>
          
          <div className="flex justify-center mt-8 space-x-3">
            {helpOptions.map((_, slideIndex) => (
              <button 
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-amber-600 scale-125' : 'bg-amber-200 hover:bg-amber-400'}`}
                aria-label={`Ir para a opção ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;