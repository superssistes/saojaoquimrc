
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="parceiros" className="py-20 bg-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900">Quem nos Apoia</h2>
          <p className="text-gray-600 mt-4 text-lg">Agradecemos aos nossos parceiros que tornam nosso trabalho possível.</p>
        </div>
        <div className="flex justify-center items-center w-full">
            <img 
              src="https://i.postimg.cc/RCQYpCp8/Light-Blue-Pixel-5120-x-1080-Format-Horizontal-Thin-Cyber-Monday-Ultra-Wide-Instagram-Post.png" 
              alt="Nossos Parceiros" 
              className="w-full max-w-6xl h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
        </div>
      </div>
    </section>
  );
};

export default Partners;
