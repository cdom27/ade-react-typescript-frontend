import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/public/Landing';
import Homes from './routes/public/Homes';
import HomeDetails from './routes/public/HomeDetails';
import About from './routes/public/About';
import Services from './routes/public/Services';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/homes',
    element: <Homes />,
  },
  {
    path: '/homes/:homeId',
    element: <HomeDetails />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
