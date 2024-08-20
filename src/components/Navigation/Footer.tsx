import { NavLink } from 'react-router-dom';
import { links } from '../../utils/navUtils';
import { Arrow } from '../Icons';

const Footer = () => {
  return (
    <footer className="px-6 py-20 text-center bg-leafs bg-cover md:px-20">
      <h2 className="text-4xl font-editorial_ul_italic text-primary sm:text-5xl">
        Embrace San Diego With Ade
      </h2>
      <ul className="flex flex-col gap-y-4 mt-16">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                ` font-editorial_ul text-2xl sm:text-3xl ${
                  isActive ? 'text-accent' : 'text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li>
          <a
            href="https://cidominguez.com/work"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md rounded-full px-9 py-4 transition-colors duration-300 ease-in-out text-content bg-accent hover:bg-primary active:bg-primary mt-8 sm:text-xl"
          >
            <span className="relative z-10">
              Learn How This Website Was Made
            </span>
            <Arrow className="size-7 relative z-10 transition-colors duration-300 ease-in-out stroke-content rotate-[-45deg]" />
            <div className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-primary" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
