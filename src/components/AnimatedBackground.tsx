
import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parameters for particles
    const particleCount = 70;
    const connectionDistance = 150;
    const mouseRadius = 150;

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Create particles with enhanced properties
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      speedFactor: number;
    }> = [];

    // Create color palette based on theme
    const getRandomColor = () => {
      const colors = theme === 'dark' 
        ? ['rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)'] 
        : ['rgba(79, 150, 255, 0.8)', 'rgba(159, 122, 255, 0.8)', 'rgba(255, 102, 173, 0.8)'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        color: getRandomColor(),
        opacity: Math.random() * 0.5 + 0.2,
        speedFactor: Math.random() * 0.5 + 0.5
      });
    }

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');  // Dark blue
        gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.95)'); // Slate
        gradient.addColorStop(1, 'rgba(51, 65, 85, 0.95)');   // Dark slate
      } else {
        gradient.addColorStop(0, 'rgba(240, 249, 255, 0.95)'); // Light blue
        gradient.addColorStop(0.5, 'rgba(249, 250, 251, 0.95)'); // Gray
        gradient.addColorStop(1, 'rgba(243, 244, 246, 0.95)');   // Light gray
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a subtle grid pattern
      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? 'rgba(75, 85, 99, 0.1)' : 'rgba(209, 213, 219, 0.3)';
      ctx.lineWidth = 1;
      
      // Draw vertical grid lines
      for (let x = 0; x <= canvas.width; x += 50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      // Draw horizontal grid lines
      for (let y = 0; y <= canvas.height; y += 50) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      ctx.stroke();

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Check distance to mouse for interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse repulsion effect
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          particle.vx -= dx * force * 0.01 * particle.speedFactor;
          particle.vy -= dy * force * 0.01 * particle.speedFactor;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }

        // Slight friction/damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Glow effect
        const glow = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        glow.addColorStop(0, particle.color.replace(')', ', ' + particle.opacity + ')').replace('rgba', 'rgba'));
        glow.addColorStop(1, particle.color.replace(')', ', 0)').replace('rgba', 'rgba'));

        // Draw the particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Core of the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(59, 130, 246, ${opacity * 0.5})`
              : `rgba(79, 150, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;
