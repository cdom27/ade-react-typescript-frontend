// import { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

// interface Props {
//     children: ReactNode;
//     className?: string;
// }

interface Props {
  header: string;
  content: string;
  link: string;
  linkText: string;
  img: string;
}

const InfoCard = ({ header, content, link, linkText, img }: Props) => {
  return (
    <div className="border-b-2 border-t-2 border-bg-secondary py-6 flex flex-col">
      <img
        src={img}
        alt={header}
        className="px-6 pb-6"
        loading="lazy"
        decoding="async"
        role="img"
        aria-label={header}
      />
      <div className="border-t-2 border-bg-secondary px-6 pt-6 space-y-24">
        <h3 className="text-xl font-bold">{header}</h3>
        <div className="space-y-2 flex flex-col">
          <p className="font-medium text-md">{content}</p>
          <NavLink
            to={link}
            className="font-semibold text-md opacity-75 underline hover:text-brand-accent active:text-brand-accent self-start"
          >
            {linkText}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
