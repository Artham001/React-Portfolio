// Import the animation component
import ShootingStars from './ShootingStars.jsx';

function Hero() {
  return (
    // The main section is a positioning container.
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* 1. Dedicated Background Container */}
      {/* This div is positioned absolutely to fill the section. It holds BOTH the dark background color and the animation canvas. */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 z-0">
        <ShootingStars />
      </div>
      
      {/* 2. Foreground Content Container */}
      {/* This div has a higher z-index to ensure it sits on top of the background. */}
      <div className="relative z-10 text-white"> 
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hello, I'm <span className="text-indigo-400">Artham Bhati</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          I'm a passionate developer creating modern and responsive web applications. I love solving problems and learning new technologies.
        </p>
        <a 
          href="mailto:artham.1503@gmail.com" 
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
