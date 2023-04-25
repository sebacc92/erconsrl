import { useEffect, useState } from 'react';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';

function Nosotros() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  return (
    data && (
      <div className="w-full mt-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <div className="relative h-max">
              <img
                className="block relative w-full max-w-full h-auto"
                src={data.nosotros.imagenPrincipal}
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold text-center">
                  {data.nosotros.titulo}
                </h2>
              </div>
            </div>
            <div className="flex justify-center">
              <About
                images={data.acercaDeNosotros.images}
                parrafos={data.acercaDeNosotros.parrafos}
              />
            </div>
          </div>
        </div>
        <WhatsAppButton phoneNumber={data.contacto.whatsapp} />
      </div>
    )
  );
}

export default Nosotros;
