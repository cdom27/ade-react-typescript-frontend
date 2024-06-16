import { ReactNode } from 'react';

interface Props {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TabItem = ({ isActive, onClick, children }: Props) => {
  return (
    <button
      className={`self-start text-3xl font-medium ${
        isActive ? 'text-brand-accent' : 'text-bg-secondary'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabItem;
