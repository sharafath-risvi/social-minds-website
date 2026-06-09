import { motion } from 'framer-motion';
import { useEffect } from 'react';
import './IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  // Prevent scrolling while intro is playing
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const word1 = "SOCIAL".split('');
  const word2 = "MINDS".split('');

  // Variants for individual letters
  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="intro-content">
        <div className="intro-text">
          {/* SOCIAL (White) */}
          {word1.map((char, i) => (
            <motion.span
              key={`w1-${i}`}
              className="intro-char intro-white"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04
              }}
            >
              {char}
            </motion.span>
          ))}

          {/* Space */}
          <span className="intro-space" />

          {/* MINDS (Orange) */}
          {word2.map((char, i) => (
            <motion.span
              key={`w2-${i}`}
              className="intro-char intro-orange"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: (word1.length * 0.04) + (i * 0.04)
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Animated Underline */}
        <div className="intro-underline-wrap">
          <motion.div
            className="intro-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 1, 0.5, 1],
              delay: (word1.length + word2.length) * 0.04 + 0.1
            }}
            onAnimationComplete={() => {
              // Wait 2.5 seconds after underline finishes, then trigger exit
              setTimeout(onComplete, 2500);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
