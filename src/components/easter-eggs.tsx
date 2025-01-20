'use client';
import { useDevToolsOpen } from '@/hooks/use-devtools-open';
import { useEffect } from 'react';
import NyanCat from './nyan-cat';

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;

    if (typeof console !== 'undefined') {
      console.clear();
      console.log(
        '%cWhoa, Detective Lei! 🕵️‍♂️\n' +
          'You’ve unlocked the secret developer console! 🚀\n\n' +
          'Feeling adventurous? 🌟 Type %cLei%c and hit enter to reveal some magic! 🎩✨\n\n' +
          'But beware... with great power comes great curiosity! 🧙‍♂️',
        'color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px',
        'color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px',
        'color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;'
      );

      ['lei', 'Lei', 'LEI'].forEach((name) => {
        if (Object.hasOwn(window, name)) return;

        Object.defineProperty(window, name, {
          get() {
            console.log(
              '%c✨ Tadaaaa! ✨\n\n' +
                'You just summoned the legendary Lei! 🧙‍♂️\n' +
                'Legend says Lei holds the secrets of the developer multiverse. 🌌\n\n' +
                'Careful now... the console might start talking back! 🤔',
              'color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px'
            );

            const timer = setTimeout(() => {
              console.log(
                '%cPsst... hey, Lei fan! 🤫\n\n' +
                  "Do you love Nyan Cats? 🐱✨ If yes, press %c'N'%c and enjoy the ride! 🚀",
                'color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;',
                'color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;',
                'color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;'
              );
              clearTimeout(timer);
            }, 5000);

            return '🎉✨ Welcome to Lei’s secret dimension! 🌌';
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
