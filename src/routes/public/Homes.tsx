import { useState, useEffect, useCallback, useRef } from 'react';
import PageLayout from '../../layouts/PageLayout';
import HomeCard from '../../components/HomeCard/HomeCard';
import HomeCardSkeleton from '../../components/HomeCard/HomeCardSkeleton';
import api from '../../api/axios';
import { HomeCardDTO, PaginatedResponse } from '../../types/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import VideoHero from '../../components/VideoHero';

const Homes = () => {
  const [homes, setHomes] = useState<HomeCardDTO[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { observe, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  //Hero sources
  const videoSources = {
    tablet: {
      webm: '', // No WebM for tablet/mobile
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-720.mp4`,
    },
    desktop: {
      webm: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-1080.webm`,
      mp4: `https://db36hfj0unq27.cloudfront.net/hero-videos/homes-hero-720.mp4`, // Fallback Mp4 for desktop
    },
  };

  const posterSource = `https://db36hfj0unq27.cloudfront.net/regular-content/homes-hero-poster.webp`;

  const loadHomes = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const response = await api.get<PaginatedResponse<HomeCardDTO>>(
        '/api/public/homes',
        {
          params: { page, size: 4 },
        }
      );
      setHomes((prevHomes) => [...prevHomes, ...response.data.content]);
      setHasMore(!response.data.last);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching homes:', error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    if (isIntersecting) {
      loadHomes();
    }
  }, [isIntersecting, loadHomes]);

  useEffect(() => {
    if (bottomRef.current) {
      observe(bottomRef.current);
    }
  }, [observe, bottomRef]);

  return (
    <PageLayout>
      <section className="relative">
        <h1 className="absolute text-center inset-0 flex flex-col items-center justify-center z-10 text-4xl font-editorial_ul text-accent mt-20 px-6 sm:text-5xl 2xl:text-6xl">
          Find Your <span className="font-editorial_ul_italic">Dream Home</span>{' '}
          In San Diego
        </h1>
        <VideoHero videoSources={videoSources} posterSource={posterSource} />
      </section>

      <section className="px-6 py-20 font-haas_roman md:px-20 lg:px-28 lg:py-36">
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl lg:w-1/2 lg:mx-auto 2xl:text-6xl 2xl:w-1/3">
          Life Is Too Short To Settle On A Home
        </h2>
        <p className="pt-8 text-center sm:text-xl lg:w-2/3 lg:mx-auto 2xl:w-1/2">
          There&apos;s nothing quite like an Ade home. Browse through our unique
          homes and schedule a visit with our experts.
        </p>
        <h3 className="text-3xl font-editorial_ul pt-8 text-left sm:text-4xl lg:pt-20 lg:text-center">
          Dream Homes By Ade
        </h3>

        <div className="space-y-16 pb-28 pt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 sm:space-y-0 lg:gap-x-20 lg:pt-24 xl:w-5/6 xl:mx-auto xl:gap-x-10 2xl:px-20 2xl:gap-y-24">
          {homes.map((home) => (
            <HomeCard key={home.id} {...home} />
          ))}
          {loading && (
            <>
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
              <HomeCardSkeleton />
            </>
          )}
          <div ref={bottomRef} style={{ height: '10px' }}></div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Homes;
