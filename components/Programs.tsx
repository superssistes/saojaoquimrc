
import React from 'react';
import { HeartIcon, HomeIcon, UserGroupIcon, SparklesIcon, BrainIcon, PuzzleIcon } from './icons';

const programs = [
  {
    icon: <HomeIcon />,
    title: 'Apoio à População de Rua',
    description: 'Oferecemos amparo, alimentação e o acesso ao tratamento em clínicas e hospitais parceiros, buscando resgatar a dignidade e a cidadania.'
  },
  {
    icon: <HeartIcon />,
    title: 'Tratamento de Alcoolismo',
    description: 'Viabilizamos internações em clínicas especializadas, com acompanhamento médico e terapêutico para a superação do vício.'
  },
  {
    icon: <UserGroupIcon />,
    title: 'Dependência Química',
    description: 'Providenciamos suporte completo para o tratamento da dependência química, desde a desintoxicação até o apoio psicológico contínuo.'
  },
  {
    icon: <BrainIcon />,
    title: 'Esquizofrenia e Doenças Mentais',
    description: 'Garantimos acesso a tratamento psiquiátrico, medicação e terapias especializadas para pessoas em vulnerabilidade que sofrem de transtornos mentais.'
  },
  {
    icon: <PuzzleIcon />,
    title: 'Autismo e Terapia ABA',
    description: 'Oferecemos suporte para crianças com TEA através da Ciência ABA, promovendo o desenvolvimento de habilidades, autonomia e inclusão social.'
  },
  {
    icon: <SparklesIcon />,
    title: 'Reintegração Social',
    description: 'Auxiliamos na reconstrução de laços familiares e na capacitação profissional, visando a reinserção plena na sociedade.'
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programas" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Nossos Programas de Apoio</h2>
          <p className="text-gray-600 mt-4 text-lg">Atuamos em frentes essenciais para a recuperação e o bem-estar.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px]">
              <div className="text-amber-700 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
