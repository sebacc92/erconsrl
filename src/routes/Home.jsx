import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import About from '../components/About';
import Carousel from '../components/Carousel';

import Proveedores from '../components/Proveedores';
import Contacto from './Contacto';
import Testimonios from '../components/Testimonios';
import Emprendimientos from '../components/Emprendimientos';
import Objetivo from '../components/Objetivo';
import WhatsAppButton from '../components/WhatsAppButton';

function Home() {
  const { informacionDeContacto } = useOutletContext();
  const { testimonios, proveedores } = useLoaderData();
  const [data, setData] = useState([]);
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://strapi-erconsrl.onrender.com/api/emrendimientos?pagination[page]=${page}&populate=*`
      )
      .then((response) => {
        console.log('response emprendimientos', response);
        setData(response.data.data);
        setTotalPages(response.data.meta.pagination.pageCount);
      });
  }, [page]);
  useEffect(() => {
    fetch('https://strapi-erconsrl.onrender.com/api/items?populate=img')
      .then((response) => response.json())
      .then((res) => {
        const list = res.data.map((item) => ({
          title: item.attributes.titulo,
          original: item.attributes.img.data.attributes.url,
          fullscreen: item.attributes.img.data.attributes.url,
          descriptionCard: item.attributes.description,
          buttonLink: item.attributes.link,
        }));
        setItems(list);
      });
  }, []);

  const emprendimientosDestacados = data.filter((e) => e.attributes.destacado);

  return (
    data &&
    items && (
      <div>
        <Carousel items={items} />

        <About />

        <Emprendimientos items={emprendimientosDestacados} />

        <Objetivo />

        <Proveedores items={proveedores} />

        <Testimonios data={testimonios} />

        {/* <FacebookChat /> */}
        <Contacto />

        <WhatsAppButton data={informacionDeContacto.whatsapp} />
      </div>
    )
  );
}

export default Home;
