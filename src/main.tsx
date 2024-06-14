import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/public/Landing';
import Approach from './routes/public/Approach';
import Vision from './routes/public/Vision';
import Properties from './routes/public/Properties';
import './index.css';
import PropertyDetails from './routes/public/PropertyDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/approach',
    element: <Approach />,
  },
  {
    path: '/vision',
    element: <Vision />,
  },
  {
    path: '/properties',
    element: <Properties />,
  },
  {
    path: '/properties/:propertyName',
    element: <PropertyDetails />,
  },
  //admin routes
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
