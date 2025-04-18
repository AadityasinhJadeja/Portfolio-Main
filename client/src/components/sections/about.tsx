import { useEffect, useRef } from "react";
import { personalInfo, interests } from "@/lib/data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = sectionRef.current?.querySelectorAll('.animated-slide-up');
          animatedElements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 animated-slide-up">
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            {personalInfo.about.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.name}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Location:</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-300">{personalInfo.availability}</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <i className={`fab ${social.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 animated-slide-up">
            <h3 className="text-xl font-bold mb-4">My Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((interest) => (
                <div 
                  key={interest.id} 
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center"
                >
                  <i className={`fas ${interest.icon} text-2xl text-primary mb-2`}></i>
                  <h4 className="font-medium">{interest.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
