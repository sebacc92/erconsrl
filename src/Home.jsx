import { useEffect, useState } from 'react';
import About from './components/About';
import Carousel from './components/Carousel';

import Proveedores from './components/Proveedores';
import Contacto from './routes/Contacto';
import Testimonios from './components/Testimonios';
import Emprendimientos from './components/Emprendimientos';
import Objetivo from './components/Objetivo';
import WhatsAppButton from './components/WhatsAppButton';
import HorizontalSlider from './components/HorizontalSlider';

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  return (
    data && (
      <div>
        <Carousel items={data.carousel} />

        <About
          images={data.acercaDeNosotros.images}
          parrafos={data.acercaDeNosotros.parrafos}
        />

        <Emprendimientos items={data.emprendimientos.slice(0, 3)} />

        <Objetivo
          titulo={data.nuestroObjetivo.titulo}
          descripcion={data.nuestroObjetivo.descripcion}
        />

        <Proveedores items={data.proveedores} />

        <Testimonios items={data.testimonios} />

        {/* <FacebookChat /> */}
        <Contacto />

        <WhatsAppButton phoneNumber={data.contacto.whatsapp} />
      </div>
    )
  );
}

export default Home;
