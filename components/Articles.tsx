
import React from 'react';

const articles = [
  {
    id: 'artigo-populacao-rua',
    image: "https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: 'Apoio à População de Rua: O Primeiro Passo para a Dignidade',
    content: `
      <p class="mb-4 leading-relaxed">A vida nas ruas impõe desafios que vão muito além da falta de um teto. É uma realidade de invisibilidade, onde a sobrevivência diária consome todas as energias. Nossa abordagem começa com o acolhimento humanizado, entendendo que cada pessoa tem uma história, traumas e sonhos que foram interrompidos.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Resgate da Cidadania</h3>
      <p class="mb-4 leading-relaxed">Muitos chegam até nós sem documentos básicos, sem acesso à saúde e sem laços familiares. Nosso trabalho inicial foca em devolver a identidade civil e garantir direitos básicos. Oferecemos banho, roupas limpas, alimentação nutritiva e, acima de tudo, uma escuta ativa e sem julgamentos.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">A Ponte para o Tratamento</h3>
      <p class="mb-4 leading-relaxed">A situação de rua frequentemente caminha junto com dependências e transtornos mentais. Nossa equipe atua como uma ponte, identificando essas necessidades e encaminhando para os tratamentos especializados adequados, iniciando assim a jornada para sair das ruas definitivamente.</p>
    `
  },
  {
    id: 'artigo-alcoolismo',
    image: "https://i.postimg.cc/fyDGrMJ8/alcoolismo.png",
    title: 'Alcoolismo: Compreendendo a Doença e o Caminho para a Recuperação',
    content: `
      <p class="mb-4 leading-relaxed">O alcoolismo, ou Transtorno por Uso de Álcool, é uma doença crônica caracterizada pela incapacidade de controlar o consumo de álcool, apesar das consequências negativas na saúde, trabalho e relações sociais. Longe de ser uma falha de caráter ou falta de força de vontade, é uma condição médica complexa que envolve fatores genéticos, psicológicos e ambientais.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Sinais e Impactos</h3>
      <p class="mb-4 leading-relaxed">Os sinais incluem um forte desejo de beber, desenvolvimento de tolerância (necessidade de doses maiores para obter o mesmo efeito) e sintomas de abstinência quando o consumo é interrompido. O impacto a longo prazo é devastador, afetando o fígado, cérebro, coração e sistema nervoso, além de destruir laços familiares e causar isolamento social.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">O Tratamento Especializado</h3>
      <p class="mb-4 leading-relaxed">A recuperação é um processo que exige suporte profissional. No Instituto São Joaquim, viabilizamos internações em clínicas especializadas que oferecem uma abordagem completa: desintoxicação supervisionada por médicos, terapia individual e em grupo para tratar as causas subjacentes do vício, e apoio contínuo para prevenir recaídas. Acreditamos que, com a ajuda certa, a sobriedade e a reconstrução de uma vida plena são totalmente possíveis.</p>
    `
  },
  {
    id: 'artigo-dependencia-quimica',
    image: "https://i.postimg.cc/DzcH4tCS/dependencia-quimica-(1).jpg",
    title: 'Dependência Química: Desafios e a Esperança de um Recomeço',
    content: `
      <p class="mb-4 leading-relaxed">A dependência química é uma doença que afeta o funcionamento do cérebro e o comportamento, levando ao uso compulsivo de substâncias apesar dos danos causados. Ela não discrimina idade, gênero ou classe social, e seu tratamento é um dos maiores desafios de saúde pública atualmente.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Uma Abordagem Multidisciplinar</h3>
      <p class="mb-4 leading-relaxed">O tratamento eficaz vai muito além da simples abstinência. Requer uma abordagem multidisciplinar que envolva médicos, psicólogos e assistentes sociais. Nossos programas parceiros focam na desintoxicação segura, seguida por terapia intensiva para desenvolver habilidades de enfrentamento, resolver traumas e tratar comorbidades como depressão e ansiedade, que frequentemente acompanham a dependência.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Reintegração e Prevenção de Recaídas</h3>
      <p class="mb-4 leading-relaxed">A verdadeira recuperação acontece quando o indivíduo consegue se reintegrar à sociedade. Por isso, nosso apoio se estende à capacitação profissional e à reconstrução de laços familiares. O objetivo é fornecer as ferramentas necessárias para que cada pessoa possa construir um novo projeto de vida, longe das drogas, com autonomia e dignidade.</p>
    `
  },
  {
    id: 'artigo-saude-mental',
    image: "https://i.postimg.cc/0NZXy7Qm/doenca-esquizofrenia-810x456.jpg",
    title: 'Saúde Mental e Vulnerabilidade: O Desafio da Esquizofrenia',
    content: `
      <p class="mb-4 leading-relaxed">A saúde mental é frequentemente invisibilizada, especialmente em populações vulneráveis. Doenças como a esquizofrenia exigem tratamento contínuo e medicamentoso, o que se torna quase impossível para quem vive em situação de rua ou pobreza extrema. O abandono do tratamento leva a surtos psicóticos, perda de identidade e total desamparo.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Diagnóstico e Acolhimento</h3>
      <p class="mb-4 leading-relaxed">Identificar e tratar transtornos mentais é parte essencial do nosso trabalho. Muitas vezes, o que parece ser apenas uma situação de rua é, na verdade, consequência de um transtorno não tratado. Oferecemos acesso a psiquiatras e medicações essenciais, criando uma rede de apoio que estabiliza o quadro clínico e permite o resgate da cidadania.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Cuidado Humanizado</h3>
      <p class="mb-4 leading-relaxed">Nosso foco é o tratamento humanizado, entendendo que cada indivíduo tem sua história. O suporte psicológico caminha junto com o psiquiátrico, ajudando o paciente a entender sua condição e a conviver com ela de forma saudável, reintegrando-se, sempre que possível, à família e à sociedade.</p>
    `
  },
  {
    id: 'artigo-autismo-aba',
    image: "https://images.pexels.com/photos/8613322/pexels-photo-8613322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: 'Terapia ABA para Autismo: Construindo Pontes para o Futuro',
    content: `
      <p class="mb-4 leading-relaxed">O Transtorno do Espectro Autista (TEA) afeta a comunicação e o comportamento, e para muitas famílias em vulnerabilidade social, o acesso a terapias especializadas é um desafio intransponível. A Análise do Comportamento Aplicada (ABA) é considerada o padrão ouro no tratamento do autismo, mas seu alto custo a torna inacessível para muitos.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">O Que é a Ciência ABA?</h3>
      <p class="mb-4 leading-relaxed">A ABA não é apenas um método, é uma ciência que busca entender e modificar comportamentos. Através de intervenções estruturadas e lúdicas, ajudamos a criança a desenvolver habilidades essenciais como fala, interação social, autocuidado e aprendizado escolar, ao mesmo tempo que reduzimos comportamentos que podem causar danos ou isolamento.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Apoio Integral às Famílias</h3>
      <p class="mb-4 leading-relaxed">No Instituto São Joaquim, nosso programa conecta crianças a terapeutas e psicólogos especializados em ABA. Além das sessões com as crianças, oferecemos treinamento parental, capacitando pais e cuidadores a continuarem o estímulo em casa. Nosso objetivo é garantir que a falta de recursos financeiros não impeça uma criança de alcançar seu pleno potencial.</p>
    `
  },
  {
    id: 'artigo-reintegracao-social',
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: 'Reintegração Social: Construindo uma Nova História',
    content: `
      <p class="mb-4 leading-relaxed">O tratamento clínico é apenas o começo da jornada. Para que a recuperação seja sustentável, o indivíduo precisa encontrar um novo propósito e um lugar na comunidade. A reintegração social é o pilar que sustenta a vida pós-tratamento, devolvendo a autonomia e a autoestima necessárias para seguir em frente.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Capacitação e Oportunidades</h3>
      <p class="mb-4 leading-relaxed">A falta de oportunidades de trabalho é um dos maiores fatores de recaída. Por isso, investimos em parcerias para oferecer cursos profissionalizantes e oficinas de geração de renda. Aprender um ofício não gera apenas sustento financeiro, mas também devolve o sentimento de utilidade e pertencimento social.</p>
      <h3 class="text-xl font-semibold text-amber-700 mt-6 mb-3">Reconstruindo Laços Familiares</h3>
      <p class="mb-4 leading-relaxed">A dependência e a vida nas ruas frequentemente rompem os vínculos com a família. Promovemos terapias familiares e mediação de conflitos para tentar reatar esses laços, quando saudável para ambas as partes. Ter uma rede de apoio afetiva é fundamental para manter a estabilidade emocional e celebrar as conquistas da nova vida.</p>
    `
  }
];

const Articles: React.FC = () => {
  return (
    <section id="artigos" className="py-20 bg-amber-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900">Artigos e Informações</h2>
          <p className="text-gray-600 mt-4 text-lg">Conhecimento para transformar a realidade.</p>
        </div>
        <div className="space-y-16">
          {articles.map((article, index) => (
            <article 
              key={article.id} 
              className={`
                group relative flex flex-col md:flex-row items-center gap-8 md:gap-12 
                ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
                bg-white/60 backdrop-blur-md
                p-8 md:p-12 rounded-[2.5rem]
                transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
                border border-white/60 ring-1 ring-white/40
                
                hover:bg-white 
                hover:scale-[1.02] 
                hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.3)]
                hover:border-amber-300/30
                hover:ring-4 hover:ring-amber-100/50
                hover:z-10
              `}
            >
              <div className="md:w-5/12 w-full overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-1">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="md:w-7/12 text-gray-600">
                <h2 className="text-3xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {article.title}
                </h2>
                <div 
                  className="prose prose-stone prose-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: article.content }} 
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
