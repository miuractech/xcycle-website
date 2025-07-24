import { CTAButton } from './ui/CTAButton';
import { useTypewriter } from '../hooks/useTypewriter';
import { Button } from './ui/button';

export const Hero = () => {
  const { text: typewriterText, isTyping } = useTypewriter({
    words: ['design', 'develop', 'deploy'],
    typeSpeed: 70,
    deleteSpeed: 50,
    delayBetweenWords: 1200,
  });

  return (
    <main className="h-screen grid place-content-center pt-20 px-4 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl mb-4 max-md:text-4xl max-sm:text-3xl drop-shadow-lg animate-on-load animate-fade-in-up">
          We{' '}
          <span className="text-purple-400 font-bold relative inline-block">
            <span className="typewriter-text transition-all duration-100 ease-out">
              {typewriterText}
            </span>
            <span className={`typewriter-cursor ml-1 transition-opacity duration-200 ${isTyping ? 'opacity-100' : 'animate-pulse'}`}>
              |
            </span>
          </span>
          your Ideas
        </h1>
        <p className="text-2xl max-md:text-xl max-sm:text-lg drop-shadow-md animate-on-load animate-fade-in-up animation-delay-200">
          From concept to production - we bring your vision to life
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-load animate-fade-in-scale animation-delay-400">
          <Button
            variant="default"
            size="lg"
            className="rounded-full bg-white text-black border-white hover:scale-105 hover:bg-white "
            data-hover=""
          >
            Start Your Project
            <span data-hover-bounds=""></span>
          </Button>
          <Button
            variant="outline"
             size="lg"
             className='rounded-full'
            data-hover=""
            >
            View Our Work
            <span data-hover-bounds=""></span>
          </Button>
        </div>
      </div>
    </main>
  );
}; 