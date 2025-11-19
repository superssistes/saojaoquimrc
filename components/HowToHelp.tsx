
import React, { useState } from 'react';
import { PixIcon, CardIcon } from './icons';

const HowToHelp: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50);

  const donationOptions = [
    { value: 25, label: 'R$ 25', impact: 'Garante um kit de higiene completo.' },
    { value: 50, label: 'R$ 50', impact: 'Garante uma refeição nutritiva.' },
    { value: 100, label: 'R$ 100', impact: 'Apoia um dia de tratamento.' },
  ];

  const handleAmountClick = (value: number) => {
    setAmount(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <section id="ajudar" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Como Você Pode Ajudar</h2>
        <p className="mt-4 text-lg text-amber-100 mb-12">Sua doação viabiliza internações e tratamentos. 100% da sua ajuda vai para quem precisa.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* DONATION CARD */}
          <div className="bg-amber-50 text-gray-900 p-8 rounded-3xl shadow-2xl lg:col-span-3 relative overflow-hidden">
            {/* Efeito de brilho de fundo */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"></div>
            
            <h3 className="text-2xl font-bold mb-2">Faça a Diferença com sua Doação</h3>
            <p className="text-gray-600 mb-6">Sua doação viabiliza tratamentos, alimentação e todo o suporte que oferecemos.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {donationOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => handleAmountClick(option.value)}
                  className={`p-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm ${amount === option.value ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/40' : 'bg-white hover:bg-amber-100 text-gray-700'}`}
                >
                  <span className="font-bold text-xl block">{option.label}</span>
                  <span className="text-xs opacity-90">{option.impact}</span>
                </button>
              ))}
            </div>
            
             <div className="mb-6">
              <label htmlFor="custom-amount" className="sr-only">Outro valor</label>
              <input 
                type="number" 
                id="custom-amount"
                placeholder="Ou digite um valor"
                value={typeof amount === 'number' ? '' : amount}
                onChange={handleCustomAmountChange}
                onClick={() => setAmount('')}
                className="w-full px-6 py-4 bg-white rounded-2xl text-center text-lg focus:outline-none focus:ring-0 focus:bg-amber-100 transition-all shadow-inner"
              />
            </div>

            <button className="bg-amber-600 text-white font-bold py-4 px-10 rounded-full hover:bg-amber-700 transition duration-300 text-lg w-full shadow-lg shadow-amber-600/30 transform hover:-translate-y-1">
              Contribuir Agora
            </button>

            <div className="flex items-center justify-center mt-6 space-x-4 opacity-70">
                <span className="text-gray-600 text-sm">Pagamento seguro via:</span>
                <span className="h-6 w-6 text-gray-600"><PixIcon/></span>
                <span className="h-6 w-6 text-gray-600"><CardIcon/></span>
            </div>
          </div>

          {/* PARTNER CARD */}
          <div className="bg-stone-50 text-gray-800 p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center lg:col-span-1 transform hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">Seja um Parceiro</h3>
            <p className="mb-6 flex-grow text-center">Empresas podem gerar um grande impacto social e transformar vidas conosco.</p>
            <a href="#contato" className="font-bold text-amber-700 hover:text-amber-800 mt-auto py-2 px-6 bg-amber-100 rounded-full transition-colors">Entre em Contato</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;