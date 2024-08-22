import { NavLink } from 'react-router-dom';
import { links } from '../../utils/navUtils';

const Footer = () => {
  return (
    <footer className="px-6 py-20 text-center bg-leafs bg-cover md:px-20 lg:px-28 lg:py-36 lg:flex lg:flex-col">
      <h2 className="text-4xl font-editorial_ul_italic text-primary sm:text-5xl">
        Embrace San Diego With Ade
      </h2>
      <ul className="flex flex-col gap-y-4 mt-16 lg:flex-row lg:space-x-8 lg:mx-auto">
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
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` font-editorial_ul text-2xl sm:text-3xl ${
                isActive ? 'text-accent' : 'text-primary'
              }`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
