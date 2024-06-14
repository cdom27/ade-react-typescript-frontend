import PageLayout from '../../layouts/PageLayout';
import HeroImg from '../../assets/images/p5.jpg';

const Vision = () => {
  return (
    <PageLayout>
      <div className="space-y-10 pb-28 px-6">
        <h1 className="text-2xl font-semibold">Our Vision</h1>
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
        <h2 className="text-2xl font-semibold">History and Background</h2>
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
        <div className="flex flex-col space-y-20 pt-12">
          <div>
            <h3 className="text-xl font-bold">San Diegan Lead</h3>
            <p className="font-medium text-lg pt-2">
              Ade has been a cornerstone in San Diego's construction industry
              for over two decades. Founded with a vision to transform the
              residential landscape of San Diego, our company prides itself on
              delivering homes and apartments that are not only aesthetically
              pleasing but also built to last.
              <br />
              <br />
              Our journey began with a small team of dedicated professionals who
              shared a common passion for excellence in home building. Over the
              years, we have grown into a renowned name in the industry,
              recognized for our commitment to quality, innovation, and customer
              satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Core Values and Mission</h3>
            <p className="font-medium text-lg pt-2">
              Our core values revolve around integrity, innovation, and
              sustainability. We believe in building homes that reflect our
              dedication to quality and our respect for the environment. Our
              mission is to create living spaces that not only meet but exceed
              the expectations of our clients.
              <br />
              <br />
              We strive to incorporate the latest building technologies and
              sustainable practices in all our projects, ensuring that each home
              and apartment we build is a testament to our commitment to
              excellence and environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Vision;
