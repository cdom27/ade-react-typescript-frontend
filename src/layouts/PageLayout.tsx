import { ReactNode } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import ScrollToTopButton from '../components/Navigation/ScrollToTopButton';

interface Props {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: Props) => {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <main
        className={`bg-primary text-content min-h-screen ${className || ''}`}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default PageLayout;
