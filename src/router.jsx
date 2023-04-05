import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
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
        path: '/emprendimientos/:title',
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
