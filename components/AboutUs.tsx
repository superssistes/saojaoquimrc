
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Nossa Missão</h2>
          <p className="text-gray-600 mt-4 text-lg">Conheça os pilares que sustentam nosso trabalho.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://i.postimg.cc/43xJ2bHK/logo-sao-joaquim-rm.png" 
              alt="Instituto São Joaquim" 
              className="rounded-lg max-h-96 w-auto object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Acolher, Cuidar e Reintegrar</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              O Instituto São Joaquim nasceu do desejo de fazer a diferença na vida de pessoas que enfrentam a dura realidade das ruas, do alcoolismo e da dependência química. Acreditamos que todos merecem uma segunda chance e o direito a uma vida digna.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nossa principal missão é viabilizar a internação e o tratamento de indivíduos com menor poder aquisitivo, oferecendo não apenas o cuidado com a saúde, mas também o apoio psicológico e social necessário para que possam se reerguer e construir um novo futuro.
            </p>
            <a href="#contato" className="text-amber-700 font-semibold hover:underline">Entre em contato conosco &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
