import { ReactNode } from 'react';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';

interface Props {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: Props) => {
  return (
    <>
      <Nav />
      <main
        className={`bg-bg-primary text-content-primary h-screen px-6 pt-8 pb-20 ${className}`}
      >
        {children}{' '}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
