import { useEffect, useRef } from "react";
import { educations, certifications } from "@/lib/data";

export default function Education() {
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
    <section id="education" className="py-16 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((education) => (
            <div 
              key={education.id} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md animated-slide-up"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300">{education.institution}</h4>
                </div>
                <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  {education.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {education.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">GPA: {education.gpa}</span>
                <i className="fas fa-graduation-cap text-primary"></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((certification) => (
              <div 
                key={certification.id} 
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center animated-slide-up"
              >
                <i className="fas fa-certificate text-primary mr-4"></i>
                <div>
                  <h4 className="font-medium">{certification.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {certification.issuer}, {certification.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
