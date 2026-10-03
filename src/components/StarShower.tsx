'use client';
import { useEffect, useRef } from 'react';

export default function StarShower() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Static ambient stars
    const staticStars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
    const numStaticStars = Math.floor((width * height) / 4500);
    for (let i = 0; i < numStaticStars; i++) {
      staticStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
      });
    }

    // Shooting stars / Star shower meteors
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      thickness: number;
      color: string;
      active: boolean;
    }

    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 4;

    const createShootingStar = () => {
      // Come from top or right side diagonally downwards to the left
      const startFromTop = Math.random() > 0.4;
      const x = startFromTop ? Math.random() * (width + 300) : width + 50;
      const y = startFromTop ? -50 : Math.random() * (height * 0.6);
      const isOrange = Math.random() > 0.4;

      shootingStars.push({
        x,
        y,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 12 + 10,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // ~45 deg diagonal
        opacity: 1,
        thickness: Math.random() * 2 + 1,
        color: isOrange ? '#FF5500' : '#FFFFFF',
        active: true,
      });
    };

    let lastMeteorTime = 0;

    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw static blinking stars
      for (const star of staticStars) {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#FF5500';
        ctx.fill();
      }

      // 2. Spawn shooting star periodically (every 1.5 - 3.5s)
      if (timestamp - lastMeteorTime > Math.random() * 2000 + 1500) {
        if (shootingStars.length < maxShootingStars) {
          createShootingStar();
        }
        lastMeteorTime = timestamp;
      }

      // 3. Render and update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        if (!star.active) continue;

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(0.3, star.color === '#FF5500' ? 'rgba(255, 119, 38, 0.8)' : 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.thickness;
        ctx.shadowBlur = 12;
        ctx.shadowColor = star.color;
        ctx.stroke();

        // Glowing star head
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.thickness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();

        // Move star forward
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        // Remove if off screen
        if (star.x < -100 || star.x > width + 200 || star.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
