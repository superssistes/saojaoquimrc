
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

const faqData = [
  {
    category: 'Para Doadores',
    questions: [
      {
        q: 'Como posso ter certeza de que minha doação será bem utilizada?',
        a: 'Somos uma instituição comprometida com a transparência. Publicamos relatórios anuais de atividades e finanças, e você pode entrar em contato a qualquer momento para saber mais sobre os projetos que sua doação está apoiando.'
      },
      {
        q: 'Minha doação é dedutível do imposto de renda?',
        a: 'Sim, como somos uma organização sem fins lucrativos registrada, sua doação pode ser elegível para dedução fiscal. Recomendamos consultar um contador para obter detalhes específicos sobre sua situação.'
      }
    ]
  },
  {
    category: 'Para Quem Busca Ajuda',
    questions: [
      {
        q: 'Como faço para ser atendido pelo instituto?',
        a: 'Você pode entrar em contato conosco por telefone ou através do formulário em nosso site. Nossa equipe de assistência social fará uma avaliação inicial para entender suas necessidades e direcioná-lo ao programa mais adequado.'
      },
      {
        q: 'O tratamento e o apoio oferecidos são gratuitos?',
        a: 'Sim, nossa missão é apoiar indivíduos com menor poder aquisitivo. Todos os nossos serviços, incluindo a viabilização de tratamentos e internações, são oferecidos gratuitamente aos nossos assistidos.'
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Perguntas Frequentes</h2>
          <p className="text-gray-600 mt-4 text-lg">Tire suas dúvidas sobre nosso trabalho.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqData.map((categoryItem, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-amber-700 mb-6 px-4">{categoryItem.category}</h3>
              <div className="space-y-6">
                {categoryItem.questions.map((item, itemIndex) => {
                  const index = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className={`rounded-3xl transition-all duration-300 ${isOpen ? 'bg-white shadow-xl scale-[1.02]' : 'bg-white shadow-sm hover:shadow-md'}`}>
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                      >
                        <h4 className={`font-semibold text-lg transition-colors ${isOpen ? 'text-amber-800' : 'text-gray-800'}`}>{item.q}</h4>
                        <span className="text-amber-600 transition-transform duration-300 flex-shrink-0 ml-4">
                          {isOpen ? <MinusIcon /> : <PlusIcon />}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="p-6 pt-0 text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;