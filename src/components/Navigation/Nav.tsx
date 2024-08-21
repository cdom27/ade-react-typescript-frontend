import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { Arrow } from '../Icons';
import NavLinkButton from './NavLinkButton';
import { links } from '../../utils/navUtils';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Creating ref to target items for animation
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const listItemRef = useRef<(HTMLLIElement | null)[]>([]);

  const lastScrollY = useRef(0);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Hide/reveal floating nav based on scroll position
  useEffect(() => {
    if (navRef.current) {
      // GSAP timeline for scroll-triggered animation
      tl.current = gsap.timeline({ paused: true });
      tl.current.to(navRef.current, { y: -100, duration: 0.3 });

      // Monitor scroll events
      const trigger = ScrollTrigger.create({
        start: 'top top',
        onUpdate: () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            tl.current?.play();
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up
            tl.current?.reverse();
          }
          lastScrollY.current = currentScrollY;
        },
      });

      // Cleanup
      return () => {
        trigger.kill();
        tl.current?.kill();
      };
    }
  }, []);

  // Manage opening animation for the nav
  useEffect(() => {
    if (menuRef.current && listItemRef.current.every((item) => item !== null)) {
      // GSAP timeline for menu extension and retraction
      const menuTl = gsap.timeline({ paused: true });
      menuTl.fromTo(
        menuRef.current,
        { height: 0 },
        { height: 'auto', duration: 0.5, ease: 'power2.out' }
      );

      // GSAP timeline for list items sliding down and up
      const itemsTl = gsap.timeline({ paused: true });
      listItemRef.current.forEach((item, index) => {
        if (item) {
          itemsTl.fromTo(
            item,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, delay: index * 0.1 }
          );
        }
      });

      // Monitor menu state
      if (isOpen) {
        menuTl.play();
        itemsTl.play();
      }

      // Cleanup
      return () => {
        menuTl.kill();
        itemsTl.kill();
      };
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="bg-primary border-content border-[1px] border-opacity-20 fixed top-4 left-6 right-6 z-50 py-4 px-8 rounded-md text-content md:left-20 md:right-20 lg:left-28 lg:right-28"
    >
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-editorial_ul_italic text-4xl">Ade</h1>
        </NavLink>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="font-fraktion_reg text-sm sm:text-xl"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Extended mobile nav */}
      <ul
        ref={menuRef}
        className={`flex flex-col mt-4 mb-12 text-2xl gap-y-4 border-t-[1px] border-content pt-4 overflow-hidden ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        {links.map((link, index) => (
          <li
            key={link.href}
            ref={(el) => (listItemRef.current[index] = el)}
            className="border-b-[1px] border-content pb-4"
          >
            <NavLink
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-lime-700' : 'text-content'
                } font-fraktion_reg flex items-center justify-between`
              }
            >
              <span>{link.name}</span>
              <Arrow className="stroke-content size-4" />
            </NavLink>
          </li>
        ))}
        <li ref={(el) => (listItemRef.current[links.length] = el)}>
          <NavLinkButton
            className="text-accent hover:text-content border-none bg-content hover:bg-accent active:bg-accent text-lg px-6 py-2 mt-8 sm:text-xl sm:w-4/5 sm:mx-auto"
            text="GET IN TOUCH"
            to="/contact"
            bgClasses="bg-accent"
            arrowClasses="stroke-accent group-hover:stroke-content rotate-[-45deg]"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
