import NavLinkButton from '../../components/Navigation/NavLinkButton';
import VideoHero from '../../components/VideoHero';
import PageLayout from '../../layouts/PageLayout';

const Services = () => {
  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/services-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/services-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/services-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/services-hero-poster.webp`;
  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl">
          Everything You Need, By Ade
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28">
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl">
          Three Decade Of Experience
        </h2>
        <p className="pt-8 sm:text-xl">
          We don&apos;t like convoluted plans. In order to assist in the
          daunting process that comes with residential construction, we have
          simplified our service offerings.
        </p>
        <h3 className="text-3xl font-editorial_ul pt-8 text-left sm:text-4xl">
          Our Services At Ade
        </h3>
        <div className="flex flex-col gap-y-8">
          <div>
            <h4 className="text-2xl font-editorial_ul pt-8 text-left sm:text-3xl">
              Custom Home Building
            </h4>
            <p className="pt-4 text-left sm:text-xl">
              When you&apos;re building a new home in San Diego, the first step
              is making the right choice for your new home construction. With
              more than 33 years of industry-leading experience, Ade is an
              accomplished team of architects, designers, and construction
              professionals you can trust during each stage of your new home
              plans. Your home is your retreat, the place where you want to feel
              safe, comfortable, and inspired.
            </p>
            <div className="flex flex-col gap-4 pt-8">
              <NavLinkButton
                className="text-content border-content hover:border-accent active:border-accent sm:text-xl"
                text="Learn More"
                bgClasses="bg-accent"
                arrowClasses="stroke-content"
                to="/approach"
              />

              <NavLinkButton
                className="text-content border-content hover:border-accent active:border-accent sm:text-xl"
                text="Contact Us"
                bgClasses="bg-accent"
                arrowClasses="stroke-content"
                to="/contact"
              />
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-editorial_ul pt-8 text-left sm:text-3xl">
              Dream Homes By Ade
            </h4>
            <p className="pt-4 text-left sm:text-xl">
              At Ade we offer a selection of already built, modern homes that
              are ready for sale. These homes are expertly designed and
              constructed to capture the unique charm and lifestyle of San Diego
              and Southern California. Each Dream Home in our selection
              showcases our commitment to quality and attention to detail,
              providing you with a seamless and hassle-free home-buying
              experience. Discover the perfect blend of modern living and
              timeless Southern Californian appeal with our ready-to-move-in
              homes.
            </p>
            <NavLinkButton
              className="text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content mt-8 sm:text-xl"
              text="Find My Dream Home"
              bgClasses="bg-content"
              arrowClasses="stroke-content group-hover:stroke-primary"
              to="/homes"
            />
          </div>

          <div>
            <h4 className="text-2xl font-editorial_ul pt-8 text-left sm:text-3xl">
              Home Additions
            </h4>
            <p className="pt-4 text-left sm:text-xl">
              Even if you love everything about the look and feel of your home,
              there can come a time when there just isn&apos;t enough space for
              your needs. Expecting another child, welcoming a parent into your
              home, expanding your work-from-home capabilities, or simply
              finding yourself short on storage or feeling cramped - many
              lifestyle changes can influence the need or desire for more space.
            </p>
            <div className="flex flex-col gap-4 pt-8">
              <NavLinkButton
                className="text-content border-content hover:border-accent active:border-accent sm:text-xl"
                text="Learn More"
                bgClasses="bg-accent"
                arrowClasses="stroke-content"
                to="/approach"
              />

              <NavLinkButton
                className="text-content border-content hover:border-accent active:border-accent sm:text-xl"
                text="Contact Us"
                bgClasses="bg-accent"
                arrowClasses="stroke-content"
                to="/contact"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
