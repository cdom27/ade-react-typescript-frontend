import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Arrow } from '../Icons';

const links = [
  {
    href: '/homes',
    name: 'HOMES',
  },
  {
    href: '/services',
    name: 'SERVICES',
  },
  {
    href: '/About',
    name: 'ABOUT',
  },
  {
    href: '/approach',
    name: 'APPROACH',
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary border-content border-[1px] border-opacity-20 fixed top-4 left-6 right-6 z-50 py-4 px-8 rounded-md text-content">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-editorial_ul_italic text-4xl">Ade</h1>
        </NavLink>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="font-fraktion_reg text-sm"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Open mobile nav */}
      {isOpen && (
        <ul className="flex flex-col mt-4 mb-12 text-2xl gap-y-4 border-t-[1px] border-content pt-4">
          {links.map((link) => (
            <li key={link.href} className="border-b-[1px] border-content pb-4">
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
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? 'text-lime-700 border-lime-700' : 'text-content'
                } font-fraktion_reg flex items-center justify-between text-xl border-[1px] rounded-full px-6 py-2 border-content`
              }
            >
              <span>GET IN TOUCH</span>
              <Arrow className="stroke-content size-4 rotate-[-45deg]" />
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
