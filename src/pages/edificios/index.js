import Edificios from '@/components/Edificios';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home({
  categoriesData,
  contactoData,
  edificiosData,
}) {
  return (
    <div>
      <Edificios categoriesData={categoriesData} edificiosData={edificiosData} />
      <WhatsAppButton contactoData={contactoData} />
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
      contactoData,
      edificiosData,
    },
  };
}
