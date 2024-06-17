import PageLayout from '../../layouts/PageLayout';
import { NavLink } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import HeroImg from '../../assets/images/p1.jpg';
import InfoImg1 from '../../assets/images/p2.jpg';
import Img from '../../assets/images/p3.jpg';
import InfoImg2 from '../../assets/images/p4.jpg';
import InfoCard from '../../components/InfoCard';

const Landing = () => {
  return (
    <PageLayout>
      <div className="space-y-14 pb-28 px-6">
        <img
          src={HeroImg}
          alt="3 story modern home"
          loading="eager"
          decoding="auto"
          role="img"
          aria-label="3 story modern home"
        />
        <h2 className="text-2xl font-semibold">
          We take a visionary approach allows us to go above and beyond to
          ensure that each client and project receives personalized attention,
          tailored solutions, and best-in-class service.
        </h2>
      </div>
      <InfoCard
        header="Powered by Partnerships"
        content="Our team of driven professionals is fueled by a relentless passion for what we do. We operate with honesty, transparency, and trust, building long-lasting relationships that transcend business."
        link="/vision"
        linkText="Our Vision"
        img={InfoImg1}
      />
      <div className="px-6 py-28">
        <img
          src={Img}
          alt="Brisk. A seaside community with a relaxed pace of life. Building in La Jolla starts in 2025."
          loading="lazy"
          decoding="async"
          role="img"
          aria-label="Brisk. A seaside community with a relaxed pace of life. Building in La Jolla starts in 2025."
        />
        <p className="font-medium text-md">
          <span className="font-bold">Brisk</span>. A seaside community with a
          relaxed pace of life. Building in La Jolla starts in 2025.
        </p>
      </div>
      <InfoCard
        header="Driven by Insights"
        content="We thrive on the excitement of unravelling the intricacies of the market, armed with intelligent insights and clever strategies."
        link="/approach"
        linkText="Our Approach"
        img={InfoImg2}
      />
      <div className="px-6 pt-28 pb-8 space-y-4 flex flex-col">
        <h2 className="text-2xl font-semibold">Home Spotlight</h2>
        <Gallery />
        <NavLink to="/homes" className="font-bold text-lg underline">
          View All Homes
        </NavLink>
      </div>
    </PageLayout>
  );
};

export default Landing;
