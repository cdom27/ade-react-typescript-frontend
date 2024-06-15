import PageLayout from '../../layouts/PageLayout';
import { NavLink } from 'react-router-dom';
import HeroImg from '../../assets/images/p1.jpg';
import InfoImg1 from '../../assets/images/p2.jpg';
import Img from '../../assets/images/p3.jpg';
import InfoImg2 from '../../assets/images/p4.jpg';
import InfoCard from '../../components/InfoCard';
import GImg1 from '../../assets/images/g1.jpg';
import GImg2 from '../../assets/images/g2.jpg';
import GImg3 from '../../assets/images/g3.jpg';
import GImg4 from '../../assets/images/g4.jpg';
import GImg5 from '../../assets/images/g5.jpg';
import GImg6 from '../../assets/images/g6.jpg';
import GImg7 from '../../assets/images/g7.jpg';
import GalleryImgCard from '../../components/GalleryImgCard';

const Landing = () => {
  return (
    <PageLayout>
      <div className="space-y-14 pb-28 px-6">
        <img
          src={HeroImg}
          alt="3 story modern home"
          loading="lazy"
          decoding="async"
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
        <h2 className="text-2xl font-semibold">Newest homes</h2>
        <section className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <GalleryImgCard
                img={GImg1}
                title="767 Claiborne Sq, La Jolla, CA 92037"
                link="/homes"
              />
              <GalleryImgCard
                img={GImg2}
                title="2585 Calle Del Oro, La Jolla, CA 92037"
                link="/homes"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <GalleryImgCard
                  img={GImg3}
                  title="3699 Mount Alvarez Ave, San Diego, CA 92111"
                  link="/homes"
                />
                <GalleryImgCard
                  img={GImg4}
                  title="2175 Calle Serena, San Diego, CA 92132"
                  link="/homes"
                />
              </div>
              <GalleryImgCard
                img={GImg5}
                title="13606 Bodie Ct, San Diego, CA 92129"
                link="/homes"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <GalleryImgCard
              img={GImg6}
              title="5697 Yerba Anita Dr, San Diego, CA 92115"
              link="/homes"
            />
            <GalleryImgCard
              img={GImg7}
              title="3329 Orange Ave, San Diego, CA 92104"
              link="/homes"
            />
          </div>
        </section>
        <NavLink to="/homes" className="font-bold text-lg underline">
          View All homes
        </NavLink>
      </div>
    </PageLayout>
  );
};

export default Landing;
