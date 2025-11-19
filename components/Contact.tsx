
import React, { useEffect, useRef, useState } from 'react';
import { UserIcon, EnvelopeIcon, PencilIcon } from './icons';

const Contact: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const mapElement = mapContainer.current;
    if (!mapElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!mapInstance.current) {
            // @ts-ignore - Leaflet is loaded from CDN
            const L = window.L;
            const map = L.map(mapElement).setView([-23.55052, -46.633308], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([-23.55052, -46.633308]).addTo(map)
              .bindPopup('<b>Instituto São Joaquim</b><br>Rua da Esperança, 123 - Centro, Cidade Feliz - UF')
              .openPopup();
            
            mapInstance.current = map;
          }
          observer.unobserve(mapElement);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(mapElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionStatus !== 'idle') return;

    setSubmissionStatus('sending');

    // Simulate a network request
    setTimeout(() => {
      setSubmissionStatus('success');
      (e.target as HTMLFormElement).reset(); // Clear form fields

      // Revert back to idle state after a few seconds
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-amber-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Entre em Contato</h2>
          <p className="text-gray-600 mt-4 text-lg">Estamos aqui para ajudar e tirar suas dúvidas.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 bg-white p-10 rounded-3xl shadow-xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-stone-800">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Nome</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 h-5 w-5 group-focus-within:text-amber-500 transition-colors"><UserIcon /></span>
                  </div>
                  <input type="text" id="name" required className="w-full px-4 py-4 pl-12 bg-gray-50 rounded-2xl focus:outline-none focus:bg-amber-50 transition-colors duration-300 shadow-inner" placeholder="Seu nome completo" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Email</label>
                 <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400 h-5 w-5 group-focus-within:text-amber-500 transition-colors"><EnvelopeIcon /></span>
                  </div>
                  <input type="email" id="email" required className="w-full px-4 py-4 pl-12 bg-gray-50 rounded-2xl focus:outline-none focus:bg-amber-50 transition-colors duration-300 shadow-inner" placeholder="seuemail@exemplo.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wider">Mensagem</label>
                <div className="relative group">
                   <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                    <span className="text-gray-400 h-5 w-5 group-focus-within:text-amber-500 transition-colors"><PencilIcon /></span>
                  </div>
                  <textarea id="message" rows={5} required className="w-full px-4 py-4 pl-12 bg-gray-50 rounded-2xl focus:outline-none focus:bg-amber-50 transition-colors duration-300 shadow-inner" placeholder="Escreva sua mensagem aqui..."></textarea>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={submissionStatus === 'sending'}
                className={`
                  w-full text-white font-bold py-4 px-6 rounded-full transition-all duration-300 ease-in-out transform shadow-lg
                  ${submissionStatus === 'idle' ? 'bg-amber-600 hover:bg-amber-700 hover:-translate-y-1 shadow-amber-500/30' : ''}
                  ${submissionStatus === 'sending' ? 'bg-amber-400 cursor-not-allowed' : ''}
                  ${submissionStatus === 'success' ? 'bg-green-600 scale-105' : ''}
                `}
              >
                {submissionStatus === 'sending' && 'Enviando...'}
                {submissionStatus === 'success' && 'Enviado com Sucesso!'}
                {submissionStatus === 'idle' && 'Enviar Mensagem'}
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex flex-col">
             <h3 className="text-2xl font-semibold mb-6 text-stone-800">Nossas Informações</h3>
             <div className="space-y-6 text-gray-600 bg-gray-50 p-8 rounded-3xl shadow-sm flex-grow">
                <p><strong>Endereço:</strong><br/>Rua da Esperança, 123 - Centro<br/>Cidade Feliz - UF</p>
                <p><strong>Telefone:</strong><br/>(XX) XXXX-XXXX</p>
                <p><strong>Email:</strong><br/>contato@institutosaojoaquim.org</p>
                <p><strong>Horário:</strong><br/>Seg a Sex, das 9h às 18h</p>
                
                <div className="pt-4">
                  <h4 className="text-lg font-semibold mb-3 text-stone-800">Siga-nos</h4>
                  <div className="flex space-x-4">
                      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">Facebook</a>
                      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">Instagram</a>
                      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">LinkedIn</a>
                  </div>
                </div>
             </div>
             <div ref={mapContainer} className="h-64 w-full rounded-3xl shadow-md mt-6 z-0 overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;