import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import open from '../../assets/open.svg';
import close from '../../assets/close.svg';

const links = [
  {
    href: '/vision',
    name: 'Vision',
  },
  {
    href: '/approach',
    name: 'Approach',
  },
  {
    href: '/homes',
    name: 'Homes',
  },
  {
    href: '/contact',
    name: 'Contact',
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col bg-bg-primary text-content-primary px-6 pt-8">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          className="hover:text-brand-accent active:text-brand-accent"
        >
          <h1 className="text-6xl font-bold">Ade</h1>
        </NavLink>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-[32px] flex justify-center"
        >
          {isOpen ? (
            <img src={close} alt="Close menu" />
          ) : (
            <img src={open} alt="Open menu" />
          )}
        </button>
      </div>
      <h3 className="text-2xl font-bold">Modern Homes</h3>

      {/* Open mobile nav */}
      {isOpen && (
        <ul className="flex flex-col mt-4 mb-12 text-3xl space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-content-primary'
                      : 'text-bg-secondary hover:text-brand-accent active:text-brand-accent'
                  } font-medium`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
