import Edificios from '@/components/Edificios';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Topbar from '@/components/Topbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home({
  categoriesData,
  contactoData,
  logoData,
  edificiosData,
}) {
  return (
    <div>
      <Topbar contactoData={contactoData} />
      <Header categoriesData={categoriesData} logoData={logoData} /> 
      <div className="relative mt-[7rem] lg:mt-36">
        <Edificios categoriesData={categoriesData} edificiosData={edificiosData} />
        <WhatsAppButton contactoData={contactoData} />
        <Footer />
      </div> 
    </div>
  );
}


export async function getStaticProps() {

  // Fetch data for Categories
  const categoriesRes = await fetch('https://strapi-erconsrl.onrender.com/api/categorias');
  let categoriesData = null;
  if (categoriesRes.status === 200) {
    categoriesData = await categoriesRes.json();
  }

  // Fetch data for Logo
  const logoRes = await fetch('https://strapi-erconsrl.onrender.com/api/logo?populate=*');
  let logoData = null;
  if (logoRes.status === 200) {
    logoData = await logoRes.json();
  }

  // Fetch data for Edificios
  const edificiosRes = await fetch('https://strapi-erconsrl.onrender.com/api/edificios?populate=*');
  let edificiosData = null;
  if (edificiosRes.status === 200) {
    edificiosData = await edificiosRes.json();
  }

  // Fetch data for Informacion de Contacto
  const contactoRes = await fetch('https://strapi-erconsrl.onrender.com/api/informacion-de-contacto');
  let contactoData = null;
  if (contactoRes.status === 200) {
    contactoData = await contactoRes.json();
  }

  return {
    props: {
      categoriesData,
      logoData,
      contactoData,
      edificiosData,
    },
  };
}
