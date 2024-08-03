import { NavLink } from 'react-router-dom';
import { Arrow } from '../Icons';

interface NavLinkButtonProps {
  className: string;
  text: string;
  bgClasses: string;
  arrowClasses: string;
  to: string;
}

const NavLinkButton = ({
  className,
  text,
  bgClasses,
  arrowClasses,
  to,
}: NavLinkButtonProps) => {
  return (
    <NavLink
      to={to}
      className={`group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out ${
        className || ''
      }`}
    >
      <span className="relative z-10">{text}</span>
      <Arrow
        className={`size-5 relative z-10 transition-colors duration-300 ease-in-out ${arrowClasses}`}
      />
      <div
        className={`absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${bgClasses}`}
      />
    </NavLink>
  );
};

export default NavLinkButton;
