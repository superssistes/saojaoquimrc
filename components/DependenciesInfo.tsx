
import React from 'react';
import { BrainIcon, CommunityIcon, SupportIcon } from './icons';

const infoCards = [
  {
    icon: <BrainIcon />,
    title: 'Alcoolismo: Uma Doença Tratável',
    description: 'O alcoolismo é uma doença crônica que afeta milhões, destruindo famílias. Acreditamos na recuperação. Por isso, viabilizamos internações e tratamentos, oferecendo o suporte médico e psicológico necessário para que o indivíduo possa superar o vício e retomar o controle de sua vida.'
  },
  {
    icon: <CommunityIcon />,
    title: 'Dependência Química: Um Novo Caminho',
    description: 'A dependência de outras substâncias é um desafio complexo que exige uma abordagem multidisciplinar. Oferecemos apoio integral, desde a desintoxicação até a reintegração social, auxiliando na reconstrução de laços e na capacitação para o mercado de trabalho.'
  },
  {
    icon: <SupportIcon />,
    title: 'O Processo de Recuperação',
    description: 'A recuperação é uma jornada contínua. Além do tratamento inicial, focamos no apoio pós-tratamento para prevenir recaídas, fortalecendo a autoestima e promovendo a reinserção familiar e social, provando que um novo começo é sempre possível.'
  }
];

const DependenciesInfo: React.FC = () => {
  return (
    <section id="dependencias" className="py-20">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="https://i.postimg.cc/MHNfmJBj/Aqua-Background-Store-Header.png" 
            alt="Ilustração sobre dependências e superação" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Entendendo as Dependências</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">Informação é o primeiro passo para a mudança. Saiba mais sobre as áreas em que atuamos e como nosso apoio faz a diferença.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-amber-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-amber-700 w-20 h-20 mx-auto mb-6 flex items-center justify-center p-2">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DependenciesInfo;