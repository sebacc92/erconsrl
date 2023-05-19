import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import Nosotros from './routes/Nosotros';
import Emprendimientos from './routes/Emprendimientos';
import Emprendimiento from './routes/Emprendimiento';
import Contacto from './routes/Contacto';
import axios from './components/instanceAxios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: async () => {
      const response = await axios.get('/informacion-de-contacto');
      const informacionDeContacto = {
        email: response.data.data.attributes.email,
        direccion: response.data.data.attributes.direccion,
        telefono: response.data.data.attributes.telefono,
      };
      return { informacionDeContacto };
    },
    children: [
      {
        index: true,
        loader: async () => {
          const urls = [
            '/testimonios?populate=imagen',
            '/proveedores?populate=imagen',
          ];
          const promises = urls.map((url) => axios.get(url));

          return Promise.all(promises)
            .then(([resTestimonios, resProveedores]) => {
              const testimonios = resTestimonios.data;
              const proveedores = resProveedores.data;

              return { testimonios, proveedores };
            })
            .catch((error) => {
              console.error('Error realizando las solicitudes', error);
            });
        },
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
