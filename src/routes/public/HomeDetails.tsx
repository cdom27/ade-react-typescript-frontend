import { NavLink, useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import homes from '../../data/placeholder';

const HomeDetails = () => {
  //get the id from the url
  const { homeId } = useParams();
  const home = homes.find((h) => h.pid.toString() === homeId);

  //if no home is found show error
  if (!home)
    return (
      <PageLayout>
        <div className="pb-28 px-6">
          <NavLink to="/homes" className="text-md font-semibold underline">
            Back to all homes
          </NavLink>
          <p>Home not found</p>
        </div>
      </PageLayout>
    );

  //home is found, show the details
  return (
    <PageLayout>
      <NavLink to="/homes" className="text-md font-semibold underline pl-6">
        Back to all homes
      </NavLink>
      <div className="space-y-4 p-6 border-b-2 border-t-2 border-bg-secondary mt-12">
        <img
          src={home.photo_gallery[0]}
          alt={`Image of ${home.address.street}`}
          loading="eager"
          decoding="auto"
          role="img"
          aria-label={`Image of ${home.address.street}`}
        />
        <ul className="font-medium text-lg">
          <li>
            <h1 className="text-3xl font-semibold">
              ${home.cost.toLocaleString()}
            </h1>
          </li>
          <li>
            <h2 className="underline">
              {home.address.street +
                ', ' +
                home.address.city +
                ', ' +
                home.address.state +
                ' ' +
                home.address.zipcode}
            </h2>
          </li>
          <li className="pt-6">Beds: {home.bedrooms}</li>
          <li>Baths: {home.bathrooms}</li>
          <li>Livable area: {home.property_size.toLocaleString()} sqft</li>
          <li>Lot size: {home.lot_size}</li>
          <li>
            <button className="text-2xl bg-brand-accent px-8 py-3 w-full text-center mt-8 text-bg-primary">
              Request a Tour
            </button>
          </li>
        </ul>
      </div>
      <div className="space-y-12 p-6 border-b-2 border-bg-secondary">
        <h1 className="text-3xl font-semibold">Home Overview</h1>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What's special</h2>
          <ul className="flex flex-row flex-wrap gap-2">
            {home.whats_special.map((item) => (
              <li
                key={item}
                className="bg-bg-secondary bg-opacity-50 p-2 font-medium text-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Description of home</h2>
          <p className="font-medium text-lg">{home.overview}</p>
        </div>
      </div>
      <div className="space-y-12 p-6 border-b-2 border-bg-secondary">
        <h1 className="text-3xl font-semibold">Facts & Features</h1>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Interior Details</h2>
          {Object.entries(home.facts.interior).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-xl font-medium pb-2 capitalize">
                {key.replace('_', ' ')}
              </h3>
              <ul className="list-disc px-6">
                {(value as string[]).map((item) => (
                  <li key={item} className="font-medium text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Property Details</h2>
          {Object.entries(home.facts.property).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-xl font-medium pb-2 capitalize">
                {key.replace('_', ' ')}
              </h3>
              <ul className="list-disc px-6">
                {(value as string[]).map((item) => (
                  <li key={item} className="font-medium text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Home Construction</h2>
          {Object.entries(home.facts.construction).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-xl font-medium pb-2 capitalize">
                {key.replace('_', ' ')}
              </h3>
              <ul className="list-disc px-6">
                {(value as string[]).map((item) => (
                  <li key={item} className="font-medium text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Public Utilities</h2>
          {Object.entries(home.facts.utils).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-xl font-medium pb-2 capitalize">
                {key.replace('_', ' ')}
              </h3>
              <ul className="list-disc px-6">
                {(value as string[]).map((item) => (
                  <li key={item} className="font-medium text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Neighborhood</h2>
          {Object.entries(home.facts.community).map(([key, value]) => (
            <div key={key}>
              <h3 className="text-xl font-medium pb-2 capitalize">
                {key.replace('_', ' ')}
              </h3>
              <ul className="list-disc px-6">
                {(value as string[]).map((item) => (
                  <li key={item} className="font-medium text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-12 p-6 pb-0">
        <h1 className="text-3xl font-semibold">Photo Gallery</h1>
        <div className="gap-2 grid grid-cols-1">
          {home.photo_gallery.map((photo) => (
            <img
              key={photo}
              src={photo}
              alt={`Image of ${home.address.street}`}
              loading="lazy"
              decoding="async"
              role="img"
              aria-label={`Image of ${home.address.street}`}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomeDetails;
