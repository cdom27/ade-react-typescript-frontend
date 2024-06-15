import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/public/Landing';
import Approach from './routes/public/Approach';
import Vision from './routes/public/Vision';
import Homes from './routes/public/Homes';
import HomeDetails from './routes/public/HomeDetails';
import './index.css';

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
    path: '/homes',
    element: <Homes />,
  },
  {
    path: '/homes/:homeId',
    element: <HomeDetails />,
  },
  //admin routes
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
