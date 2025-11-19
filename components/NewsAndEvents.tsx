
import React from 'react';

const newsItems = [
    {
    image: "https://picsum.photos/600/400?random=9",
    date: "10 de Agosto, 2024",
    title: "Parceria Amplia Atendimento Médico",
    excerpt: "Firmamos uma nova parceria com a Clínica Saúde & Vida para oferecer consultas médicas especializadas aos nossos assistidos, fortalecendo nosso pilar de cuidado integral.",
  },
  {
    image: "https://picsum.photos/600/400?random=10",
    date: "02 de Agosto, 2024",
    title: "Jantar Beneficente Arrecada Fundos",
    excerpt: "Nosso jantar beneficente foi um sucesso! Agradecemos a todos os doadores e voluntários que tornaram o evento possível e ajudaram a arrecadar fundos para nossos programas.",
  },
  {
    image: "https://picsum.photos/600/400?random=11",
    date: "29 de Julho, 2024",
    title: "Novo Programa de Capacitação Profissional",
    excerpt: "Lançamos um novo programa de capacitação em parceria com empresas locais, oferecendo cursos e workshops para preparar nossos assistidos para o mercado de trabalho.",
  },
  {
    image: "https://picsum.photos/600/400?random=5",
    date: "28 de Julho, 2024",
    title: "A Jornada de Superação de Carlos",
    excerpt: "Conheça a história de Carlos, que após anos lutando contra a dependência, encontrou em nosso programa o apoio para recomeçar e hoje está reintegrado à sua família.",
  },
  {
    image: "https://picsum.photos/600/400?random=6",
    date: "15 de Julho, 2024",
    title: "Noites Frias: A Realidade nas Ruas",
    excerpt: "Nossos voluntários relatam a intensificação do trabalho durante o inverno, distribuindo cobertores e alimentos para a população em situação de rua, oferecendo um pouco de calor e esperança.",
  },
  {
    image: "https://picsum.photos/600/400?random=7",
    date: "05 de Julho, 2024",
    title: "Oficina de Arte Traz Novas Perspectivas",
    excerpt: "A nova oficina de arte e artesanato se tornou um espaço de expressão e redescoberta para muitos assistidos, mostrando o poder da criatividade no processo de recuperação.",
  },
];

const NewsAndEvents: React.FC = () => {
  return (
    <section id="noticias" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-900">Notícias e Eventos</h2>
          <p className="text-gray-600 mt-4 text-lg">Fique por dentro das nossas últimas ações e novidades.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-stone-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="font-bold text-amber-700 hover:underline">Leia Mais &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;