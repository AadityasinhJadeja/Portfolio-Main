import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [displayText, setDisplayText] = useState(personalInfo.roles[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const currentText = personalInfo.roles[textIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prevCharIndex => prevCharIndex - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prevCharIndex => prevCharIndex + 1);
      }
      
      let typingDelay = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
        typingDelay = 1000; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevTextIndex) => (prevTextIndex + 1) % personalInfo.roles.length);
      }
      
      setTimeout(typeEffect, typingDelay);
    };
    
    const timeoutId = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeoutId);
  }, [isDeleting, charIndex, textIndex]);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              <span>{displayText}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I build exceptional digital experiences with clean, efficient code. 
              Passionate about creating solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient text-white rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:border-primary dark:hover:border-primary transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0 animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt={personalInfo.name} 
                className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
