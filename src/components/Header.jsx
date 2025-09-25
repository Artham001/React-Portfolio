// src/components/Header.jsx

function Header() {
  return (
    <header className="bg-gray-900/70 text-gray-200 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center shadow-lg">
      <a href="#" className="text-xl font-bold hover:text-indigo-400 transition-colors">
        Artham Bhati
      </a>
      <nav className="space-x-6">
        <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
      </nav>
    </header>
  );
}

export default Header;