import { NavLink } from 'react-router-dom';
import { HomeCardDTO } from '../../types/api';

interface Props extends HomeCardDTO {}

const HomeCard = ({
  id,
  mainImgUrl,
  cost,
  address,
  bedrooms,
  bathrooms,
  lotSize,
}: Props) => {
  return (
    <div className="flex flex-col bg-bg-secondary bg-opacity-40 p-6">
      <NavLink to={`/homes/${id}`} className="text-md font-semibold underline">
        <img
          src={mainImgUrl}
          alt={'Image for: ' + address}
          loading="eager"
          decoding="auto"
          role="img"
          aria-label={'Image for: ' + address}
        />
      </NavLink>

      <h2 className="text-2xl font-semibold pt-2">${cost.toLocaleString()}</h2>
      <h3 className="text-lg font-medium underline pt-2">{address}</h3>
      <ul className="text-md font-medium pt-2">
        <li>
          Beds: <span className="font-bold">{bedrooms.toLocaleString()}</span>
        </li>
        <li>
          Baths: <span className="font-bold">{bathrooms.toLocaleString()}</span>
        </li>
        <li>
          Property Size: <span className="font-bold">{lotSize}</span>
        </li>
      </ul>
      <NavLink
        to={`/homes/${id}`}
        className="font-medium text-bg-primary text-xl bg-brand-accent px-8 py-3 w-full text-center mt-8"
      >
        Get Details
      </NavLink>
    </div>
  );
};

export default HomeCard;
