// src/components/Contact.jsx
import { Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a 
          href="mailto:arham.bhati@gmail.com" 
          className="inline-block bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        >
           <Mail className="inline-block mr-2" /> Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;