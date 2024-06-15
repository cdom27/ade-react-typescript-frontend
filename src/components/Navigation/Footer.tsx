import { NavLink } from 'react-router-dom';

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

const contactInfo = [
  {
    title: 'Phone',
    text: '6199640960',
  },
  {
    title: 'Email',
    text: 'info@ade.com',
  },
  {
    title: 'Office',
    text: '80 Genesee Avenue San Diego, CA 90192',
  },
];

const Footer = () => {
  return (
    <footer className="space-y-12 pt-28 pb-20 px-6 bg-bg-primary text-content-primary border-t-2 border-bg-secondary">
      <div>
        <h2 className="text-3xl pb-6 font-bold">Get in Touch</h2>
        {contactInfo.map((info) => (
          <div key={info.title} className="pb-4">
            <h3 className="text-2xl font-semibold">{info.title}</h3>
            <h4 className="text-xl font-medium underline">{info.text}</h4>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl pb-6 font-bold">Learn More</h2>
        {links.map((link) => (
          <h3 key={link.href} className="text-2xl pb-1 underline">
            <NavLink
              to={link.href}
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
          </h3>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
