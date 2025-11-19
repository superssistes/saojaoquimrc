
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Instituto São Joaquim</h3>
        <p className="text-gray-400 mb-4">Transformando vidas, uma de cada vez.</p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          <a href="#sobre" className="hover:underline">Sobre Nós</a>
          <a href="#programas" className="hover:underline">Programas</a>
          <a href="#ajudar" className="hover:underline">Como Ajudar</a>
          <a href="#depoimentos" className="hover:underline">Depoimentos</a>
          <a href="#noticias" className="hover:underline">Notícias</a>
          <a href="#historias-sucesso" className="hover:underline">Histórias</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#ia" className="hover:underline">IA Assiste</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Instituto São Joaquim. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;