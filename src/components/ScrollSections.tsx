import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CTAButton } from './ui/CTAButton';

gsap.registerPlugin(ScrollTrigger);

export const ScrollSections = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const stackingRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const stacking = stackingRef.current;
    const horizontal = horizontalRef.current;
    const horizontalContainer = horizontalContainerRef.current;

    if (!container || !hero || !stacking || !horizontal || !horizontalContainer) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(st => st.kill());

    // Pin hero section and create stacking effect
    gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      }
    });

    // Stacking card effect - slide up over hero
    gsap.timeline({
      scrollTrigger: {
        trigger: stacking,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      }
    })
    .fromTo(stacking, 
      { y: "100vh" }, 
      { y: "0vh", ease: "none" }
    );

    // Horizontal scroll sections
    const sections = horizontal.querySelectorAll('.horizontal-section');
    const totalWidth = sections.length * 100; // 100vw per section

    gsap.set(horizontal, { width: `${totalWidth}vw` });

    gsap.timeline({
      scrollTrigger: {
        trigger: horizontalContainer,
        start: "top top",
        end: () => `+=${totalWidth * 10}`, // Adjust scroll distance
        pin: true,
        scrub: 1,
      }
    })
    .to(horizontal, {
      x: `-${(totalWidth - 100)}vw`, // Move left by total width minus viewport
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Hero Section - Will be pinned */}
      <div ref={heroRef} className="hero-pin">
        {/* Hero content is rendered separately in Hero component */}
      </div>

      {/* Stacking Section */}
      <div ref={stackingRef} className="h-screen bg-white relative z-10 flex items-center justify-center">
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
            Innovative Software Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-md:text-lg">
            We build scalable, high-performance digital products for ambitious businesses. From MVP to enterprise, our team delivers robust solutions tailored to your needs.
          </p>
          <CTAButton fillColor="bg-blue-600" hoverFillColor="bg-black">
            See Our Work
          </CTAButton>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={horizontalContainerRef} className="horizontal-container h-screen">
        <div ref={horizontalRef} className="horizontal-scroll flex h-full">
          
          {/* Section 1 */}
          <div className="horizontal-section w-screen h-full bg-gray-900 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-8">
              <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
                Custom Development
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-md:text-lg">
                Web, mobile, and cloud solutions engineered for performance, security, and scale. We turn your ideas into production-ready code.
              </p>
              <CTAButton fillColor="bg-white" hoverFillColor="bg-blue-600" className="text-black">
                Learn More
              </CTAButton>
            </div>
          </div>

          {/* Section 2 */}
          <div className="horizontal-section w-screen h-full bg-blue-600 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-8">
              <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
                Modern Tech Stack
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-md:text-lg">
                We leverage React, Node.js, TypeScript, and cloud-native architectures to deliver maintainable, future-proof products.
              </p>
              <CTAButton fillColor="bg-white" hoverFillColor="bg-green-600" className="text-black">
                Our Stack
              </CTAButton>
            </div>
          </div>

          {/* Section 3 */}
          <div className="horizontal-section w-screen h-full bg-green-600 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-8">
              <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
                Agile Collaboration
              </h2>
              <p className="text-xl text-green-100 mb-8 max-md:text-lg">
                Transparent process, rapid iteration, and direct access to senior engineers. We partner with you at every step.
              </p>
              <CTAButton fillColor="bg-white" hoverFillColor="bg-red-600" className="text-black">
                How We Work
              </CTAButton>
            </div>
          </div>

          {/* Section 4 */}
          <div className="horizontal-section w-screen h-full bg-red-600 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-8">
              <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
                Proven Results
              </h2>
              <p className="text-xl text-red-100 mb-8 max-md:text-lg">
                Trusted by startups and enterprises worldwide. See how we’ve accelerated growth and delivered value for our clients.
              </p>
              <CTAButton fillColor="bg-white" hoverFillColor="bg-purple-600" className="text-black">
                Case Studies
              </CTAButton>
            </div>
          </div>

        </div>
      </div>

      {/* Final Section */}
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center max-w-4xl px-8">
          <h2 className="text-6xl font-bold mb-6 max-md:text-4xl">
            Ready to Build?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-md:text-lg">
            Let’s create something exceptional together. Contact us to discuss your next project or request a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton fillColor="bg-white" hoverFillColor="bg-blue-600" className="text-black">
              Contact Us
            </CTAButton>
            <CTAButton variant="outline" hoverFillColor="bg-white" className="border-white text-white">
              Book Consultation
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};