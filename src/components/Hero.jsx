// src/components/Hero.jsx

function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center text-center">
      <div>
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