import React, { useRef, useEffect } from 'react';

function ShootingStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let stars = [];
    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 40000);

      for (let i = 0; i < starCount; i++) {
        const depth = Math.random() * 0.7 + 0.3;

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          depth: depth,
          // 1. INCREASED SIZE: Added a base size of 0.5px so even the farthest stars are visible.
          size: (depth * 2.8 + 0.8), 
          speed: (depth * 1.3),
          // 2. INCREASED OPACITY: Adjusted so the faintest stars are now 50% opaque instead of 30%.
          opacity: (depth * 0.6 + 0.6),
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Star Head (Glowing effect)
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // FADING TRAIL: Use a linear gradient for a soft, fading trail.
        const trailLength = star.speed * 25;
        const trailX = star.x - trailLength;
        const trailY = star.y - trailLength / 2; // Angled trail
        
        const trailGradient = ctx.createLinearGradient(star.x, star.y, trailX, trailY);
        trailGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.8})`);
        trailGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(trailX, trailY);
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = star.size > 1 ? 1 : 0.6;
        ctx.stroke();
        
        // Move star from left to right
        star.x += star.speed;
        star.y += star.speed / 2;

        if (star.x > canvas.width) star.x = 0;
        if (star.y > canvas.height) star.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    window.addEventListener('resize', setup);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
}

export default ShootingStars;