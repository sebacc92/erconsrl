import { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import About from '../components/About';
import Carousel from '../components/Carousel';

import Proveedores from '../components/Proveedores';
import Contacto from './Contacto';
import Testimonios from '../components/Testimonios';
import Emprendimientos from '../components/Emprendimientos';
import Objetivo from '../components/Objetivo';
import LoadingWrapper from '../components/LoadingWrapper';

function Home() {
  return (
    <div>
      <Carousel />

      <About />

      <Emprendimientos />

      <Objetivo />

      <Proveedores />

      <Testimonios />

      {/* <FacebookChat /> */}
      <Contacto />
    </div>
  );
}

export default Home;
