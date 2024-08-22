import PageLayout from '../../layouts/PageLayout';
import VideoHero from '../../components/VideoHero';
import NavLinkButton from '../../components/Navigation/NavLinkButton';
import { Accordion, AccordionItem } from '../../components/Accordion';
import { Arrow } from '../../components/Icons';
import { NavLink } from 'react-router-dom';
import ContactForm from '../../components/Forms/ContactForm';

const Landing = () => {
  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/landing-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/landing-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/landing-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/landing-hero-poster.webp`;

  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl 2xl:text-6xl">
          Capture The{' '}
          <span className="font-editorial_ul_italic">Essence of San Diego</span>{' '}
          In Your Home
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28 lg:py-36">
        <div className="lg:flex lg:justify-between">
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-1.webp"
            alt="Beautiful home in San Diego made by Ade San Diego Home Builders"
            className="hidden rounded-xl h-[170px] object-cover mt-8 lg:h-[250px] lg:block lg:mt-36 lg:w-1/4"
          />
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl 2xl:text-6xl">
              Industry Leading Experience
            </h2>
            <ul className="pt-8 sm:text-xl">
              <li>Eliminate stress</li>
              <li>Minimize risk</li>
              <li className="font-haas_md">No "One-size-fits-all"</li>
            </ul>
            <div className="pt-4 space-y-4 sm:text-xl">
              <p>
                We aim to capture the charm of San Diego in your home and create
                a place where you feel safe, comfortable, and inspired.
              </p>
              <p>
                Our visionary approach allows us to go above and beyond to
                ensure that each client and project receives personalized
                attention, tailored solutions, and best-in-class service.
              </p>
            </div>
          </div>
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-3.webp"
            alt="Scenic view of San Diego. Ade San Diego Home Builders"
            className="hidden rounded-xl h-[170px] object-cover mt-8 lg:h-[250px] lg:block lg:mt-56 lg:w-1/4"
          />
        </div>

        <img
          src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-2.webp"
          alt="Beautiful community in San Diego. Ade San Diego Home Builders"
          className="hidden mx-auto rounded-lg max-w-[200px] mt-8 sm:max-w-[250px] lg:max-w-[400px] lg:block lg:mt-14"
        />

        <div className="pt-8 gap-x-8 w-full md:mx-auto lg:w-4/5 lg:hidden">
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-1.webp"
            alt="Beautiful home in San Diego made by Ade San Diego Home Builders"
            className="col-span-1 rounded-xl h-[170px] object-cover mt-8 sm:h-[200px] lg:h-[250px]"
          />
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-3.webp"
            alt="Scenic view of San Diego. Ade San Diego Home Builders"
            className="col-span-1 rounded-xl h-[170px] object-cover object-left-bottom sm:h-[200px] lg:h-[250px]"
          />
          <img
            src="https://db36hfj0unq27.cloudfront.net/regular-content/exp-2.webp"
            alt="Beautiful community in San Diego. Ade San Diego Home Builders"
            className="col-span-2 mx-auto rounded-lg max-w-[200px] mt-8 sm:max-w-[250px] lg:max-w-[300px]"
          />
        </div>
      </section>

      <section className="bg-leafs bg-cover font-haas_roman bg-center h-full text-primary px-6 py-20 md:px-20 lg:px-28 lg:py-36 lg:grid lg:grid-cols-2 lg:gap-x-20">
        <div>
          <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl lg:text-left 2xl:text-6xl">
            Embody The{' '}
            <span className="font-editorial_ul_italic text-accent">
              Vibrant Spirit of San Diego
            </span>
          </h2>
          <div className="pt-8 space-y-4 sm:text-xl">
            <p>
              At Ade, we understand that you&apos;re building home than a house,
              you&apos;re building a home. It&apos;s more than just a structure,
              it&apos;s a place where families grow and memories are made.
            </p>
            <p>
              Our team has an eye for sophistication and commitment to
              uncompromising quality. We believe that the difference is in the
              details and no vision is impossible to bring to life.
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4 lg:pt-8 xl:flex-row">
            <NavLinkButton
              className="text-primary hover:text-content border-primary hover:border-accent active:border-accent hover:bg-accent active:bg-accent xl:self-start xl:space-x-4"
              text="View Our Services"
              bgClasses="bg-accent"
              arrowClasses="stroke-primary group-hover:stroke-content"
              to="/services"
            />
            <NavLinkButton
              className="text-primary hover:text-content border-primary hover:border-accent active:border-accent hover:bg-accent active:bg-accent xl:self-start xl:space-x-4"
              text="View Our Homes"
              bgClasses="bg-accent"
              arrowClasses="stroke-primary group-hover:stroke-content"
              to="/homes"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-editorial_ul pt-20 sm:text-4xl lg:pt-0">
            Recent Built Homes In San Diego
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-8 pt-8">
            <img
              src="https://db36hfj0unq27.cloudfront.net/regular-content/rb-1.webp"
              alt="Ocean front home in San Diego. Ade San Diego Home Builders"
              className="col-span-1 rounded-lg max-h-[200px] w-full object-cover sm:h-[200px] lg:object-left"
            />
            <img
              src="https://db36hfj0unq27.cloudfront.net/regular-content/rb-2.webp"
              alt="Modern home in San Diego. Ade San Diego Home Builders"
              className="col-span-1 rounded-lg max-h-[200px] w-full object-cover sm:h-[200px]"
            />
            <img
              src="https://db36hfj0unq27.cloudfront.net/regular-content/rb-3.webp"
              alt="Nature home in San Diego. Ade San Diego Home Builders"
              className="col-span-1 rounded-lg max-h-[200px] w-full object-cover object-top sm:h-[200px]"
            />
            <img
              src="https://db36hfj0unq27.cloudfront.net/regular-content/rb-4.webp"
              alt="Modern home in San Diego. Ade San Diego Home Builders"
              className="col-span-1 rounded-lg max-h-[200px] w-full object-cover sm:h-[200px] lg:object-left"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 font-haas_roman md:px-20 lg:px-28 lg:py-36">
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl lg:w-1/2 lg:mx-auto 2xl:text-6xl">
          Let's Chat About Your{' '}
          <span className="font-editorial_ul_italic">Dream Home</span>
        </h2>
        <p className="text-center pt-8 sm:text-xl lg:w-1/2 lg:mx-auto">
          Give us call, drop by our offices, or send us a message, whatever
          works best for you.
        </p>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-20">
          <div>
            <img
              src="https://db36hfj0unq27.cloudfront.net/regular-content/office-1080.webp"
              alt="Ade office building in San Diego"
              className="mt-8 rounded-lg object-cover pb-4 sm:w-1/2 sm:mx-auto lg:mx-0 lg:w-full"
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
                Unscheduled visits or general inquiries are taken from 10AM to
                1PM.
              </p>
              <p>Total office hours are from 7AM to 6PM.</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-editorial_ul pt-20 sm:text-4xl lg:pt-8">
              Unsure where to start? Send us message we can follow up on.
            </h3>
            <div className="flex flex-col lg:flex-row lg:space-x-6 lg:pt-7">
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
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-accent space-y-8 md:px-20 lg:px-28 lg:py-36 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:space-y-0">
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl lg:text-left 2xl:text-6xl">
          Answers To Some{' '}
          <span className="font-editorial_ul_italic">Popular Questions</span>
        </h2>
        <div className="space-y-8">
          <Accordion>
            <AccordionItem title="Is Ade a real company?">
              Well, no. Although the effort put into building this site is very
              real, Ade is not a real company. As a software engineer I love
              trying out new tools and technology so I made up Ade as a
              fictional company with a story in order to use it&apos;s identity
              in this website project. If you&apos;re interested in learning
              more about how this website was made, check out my{' '}
              <a
                href="https://cidominguez.com/work"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-haas_md"
              >
                portfolio.
              </a>
              .
            </AccordionItem>
            <AccordionItem title="So what exactly does Ade do?">
              Ade is a home builder company that specializes in creating
              beautiful homes in San Diego, CA. We offer a wide range of
              services, from design and construction to home renovation and
              maintenance. Our goal is to provide our clients with a
              personalized experience that meets their unique needs and
              preferences.
            </AccordionItem>
            <AccordionItem title="Who is Ade for?">
              Ade is for everyone! Whether you're looking for a beautiful home
              in San Diego, or you&apos;re interested in starting from the
              ground up, we have the expertise and resources to help you achieve
              your dream home.
            </AccordionItem>
            <AccordionItem title="I'm interested in building a custom home. How does it work?">
              Our custom home building process involves several stages. Learn
              more about{' '}
              <NavLink to="/approach" className="underline font-haas_md">
                our approach here
              </NavLink>
              .
            </AccordionItem>
          </Accordion>
          <a
            href="https://cidominguez.com/work"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out text-content hover:text-accent border-content hover:border-content active:border-content hover:bg-content active:bg-content"
          >
            <span className="relative z-10 sm:text-xl">How Ade Was Made</span>
            <Arrow className="size-7 relative z-10 transition-colors duration-300 ease-in-out stroke-content group-hover:stroke-accent rotate-[-45deg] lg:size-6" />
            <div className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-content" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default Landing;
