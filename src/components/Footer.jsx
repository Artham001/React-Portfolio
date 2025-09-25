// src/components/Footer.jsx

function Footer() {
  // new Date().getFullYear() automatically gets the current year
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} Artham Bhati. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;