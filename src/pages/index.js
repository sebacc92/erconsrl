import Image from 'next/image';
import About from '@/components/About';
import Carousel from '@/components/Carousel';
import EmprendimientosDestacados from '@/components/EmprendimientosDestacados';
import Objetivo from '@/components/Objetivo';
import Proveedores from '@/components/Proveedores';
import Testimonios from '@/components/Testimonios';
import Contacto from '@/components/Contacto';
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

export default function Home({
  aboutData,
  carouselData,
  categoriesData,
  edificiosData,
  destacadosData,
  contactoData,
  logoData,
  objetivoData,
  parallaxData,
  proveedoresData,
  testimoniosData,
}) {
  return (
    <div>
      <Topbar contactoData={contactoData} />
      <Header categoriesData={categoriesData} logoData={logoData} />
      <Carousel carouselData={carouselData} />
      <About aboutData={aboutData} />
      <EmprendimientosDestacados destacadosData={destacadosData} />
      <Objetivo objetivoData={objetivoData} parallaxData={parallaxData} />
      <Proveedores proveedoresData={proveedoresData} />
      <Testimonios testimoniosData={testimoniosData} />
      {/* <FacebookChat /> */}
      <Contacto contactoData={contactoData} />
      <WhatsAppButton contactoData={contactoData} />
      <Footer />
    </div>
  );
}


export async function getStaticProps() {
  // Fetch data for About
  const aboutRes = await fetch('https://strapi-erconsrl.onrender.com/api/acerca-de-nosotro?fields=content,mostrar&populate=imagenes');
  let aboutData = null;
  if (aboutRes.status === 200) {
    aboutData = await aboutRes.json();
    aboutData = aboutData.data.attributes;
  }

  // Fetch data for Carousel
  const carouselRes = await fetch('https://strapi-erconsrl.onrender.com/api/items?populate=img');
  let carouselData = null;
  if (carouselRes.status === 200) {
    carouselData = await carouselRes.json();
  }

  // Fetch data for Categories
  const categoriesRes = await fetch('https://strapi-erconsrl.onrender.com/api/categorias');
  let categoriesData = null;
  if (categoriesRes.status === 200) {
    categoriesData = await categoriesRes.json();
  }

  // Fetch data for Edificios
  const edificiosRes = await fetch('https://strapi-erconsrl.onrender.com/api/edificios?populate=*');
  let edificiosData = null;
  if (edificiosRes.status === 200) {
    edificiosData = await edificiosRes.json();
  }

  // Fetch data for Edificios Destacados
  const destacadosRes = await fetch('https://strapi-erconsrl.onrender.com/api/edificios?filters[destacado]=true&populate=*');
  let destacadosData = null;
  if (destacadosRes.status === 200) {
    destacadosData = await destacadosRes.json();
  }

  // Fetch data for Informacion de Contacto
  const contactoRes = await fetch('https://strapi-erconsrl.onrender.com/api/informacion-de-contacto');
  let contactoData = null;
  if (contactoRes.status === 200) {
    contactoData = await contactoRes.json();
  }

  // Fetch data for Logo
  const logoRes = await fetch('https://strapi-erconsrl.onrender.com/api/logo?populate=*');
  let logoData = null;
  if (logoRes.status === 200) {
    logoData = await logoRes.json();
  }

  // Fetch data for Objetivo
  const objetivoRes = await fetch('https://strapi-erconsrl.onrender.com/api/objetivo');
  let objetivoData = null;
  if (objetivoRes.status === 200) {
    objetivoData = await objetivoRes.json();
  }

  // Fetch data for Parallax
  const parallaxRes = await fetch('https://strapi-erconsrl.onrender.com/api/parallax?populate=*');
  let parallaxData = null;
  if (parallaxRes.status === 200) {
    parallaxData = await parallaxRes.json();
  }

  // Fetch data for Proveedores
  const proveedoresRes = await fetch('https://strapi-erconsrl.onrender.com/api/proveedores?populate=imagen');
  let proveedoresData = null;
  if (proveedoresRes.status === 200) {
    proveedoresData = await proveedoresRes.json();
  }

  // Fetch data for Testimonios
  const testimoniosRes = await fetch('https://strapi-erconsrl.onrender.com/api/testimonios?populate=imagen');
  let testimoniosData = null;
  if (testimoniosRes.status === 200) {
    testimoniosData = await testimoniosRes.json();
  }

  return {
    props: {
      aboutData,
      carouselData,
      categoriesData,
      edificiosData,
      destacadosData,
      contactoData,
      logoData,
      objetivoData,
      parallaxData,
      proveedoresData,
      testimoniosData
    },
  };
}
