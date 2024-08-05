const HomeCardSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse h-[593px] pt-20">
      <div className="h-[202px] w-full bg-gray-300 rounded-xl" />

      <div className="h-[72px] w-full bg-gray-300 rounded-xl mt-2" />

      <div className="h-[72px] w-full bg-gray-300 rounded-xl mt-4" />

      <div className="h-[84px] w-full bg-gray-300 rounded-xl mt-4" />

      <div className="bg-accent mt-8 h-[60px] w-dull rounded-full" />
    </div>
  );
};

export default HomeCardSkeleton;
