import NavButton from '../../components/Navigation/NavButton';
import VideoHero from '../../components/VideoHero';
import PageLayout from '../../layouts/PageLayout';

const About = () => {
  const videoSources = {
    tablet: {
      webm: null, // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/about-hero-720.mp4`,
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/about-hero-poster.webp`;
  return (
    <PageLayout>
      <section className='relative'>
        <h1 className='absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl 2xl:text-6xl'>
          Homegrown in San Diego, California
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className='px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28 lg:py-36 4xl:px-72'>
        <h2 className='text-4xl font-editorial_ul text-center sm:text-5xl lg:w-1/2 lg:mx-auto 2xl:text-6xl'>
          We Never Forget Our Roots
        </h2>

        <div className='lg:grid lg:grid-cols-2 lg:gap-x-20 lg:mt-20 xl:w-3/4 xl:mx-auto'>
          <img
            src='https://db36hfj0unq27.cloudfront.net/regular-content/father-son.webp'
            alt='The owner of Ade San Diego Home Builders, with his young son. They started a concrete repair business before Ade was founded.'
            className='rounded-xl object-cover mt-8 sm:w-1/2 sm:mx-auto lg:mx-0 lg:w-full lg:mt-0'
          />
          <div>
            <h3 className='text-3xl font-editorial_ul pt-20 text-left sm:text-4xl lg:pt-0'>
              Ade Started as a Father-Son Small Business
            </h3>
            <div className='pt-8 space-y-4 text-left sm:text-xl'>
              <p>
                Founded with a vision to transform the residential landscape of
                San Diego, our company prides itself on delivering homes and
                apartments that are not only aesthetically pleasing but also
                built to last.
              </p>
              <p>
                Our journey began with a small home renovations. Over the years,
                we have grown into a renowned name in the industry, recognized
                for our commitment to quality, innovation, and customer
                satisfaction.
              </p>
            </div>
            <div className='flex flex-col gap-4 pt-8'>
              <NavButton to='/homes' variant='accent'>
                View Our Homes
              </NavButton>

              <NavButton to='/services' variant='secondary'>
                View Our Services
              </NavButton>

              <NavButton to='/contact' variant='secondary'>
                Contact Us
              </NavButton>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
