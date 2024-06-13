import { NavLink } from 'react-router-dom';

interface Props {
  img: string;
  title: string;
  link: string;
}

const GalleryImgCard = ({ img, title, link }: Props) => {
  return (
    <div className="flex flex-col py-6">
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        role="img"
        aria-label={title}
      />
      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-semibold pt-2">{title}</h3>
        <NavLink
          to={link}
          className="font-bold text-lg bg-brand-accent px-8 py-1.5 self-end"
        >
          Get Details
        </NavLink>
      </div>
    </div>
  );
};

export default GalleryImgCard;
