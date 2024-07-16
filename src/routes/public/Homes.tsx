import { useState, useEffect, useCallback, useRef } from 'react';
import PageLayout from '../../layouts/PageLayout';
import TabList from '../../components/PageTabs/TabList';
import TabItem from '../../components/PageTabs/TabItem';
import HomeCard from '../../components/HomeCard';
import HomeCardSkeleton from '../../components/HomeCard/HomeCardSkeleton';
import api from '../../api/axios';
import { HomeCardDTO, PaginatedResponse } from '../../types/api';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Homes = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [homes, setHomes] = useState<HomeCardDTO[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const { observe, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  const loadHomes = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const response = await api.get<PaginatedResponse<HomeCardDTO>>(
        '/api/public/homes',
        {
          params: { page, size: 5 },
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
      <TabList>
        <TabItem isActive={selectedTab === 0} onClick={() => setSelectedTab(0)}>
          All Homes
        </TabItem>
        {/* Add other Home types in the future*/}
      </TabList>
      <div className="space-y-4 pb-28 px-6 pt-6">
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
    </PageLayout>
  );
};

export default Homes;
