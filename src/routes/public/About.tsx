import NavLinkButton from '../../components/Navigation/NavLinkButton';
import VideoHero from '../../components/VideoHero';
import PageLayout from '../../layouts/PageLayout';

const About = () => {
  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/about-hero-poster.webp`;
  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6">
          Homegrown in San Diego, California
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman text-center">
        <h2 className="text-4xl font-editorial_ul text-center">
          We Never Forget Our Roots
        </h2>

        <img
          src="https://db36hfj0unq27.cloudfront.net/regular-content/father-son.webp"
          alt="Beautiful home in San Diego made by Ade San Diego Home Builders"
          className="rounded-xl object-cover mt-8 "
        />
        <h3 className="text-3xl font-editorial_ul pt-20 text-left">
          Ade Started as a Father-Son Small Business
        </h3>
        <div className="pt-8 space-y-4 text-left">
          <p>
            Founded with a vision to transform the residential landscape of San
            Diego, our company prides itself on delivering homes and apartments
            that are not only aesthetically pleasing but also built to last.
          </p>
          <p>
            Our journey began with a small home renovations. Over the years, we
            have grown into a renowned name in the industry, recognized for our
            commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <NavLinkButton
            className="text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content"
            text="View Our Homes"
            bgClasses="bg-content"
            arrowClasses="stroke-content group-hover:stroke-primary"
            to="/homes"
          />
          <NavLinkButton
            className="text-content border-content hover:border-accent active:border-accent"
            text="View Our Services"
            bgClasses="bg-accent"
            arrowClasses="stroke-content"
            to="/services"
          />

          <NavLinkButton
            className="text-content border-content hover:border-accent active:border-accent"
            text="Contact Us"
            bgClasses="bg-accent"
            arrowClasses="stroke-content"
            to="/contact"
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
