import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className }: Props) => {
  return (
    <main
      className={`bg-bg-primary text-content-primary h-screen px-6 pt-8 pb-20 ${className}`}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
