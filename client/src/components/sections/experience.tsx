import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
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
            }, index * 150);
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
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="timeline-item relative pl-8 pb-8 animated-slide-up">
              <div className="timeline-dot relative">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      {experience.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-4">{experience.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {experience.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
