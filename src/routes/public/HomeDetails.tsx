import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import api from '../../api/axios';
import { HomeDetailsDTO } from '../../types/api';
import VisitRequestModalForm from '../../components/Forms/VisitRequestModalForm';
import { Arrow } from '../../components/Icons';
import { Accordion, AccordionItem } from '../../components/Accordion';

const HomeDetails = () => {
  const { homeId } = useParams<{ homeId: string }>();
  const [home, setHome] = useState<HomeDetailsDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHomeDetails = async () => {
      try {
        const response = await api.get<HomeDetailsDTO>(
          `/api/public/homes/${homeId}`
        );
        setHome(response.data);
      } catch (err) {
        setError('Failed to fetch home details');
      } finally {
        setLoading(false);
      }
    };

    fetchHomeDetails();
  }, [homeId]);

  if (error) return <p>{error}</p>;

  //Loading state
  if (loading)
    return (
      <PageLayout>
        <section className="relative">
          <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl">
            Loading Home Details
          </h1>
          <div className="h-[400px] bg-content" />
        </section>
      </PageLayout>
    );

  if (home)
    return (
      <PageLayout>
        <section className="relative">
          <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-primary mt-20 px-6 sm:text-5xl">
            {home.address}
          </h1>
          <img
            src={home.mainImgUrl}
            alt={`Image of ${home.address}`}
            loading="eager"
            decoding="auto"
            role="img"
            aria-label={`Image of ${home.address}`}
            className="overflow-hidden h-[400px] object-cover sm:h-[550px] w-full"
          />
        </section>

        <section className="px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28 lg:py-36">
          <div className="flex flex-col space-y-8 lg:text-left">
            <h1 className="text-4xl font-editorial_ul text-content sm:text-5xl">
              {home.address}
            </h1>
            <p className="sm:text-xl lg:w-2/3">{home.overview}</p>
          </div>

          <div className="lg:flex lg:justify-between">
            <div className="pt-14 lg:w-1/2">
              <h2 className="text-4xl font-editorial_ul text-left">
                What&apos;s Special?
              </h2>
              <ul className="flex flex-col gap-y-3 pt-6 text-sm sm:text-lg px-6 lg:px-0 lg:flex-wrap xl:flex-row">
                {home.whatsSpecial.map((item) => (
                  <li
                    key={item}
                    className="font-fraktion_reg bg-content bg-opacity-20 rounded-full py-3 px-6 sm:w-3/4 sm:mx-auto lg:text-sm lg:py-2 lg:mx-0 lg:w-auto lg:self-start xl:mr-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-14">
              <h2 className="text-4xl font-editorial_ul text-left">
                Quick Details
              </h2>
              <ul className="grid grid-cols-2 font-haas_md text-lg gap-x-3 mt-6 text-left sm:text-2xl">
                <li>${home.cost.toLocaleString()}</li>
                <li>Built {home.yearBuilt}</li>
                <li>{home.livableAreaSize} home</li>
                <li>{home.bedrooms} Bed</li>
                <li>{home.lotSize} lot</li>
                <li>{home.bathrooms} Bath</li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content mt-8 w-full sm:text-xl"
              >
                <span className="relative z-10">Schedule A Visit</span>
                <Arrow className="size-5 relative z-10 transition-colors duration-300 ease-in-out stroke-content group-hover:stroke-primary rotate-[-45deg]" />
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-content" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36">
          <h2 className="text-4xl font-editorial_ul text-left pb-2">
            Facts And Features
          </h2>
          <Accordion>
            <AccordionItem title="Home Interior">
              {Object.entries(home.facts.interior).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl">
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className="list-disc px-6 text-md mb-4">
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title="Property Details">
              {Object.entries(home.facts.property).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl">
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className="list-disc px-6 text-md mb-4">
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title="Home Construction">
              {Object.entries(home.facts.construction).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl">
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className="list-disc px-6 text-md mb-4">
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title="Utilities">
              {Object.entries(home.facts.utils).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl">
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className="list-disc px-6 text-md mb-4">
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title="Neighborhood">
              {Object.entries(home.facts.community).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl">
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className="list-disc px-6 text-md mb-4">
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        </section>

        <section className="px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36">
          <h2 className="text-4xl font-editorial_ul text-left pb-2">
            Home Gallery
          </h2>
          <div className="gap-4 grid grid-cols-1 mt-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {home.photoGallery.map((photo) => (
              <img
                key={photo}
                src={photo}
                alt={`Image of ${home.address}`}
                loading="lazy"
                decoding="async"
                role="img"
                aria-label={`Image of ${home.address}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </section>

        <VisitRequestModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </PageLayout>
    );
};

export default HomeDetails;
