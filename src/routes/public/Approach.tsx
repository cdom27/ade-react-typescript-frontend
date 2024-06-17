import PageLayout from '../../layouts/PageLayout';
import HeroImg from '../../assets/images/p6.jpg';

const Approach = () => {
  return (
    <PageLayout>
      <div className="space-y-10 pb-28 px-6">
        <h1 className="text-3xl font-bold">Our Approach</h1>
        <img
          src={HeroImg}
          alt="Hilltop view of San Diego"
          loading="eager"
          decoding="auto"
          role="img"
          aria-label="Hilltop view of San Diego"
        />
      </div>
      <div className="px-6 border-t-2 border-bg-secondary py-8 flex flex-col">
        <div className="flex flex-col space-y-20">
          <div>
            <h3 className="text-xl font-bold">Custom Home Building</h3>
            <p className="font-medium text-lg pt-2">
              We understand that building a home is a deeply personal journey.
              Our custom home building process is designed to be collaborative
              and client-focused, ensuring that every detail aligns with your
              vision. From the initial consultation to the final walkthrough,
              our team of expert builders and designers work closely with you to
              create a home that is uniquely yours.
              <br />
              <br />
              We start with a comprehensive planning phase where we discuss your
              preferences, lifestyle, and budget. Our architects and designers
              then craft detailed plans that incorporate your ideas while
              optimizing for functionality and aesthetics.
              <br />
              <br />
              Throughout the construction phase, we maintain open communication,
              providing regular updates and addressing any concerns promptly.
              The result is a custom-built home that reflects your personality
              and meets your exact specifications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Apartment Lifestyle</h3>
            <p className="font-medium text-lg pt-2">
              Ade Construction employs advanced construction techniques to
              design and build modern apartments that cater to diverse
              lifestyles. Our approach integrates innovative building methods
              such as modular construction, which allows for faster build times
              and reduced waste. We utilize high-quality materials and
              state-of-the-art technology to ensure durability and energy
              efficiency.
              <br />
              <br />
              Each apartment is meticulously designed to optimize space, provide
              natural light, and incorporate modern amenities. Our focus on
              precision and quality ensures that every unit is not only visually
              appealing but also built to the highest standards of safety and
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Approach;
