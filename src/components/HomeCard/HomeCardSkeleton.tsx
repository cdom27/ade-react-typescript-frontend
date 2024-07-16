const HomeCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-bg-secondary bg-opacity-40 p-6 animate-pulse">
      <div className="bg-gray-300 h-48 w-full"></div>
      <div className="h-6 bg-gray-300 mt-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 mt-2 w-1/2"></div>
      <div className="h-4 bg-gray-300 mt-2 w-1/4"></div>
      <div className="h-4 bg-gray-300 mt-2 w-1/4"></div>
      <div className="h-4 bg-gray-300 mt-2 w-1/4"></div>
      <div className="h-10 bg-gray-300 mt-8 w-full"></div>
    </div>
  );
};

export default HomeCardSkeleton;
