import { NavLink } from 'react-router-dom';
import { Arrow } from '../Icons';

type ButtonProps = {
  variant?: 'default' | 'primary' | 'accent' | 'secondary';
  to: string;
  external?: boolean;
  children: React.ReactNode;
};

const NavButton = ({
  variant = 'default',
  to,
  external = false,
  children,
}: ButtonProps) => {
  //Define classes for variants
  const variants = {
    default: {
      main: 'text-primary hover:text-content border-primary hover:border-accent active:border-accent hover:bg-accent active:bg-accent xl:self-start',
      arrow: 'stroke-primary group-hover:stroke-content',
      bg: 'bg-accent',
    },
    accent: {
      main: 'text-content hover:text-accent border-none bg-accent hover:bg-content active:bg-content xl:self-start',
      arrow: 'stroke-content group-hover:stroke-accent',
      bg: 'bg-content',
    },
    primary: {
      main: 'text-accent hover:text-content border-none bg-content hover:bg-accent active:bg-accent xl:self-start',
      arrow: 'stroke-accent group-hover:stroke-content',
      bg: 'bg-accent',
    },
    secondary: {
      main: 'text-content border-content hover:border-accent active:border-accent lg:self-start',
      arrow: 'stroke-content',
      bg: 'bg-accent',
    },
  };

  return (
    <NavLink
      to={to}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out ${variants[variant].main}`}
    >
      <span className="relative z-10 lg:mr-4">{children}</span>
      <Arrow
        className={`size-5 relative z-10 transition-colors duration-300 ease-in-out ${
          variants[variant].arrow
        } ${external && 'rotate-[-45deg]'}`}
      />
      <div
        className={`absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${variants[variant].bg}`}
      />
    </NavLink>
  );
};

export default NavButton;
