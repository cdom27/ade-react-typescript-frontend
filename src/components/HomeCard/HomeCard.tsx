import { NavLink } from 'react-router-dom';
import { HomeCardDTO } from '../../types/api';
import NavButton from '../Navigation/NavButton';

interface Props extends HomeCardDTO {}

const HomeCard = ({
  id,
  mainImgUrl,
  cost,
  address,
  bedrooms,
  bathrooms,
  lotSize,
  livableAreaSize,
  yearBuilt,
  overview,
}: Props) => {
  return (
    <div className="flex flex-col flex-grow">
      <NavLink to={`/homes/${id}`}>
        <img
          src={mainImgUrl}
          alt={'Image for: ' + address}
          loading="eager"
          decoding="auto"
          role="img"
          aria-label={'Image for: ' + address}
          className="rounded-xl object-cover xl:h-[366px] 2xl:w-full"
        />
      </NavLink>

      <NavLink to={`/homes/${id}`}>
        <h4 className="text-2xl pt-2 font-editorial_ul underline sm:text-3xl">
          {address}
        </h4>
      </NavLink>

      <p className="mt-4 text-md sm:text-xl">{overview}</p>

      <ul className="grid grid-cols-2 font-haas_md text-lg gap-x-3 mt-4">
        <li>${cost.toLocaleString()}</li>
        <li>Built {yearBuilt}</li>
        <li>{livableAreaSize} home</li>
        <li>{bedrooms} Bed</li>
        <li>{lotSize} lot</li>
        <li>{bathrooms} Bath</li>
      </ul>

      <div className="mt-8 sm:mt-auto">
        <NavButton to={`/homes/${id}`} variant="accent">
          View Details
        </NavButton>
      </div>
    </div>
  );
};

export default HomeCard;
