import { NavLink } from 'react-router-dom';

interface Props {
  imgSrc: string;
  link: string;
  cost: number;
  address: string;
  bedCount: number;
  bathCount: number;
  squareFeet: number;
}

const HomeCard = ({
  imgSrc,
  link,
  cost,
  address,
  bedCount,
  bathCount,
  squareFeet,
}: Props) => {
  return (
    <div className="flex flex-col bg-bg-secondary bg-opacity-40 p-6">
      <NavLink to={link} className="text-md font-semibold underline">
        <img
          src={imgSrc}
          alt={'Image for: ' + address}
          loading="lazy"
          decoding="async"
          role="img"
          aria-label={'Image for: ' + address}
        />
      </NavLink>

      <h2 className="text-2xl font-semibold pt-2">${cost.toLocaleString()}</h2>
      <h3 className="text-lg font-medium underline pt-2">{address}</h3>
      <ul className="text-md font-medium pt-2">
        <li>
          Beds: <span className="font-bold">{bedCount.toLocaleString()}</span>
        </li>
        <li>
          Baths: <span className="font-bold">{bathCount.toLocaleString()}</span>
        </li>
        <li>
          Sq. Feet:{' '}
          <span className="font-bold">{squareFeet.toLocaleString()}</span>
        </li>
      </ul>
      <NavLink
        to={link}
        className="font-medium text-bg-primary text-xl bg-brand-accent px-8 py-3 w-full text-center mt-8"
      >
        Get Details
      </NavLink>
    </div>
  );
};

export default HomeCard;
