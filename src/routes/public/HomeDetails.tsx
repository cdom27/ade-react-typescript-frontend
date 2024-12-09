import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';
import api from '../../api/axios';
import { HomeDetailsDTO } from '../../types/api';
import VisitRequestModalForm from '../../components/Forms/VisitRequestModalForm';
import { Arrow } from '../../components/Icons';
import { Accordion, AccordionItem } from '../../components/Accordion';
import Lightbox from 'yet-another-react-lightbox';
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const HomeDetailsSkeleton = () => {
  return (
    <PageLayout>
      <section className='px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28 lg:py-36 4xl:px-72 animate-pulse'>
        <div className='flex flex-col justify-between space-y-8 lg:text-left pt-12 2xl:flex-row 2xl:gap-10 2xl:space-y-0'>
          <div className='overflow-hidden h-[350px] sm:h-[450px] bg-gray-300 rounded-xl block 2xl:hidden' />
          <div className='flex flex-col xl:w-1/2 space-y-6'>
            <div className='h-[48px] w-3/4 bg-gray-300 rounded-xl' />
            <div className='h-[24px] w-full bg-gray-300 rounded-xl' />
            <div className='h-[24px] w-2/3 bg-gray-300 rounded-xl' />
            <div className='pt-14 space-y-4'>
              <div className='h-[36px] w-1/3 bg-gray-300 rounded-xl' />
              <div className='flex flex-wrap gap-y-3 pt-6'>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className='h-[32px] w-[120px] bg-gray-300 rounded-full'
                  />
                ))}
              </div>
            </div>
            <div className='pt-14 space-y-4'>
              <div className='h-[36px] w-1/3 bg-gray-300 rounded-xl' />
              <div className='grid grid-cols-2 gap-x-3 mt-6'>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className='h-[24px] w-full bg-gray-300 rounded-xl'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36 4xl:px-72 animate-pulse'>
        <div className='space-y-8'>
          <div className='h-[36px] w-[200px] bg-gray-300 rounded-xl' />
          {[...Array(3)].map((_, index) => (
            <div key={index} className='space-y-4'>
              <div className='h-[28px] w-[150px] bg-gray-300 rounded-xl' />
              {[...Array(3)].map((_, subIndex) => (
                <div
                  key={subIndex}
                  className='h-[20px] w-full bg-gray-300 rounded-xl'
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className='px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36 4xl:px-72 animate-pulse'>
        <div className='space-y-8'>
          <div className='h-[36px] w-[200px] bg-gray-300 rounded-xl' />
          <div className='gap-x grid grid-cols-1 sm:grid-cols-2 sm:gap-x lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5 gap-y'>
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className='h-[228px] w-full bg-gray-300 rounded-lg'
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const HomeDetails = () => {
  const { homeId } = useParams<{ homeId: string }>();
  const [home, setHome] = useState<HomeDetailsDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  if (loading) return <HomeDetailsSkeleton />;

  if (home)
    return (
      <PageLayout>
        <section className='px-6 py-20 font-haas_roman text-center md:px-20 lg:px-28 lg:py-36 4xl:px-72'>
          <div className='flex flex-col justify-between space-y-8 lg:text-left pt-12 2xl:flex-row 2xl:gap-10 2xl:space-y-0'>
            <img
              src={home.mainImgUrl}
              alt={`Image of ${home.address}`}
              loading='eager'
              decoding='auto'
              role='img'
              aria-label={`Image of ${home.address}`}
              className='overflow-hidden h-[350px] object-cover sm:h-[450px] rounded-xl block 2xl:hidden hover:cursor-pointer'
              onClick={() => {
                setCurrentImageIndex(0);
                setIsLightboxOpen(true);
              }}
            />
            <div className='flex flex-col xl:w-1/2'>
              <h1 className='text-4xl font-editorial_ul text-content sm:text-5xl 2xl:text-6xl'>
                {home.address}
              </h1>
              <p className='sm:text-xl lg:w-2/3'>{home.overview}</p>
              <div className='flex flex-col lg:flex-row justify-between xl:flex-col'>
                <div className='pt-14'>
                  <h2 className='text-4xl font-editorial_ul text-left'>
                    What&apos;s Special?
                  </h2>
                  <ul className='flex flex-col gap-y-3 pt-6 text-sm sm:text-lg px-6 lg:px-0 lg:flex-wrap xl:flex-row'>
                    {home.whatsSpecial.map((item) => (
                      <li
                        key={item}
                        className='font-fraktion_reg bg-content bg-opacity-20 rounded-full py-3 px-6 sm:w-3/4 sm:mx-auto lg:text-sm lg:py-2 lg:mx-0 lg:w-auto lg:self-start xl:mr-4'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='pt-14'>
                  <h2 className='text-4xl font-editorial_ul text-left'>
                    Quick Details
                  </h2>
                  <ul className='grid grid-cols-2 font-haas_md text-lg gap-x-3 mt-6 text-left sm:text-2xl'>
                    <li>${home.cost.toLocaleString()}</li>
                    <li>Built {home.yearBuilt}</li>
                    <li>{home.livableAreaSize} home</li>
                    <li>{home.bedrooms} Bed</li>
                    <li>{home.lotSize} lot</li>
                    <li>{home.bathrooms} Bath</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src={home.mainImgUrl}
                alt={`Image of ${home.address}`}
                loading='eager'
                decoding='auto'
                role='img'
                aria-label={`Image of ${home.address}`}
                className='overflow-hidden h-[350px] object-cover sm:h-[450px] rounded-xl hidden 2xl:block hover:cursor-pointer'
                onClick={() => {
                  setCurrentImageIndex(0);
                  setIsLightboxOpen(true);
                }}
              />
              <button
                onClick={() => setIsModalOpen(true)}
                className='group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content mt-8 w-full sm:text-xl'
              >
                <span className='relative z-10'>Schedule A Visit</span>
                <Arrow className='size-5 relative z-10 transition-colors duration-300 ease-in-out stroke-content group-hover:stroke-primary rotate-[-45deg]' />
                <div className='absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-content' />
              </button>
            </div>
          </div>
        </section>

        <section className='px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36 4xl:px-72'>
          <h2 className='text-4xl font-editorial_ul text-left pb-2'>
            Facts And Features
          </h2>
          <Accordion>
            <AccordionItem title='Home Interior'>
              {Object.entries(home.facts.interior).map(([key, value]) => (
                <div key={key}>
                  <h3 className='text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl'>
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className='list-disc px-6 text-md mb-4'>
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title='Property Details'>
              {Object.entries(home.facts.property).map(([key, value]) => (
                <div key={key}>
                  <h3 className='text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl'>
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className='list-disc px-6 text-md mb-4'>
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title='Home Construction'>
              {Object.entries(home.facts.construction).map(([key, value]) => (
                <div key={key}>
                  <h3 className='text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl'>
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className='list-disc px-6 text-md mb-4'>
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title='Utilities'>
              {Object.entries(home.facts.utils).map(([key, value]) => (
                <div key={key}>
                  <h3 className='text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl'>
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className='list-disc px-6 text-md mb-4'>
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
            <AccordionItem title='Neighborhood'>
              {Object.entries(home.facts.community).map(([key, value]) => (
                <div key={key}>
                  <h3 className='text-xl pb-1 capitalize font-editorial_ul font-semibold sm:text-2xl'>
                    {key.replace('_', ' ')}
                  </h3>
                  <ul className='list-disc px-6 text-md mb-4'>
                    {(value as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        </section>

        <section className='px-6 pb-20 font-haas_roman text-left md:px-20 lg:px-28 lg:pb-36 4xl:px-72'>
          <h2 className='text-4xl font-editorial_ul text-left pb-2'>
            Home Gallery{' '}
            <button
              onClick={() => {
                setCurrentImageIndex(0);
                setIsLightboxOpen(true);
              }}
              className='font-haas_roman text-lg underline pl-2'
            >
              Open Gallery View
            </button>
          </h2>
          <div className='gap-4 grid grid-cols-1 mt-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5'>
            {home.photoGallery.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Image of ${home.address}`}
                loading='lazy'
                decoding='async'
                role='img'
                aria-label={`Image of ${home.address}`}
                className='rounded-lg object-cover 2xl:w-full 2xl:h-[228px] hover:cursor-pointer'
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsLightboxOpen(true);
                }}
              />
            ))}
          </div>
        </section>

        <VisitRequestModalForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <Lightbox
          open={isLightboxOpen}
          close={() => {
            setCurrentImageIndex(0);
            setIsLightboxOpen(false);
          }}
          index={currentImageIndex}
          slides={home.photoGallery.map((photoUrl) => ({ src: photoUrl }))}
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          styles={{
            container: {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
            thumbnailsContainer: {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        />
      </PageLayout>
    );
};

export default HomeDetails;
