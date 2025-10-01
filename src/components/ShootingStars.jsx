import React, { useRef, useEffect } from 'react';

function ShootingStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setup = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const stars = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 25000);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Trail effect
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.speed * 2, star.y + star.speed);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.2})`;
        ctx.lineWidth = star.size * 0.5;
        ctx.stroke();

        star.x -= star.speed;
        star.y += star.speed / 2;

        if (star.x < 0) {
          star.x = canvas.width;
        }
        if (star.y > canvas.height) {
          star.y = 0;
        }
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