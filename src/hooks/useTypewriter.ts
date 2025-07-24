import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 80,
  deleteSpeed = 60,
  delayBetweenWords = 1800,
}: UseTypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setIsTyping(true);
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word completed, wait then start deleting
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        setIsTyping(false);
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Deletion completed, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return { text: currentText, isTyping };
}; 