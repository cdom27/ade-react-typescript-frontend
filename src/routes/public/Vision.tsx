import PageLayout from '../../layouts/PageLayout';
import HeroImg from '../../assets/images/p5.jpg';

const Vision = () => {
  return (
    <PageLayout>
      <div className="space-y-10 pb-28 px-6">
        <h2 className="text-2xl font-semibold">
          Powered by Partnerships - Our Vision
        </h2>
        <img
          src={HeroImg}
          alt="Hilltop view of San Diego"
          loading="eager"
          decoding="async"
          role="img"
          aria-label="Hilltop view of San Diego"
        />
      </div>
      <div className="px-6 border-t-2 border-bg-secondary py-8 flex flex-col">
        <h2 className="text-2xl font-semibold">About Ade</h2>
        <div className="flex flex-col space-y-6 pt-6">
          <div className="flex flex-col">
            <span className="text-5xl font-bold">20</span>
            <span className="font-semibold text-lg">Years of Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold">300+</span>
            <span className="font-semibold text-lg">Homes Built</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold">500+</span>
            <span className="font-semibold text-lg">Units Built</span>
          </div>
        </div>
        <div className="flex flex-col space-y-6 pt-12">
          <p className="font-bold text-xl">
            Since its founding in 2004, Ade has embodied the vibrant spirit of
            San Diego, California. Our all-inclusive process ensures that every
            property we build perfectly captures the essence of charm in the
            city we call home.
          </p>
          <p className="font-medium text-lg">
            It is our commitment to our clients that truly defines us. Our
            dedication to achieving exceptional outcomes drives us to go above
            and beyond to ensure that each client and project receives
            personalized attention, tailored solutions, and best-in-class
            service.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Vision;
