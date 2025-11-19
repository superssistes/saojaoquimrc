
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuração de responsividade
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Classe de Partícula (Coração)
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      pulseSpeed: number;
      pulseAngle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Velocidade lenta
        this.vy = (Math.random() - 0.5) * 0.5;
        this.baseSize = Math.random() * 4 + 3; // Tamanho um pouco maior para o coração
        this.size = this.baseSize;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebater nas bordas
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Efeito de pulsação
        this.pulseAngle += this.pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulseAngle) * 1.5;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Desenhar coração
        ctx.fillStyle = 'rgba(251, 191, 36, 0.7)'; // Amber-400 com transparência
        ctx.beginPath();
        const s = this.size;
        // Desenho do coração usando curvas de Bezier
        ctx.moveTo(0, -s / 2);
        ctx.bezierCurveTo(s / 2, -s, s, -s / 3, 0, s); 
        ctx.bezierCurveTo(-s, -s / 3, -s / 2, -s, 0, -s / 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      // Quantidade de partículas baseada na largura da tela
      const numberOfParticles = Math.floor((width * height) / 12000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Desenhar conexões (Rede Neural)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 130;

          if (distance < maxDistance) {
            // Opacidade baseada na distância
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(251, 191, 36, ${opacity * 0.4})`; // Linhas Amber
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Atualizar e desenhar partículas
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicialização
    window.addEventListener('resize', handleResize);
    handleResize(); // Setup inicial
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="inicio" className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950">
      {/* Canvas da Rede Neural de Corações */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Overlay sutil para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-stone-900/30 z-[2]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img 
          src="https://i.postimg.cc/43xJ2bHK/logo-sao-joaquim-rm.png" 
          alt="Logo Instituto São Joaquim" 
          className="mx-auto h-48 w-auto mb-10 drop-shadow-2xl filter brightness-110"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          Transformando Vidas com Dignidade e Esperança
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light drop-shadow-md">
          Acolhimento, tratamento e reintegração social para quem mais precisa.
        </p>
        {/* Botão removido conforme solicitado */}
      </div>
    </section>
  );
};

export default Hero;
