import ContactForm from '../../components/Forms/ContactForm';
import VideoHero from '../../components/VideoHero';
import PageLayout from '../../layouts/PageLayout';

const Contact = () => {
  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/contact-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/contact-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/contact-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/contact-hero-poster.webp`;

  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl">
          Peace In{' '}
          <span className="font-editorial_ul_italic">Your Home, From Us</span>{' '}
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman md:px-20">
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl">
          Let's Chat About Your{' '}
          <span className="font-editorial_ul_italic">Dream Home</span>
        </h2>
        <p className="text-center pt-8 sm:text-xl">
          Give us call, drop by our offices, or send us a message, whatever
          works best for you.
        </p>
        <img
          src="https://db36hfj0unq27.cloudfront.net/regular-content/office-1080.webp"
          alt="Ade office building in San Diego"
          className="mt-8 rounded-lg object-cover pb-4 sm:w-1/2 sm:mx-auto"
        />
        <a
          href="https://www.google.com/maps/place/Genesee+Ave,+San+Diego,+CA/@32.8419881,-117.2001607,17z/data=!3m1!4b1!4m6!3m5!1s0x80dc00f2a04c94e1:0x573bd77f800801bf!8m2!3d32.8419881!4d-117.1975858!16s%2Fg%2F1tj2nrpb?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline sm:text-xl"
        >
          80 Genesee Ave, San Diego, CA 90912
        </a>
        <div className="pt-8 space-y-4 font-haas_md sm:text-xl">
          <p>
            Unscheduled visits or general inquiries are taken starting from 10AM
            to 1PM.
          </p>
          <p>Total office hours are from 7AM to 6PM.</p>
        </div>

        <h3 className="text-3xl font-editorial_ul pt-20 sm:text-4xl">
          Unsure where to start? Send us message we can follow up on.
        </h3>
        <div className="flex flex-col">
          <a
            href="tel:+16190969640"
            className="underline pt-2 sm:text-xl self-start"
          >
            +1 (619) 096-9640
          </a>
          <a
            href="mailto:hey@adehomes.com"
            className="underline pt-2 sm:text-xl self-start"
          >
            hey@adehomes.com
          </a>
        </div>
        <ContactForm />
      </section>
    </PageLayout>
  );
};

export default Contact;
