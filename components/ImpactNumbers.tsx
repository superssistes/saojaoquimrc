
import React, { useState, useEffect, useRef } from 'react';
import { UsersIcon, HeartIcon, MedicalIcon, FamilyIcon } from './icons';

const useCountUp = (end: number, duration: number, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [end, duration, isVisible]);

  return count;
};

const ImpactNumbers: React.FC = () => {
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
      { threshold: 0.5 }
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

  const peopleHelped = useCountUp(500, 2000, isVisible);
  const livesSaved = useCountUp(10000, 2000, isVisible);
  const treatmentsFunded = useCountUp(150, 2000, isVisible);
  const familiesSupported = useCountUp(300, 2000, isVisible);
  
  const stats = [
    { icon: <UsersIcon />, value: peopleHelped, label: 'Pessoas Ajudadas', suffix: '+' },
    { icon: <HeartIcon />, value: livesSaved, label: 'Vidas Salvas', suffix: '+' },
    { icon: <MedicalIcon />, value: treatmentsFunded, label: 'Tratamentos Viabilizados', suffix: '+' },
    { icon: <FamilyIcon />, value: familiesSupported, label: 'Famílias Apoiadas', suffix: '+' },
  ];

  return (
    <section id="impacto" className="py-20 bg-amber-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Nosso Impacto em Números</h2>
          <p className="text-gray-600 mt-4 text-lg">Resultados que transformam vidas, graças à sua ajuda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-amber-700 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-5xl font-extrabold text-stone-900 block">
                {stat.value.toLocaleString('pt-BR')}{stat.suffix}
              </span>
              <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
