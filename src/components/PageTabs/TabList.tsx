import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TabList = ({ children }: Props) => {
  return (
    <div className="flex flex-col space-y-1 border-b-2 border-bg-secondary pb-6 px-6">
      {children}
    </div>
  );
};

export default TabList;
