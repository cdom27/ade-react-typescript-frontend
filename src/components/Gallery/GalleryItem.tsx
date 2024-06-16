import { NavLink } from 'react-router-dom';

interface Props {
  img: string;
  address: string;
  link: string;
}

const GalleryItem = ({ img, address, link }: Props) => {
  return (
    <div className="flex flex-col py-8">
      <img
        src={img}
        alt={address}
        loading="lazy"
        decoding="async"
        role="img"
        aria-label={address}
      />
      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-semibold pt-2">{address}</h3>
        <NavLink
          to={link}
          className="font-bold text-lg bg-brand-accent px-8 py-3 mt-8 w-full text-center"
        >
          See More Details
        </NavLink>
      </div>
    </div>
  );
};

export default GalleryItem;
