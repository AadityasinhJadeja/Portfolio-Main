import { useEffect, useRef } from "react";
import { technicalSkills, professionalSkills } from "@/lib/data";
import { CircleProgress } from "@/components/ui/circle-progress";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate slide up elements
          const animatedElements = sectionRef.current?.querySelectorAll('.animated-slide-up');
          animatedElements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, index * 100);
          });

          // Animate skill bars
          const skillBars = skillBarsRef.current?.querySelectorAll('.skill-bar');
          skillBars?.forEach((bar) => {
            const width = bar.getAttribute('data-width');
            (bar as HTMLElement).style.width = '0%';
            setTimeout(() => {
              (bar as HTMLElement).style.width = width + '%';
            }, 100);
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
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animated-slide-up" ref={skillBarsRef}>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full skill-bar" 
                      data-width={skill.percentage}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animated-slide-up">
            <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill) => (
                <div key={skill.id} className="text-center">
                  <CircleProgress 
                    percentage={skill.percentage} 
                    className="mb-4"
                  />
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
