import { useEffect, useRef } from 'react';

const ParticleField = ({ variant = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let animationFrame;
    let particles = [];

    const colors =
      variant === 'light'
        ? {
            dot: 'rgba(11, 77, 162, 0.75)',
            line: 'rgba(11, 77, 162, 0.16)',
          }
        : {
            dot: 'rgba(56, 227, 255, 0.85)',
            line: 'rgba(56, 227, 255, 0.18)',
          };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;

      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const particleCount = Math.min(95, Math.floor((width * height) / 14000));

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.dot;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 1 - distance / 120;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  );
};

export default ParticleField;