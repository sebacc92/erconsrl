import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import Nosotros from './routes/Nosotros';
import Emprendimientos from './routes/Emprendimientos';
import Emprendimiento from './routes/Emprendimiento';
import Contacto from './routes/Contacto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/nosotros',
        element: <Nosotros />,
      },
      {
        path: '/emprendimientos',
        element: <Emprendimientos />,
      },
      {
        path: '/emprendimientos/trabajando',
        element: <Emprendimientos selectedTab={0} />,
      },
      {
        path: '/emprendimientos/proyectos',
        element: <Emprendimientos selectedTab={1} />,
      },
      {
        path: '/emprendimientos/inversion',
        element: <Emprendimientos selectedTab={2} />,
      },
      {
        path: '/emprendimientos/finalizadas',
        element: <Emprendimientos selectedTab={3} />,
      },
      {
        path: '/emprendimientos/:titulo',
        element: <Emprendimiento />,
      },
      {
        path: '/contacto',
        element: <Contacto />,
      },
    ],
  },
]);

export default router;
