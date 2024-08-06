import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Arrow } from '../Icons';

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
  const handleClick = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 0 });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 p-3 bg-content rounded-full"
    >
      <Arrow className="size-5 stroke-accent rotate-[-90deg]" />
    </button>
  );
};

export default ScrollToTopButton;
