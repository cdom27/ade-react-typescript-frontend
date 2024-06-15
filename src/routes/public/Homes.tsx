import { useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import TabList from '../../components/PageTabs/TabList';
import TabItem from '../../components/PageTabs/TabItem';
import homes from '../../data/placeholder';
import HomeCard from '../../components/HomeCard';
import G1 from '../../assets/images/g1.jpg';

const Homes = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const filteredHomes = () => {
    if (selectedTab === 1) {
      return homes.filter((home) => home.home_type === 'House');
    } else if (selectedTab === 2) {
      return homes.filter((home) => home.home_type === 'Apartment');
    } else {
      return homes;
    }
  };

  return (
    <PageLayout>
      <TabList>
        <TabItem isActive={selectedTab === 0} onClick={() => setSelectedTab(0)}>
          All Homes<sup className="text-lg pl-1">{homes.length}</sup>
        </TabItem>
        <TabItem isActive={selectedTab === 1} onClick={() => setSelectedTab(1)}>
          Houses
          <sup className="text-lg pl-1">
            {homes.filter((home) => home.home_type === 'House').length}
          </sup>
        </TabItem>
        <TabItem isActive={selectedTab === 2} onClick={() => setSelectedTab(2)}>
          Apartments
          <sup className="text-lg pl-1">
            {homes.filter((home) => home.home_type === 'Apartment').length}
          </sup>
        </TabItem>
      </TabList>
      <div className="space-y-4 pb-28 px-6 pt-6">
        {filteredHomes().map((h) => (
          <HomeCard
            key={h.pid}
            imgSrc={G1}
            link={`/homes/${h.pid}`}
            cost={h.cost}
            address={
              h.address.street +
              ', ' +
              h.address.city +
              ', ' +
              h.address.state +
              ' ' +
              h.address.zipcode
            }
            bedCount={h.bedrooms}
            bathCount={h.bathrooms}
            squareFeet={h.property_size}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Homes;
