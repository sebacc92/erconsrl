import About from './components/About';
import Carousel from './components/Carousel';

import Proveedores from './components/Proveedores';
import Contacto from './routes/Contacto';
import Testimonios from './components/Testimonios';
import Emprendimientos from './components/Emprendimientos';
import Objetivo from './components/Objetivo';

function Home() {
  return (
    <div>
      <Carousel />

      <About />

      <Emprendimientos />

      <Objetivo />

      <Proveedores />

      <Testimonios />

      <Contacto />
    </div>
  );
}

export default Home;
