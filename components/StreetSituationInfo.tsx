
import React from 'react';

const StreetSituationInfo: React.FC = () => {
  return (
    <section id="rua" className="py-20 bg-amber-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://i.postimg.cc/RCPmDnL5/politica-populacao-em-situacao-de-rua-cmbh-1713494032.jpg" 
              alt="Pessoa em situação de rua recebendo apoio" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
             <div className="text-center md:text-left mb-6">
              <h2 className="text-4xl font-bold text-stone-900">A Realidade da Situação de Rua</h2>
              <p className="text-gray-600 mt-4 text-lg">Um olhar além da superfície.</p>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Viver nas ruas significa muito mais do que não ter um teto. É a perda da dignidade, o rompimento de laços afetivos e a exposição constante a riscos. Muitos enfrentam problemas de saúde física e mental, além do preconceito da sociedade.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nosso trabalho é oferecer um amparo completo, que começa com as necessidades básicas como alimentação e acesso a tratamento especializado, mas que tem como objetivo final a reintegração social, o resgate da autoestima e a reconstrução de um projeto de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreetSituationInfo;
