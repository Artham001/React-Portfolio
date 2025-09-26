import React , { useState , useEffect } from "react";
import { ArrowUpCircle } from 'lucide-react';
import Header from "./components/Header"
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component is removed
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
	return(
		<div>
			<Header/>
			<Hero/>
			<Skills/>
			<Projects/>
			<Contact/>
			<Footer/>

			 {isVisible && (
        	<button
          	onClick={scrollToTop}
          	className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-transform transform hover:scale-110"
        	>
          	<ArrowUpCircle size={24} />
        	</button>
      	)}
		</div>
	);
}
export default App