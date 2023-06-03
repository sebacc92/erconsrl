import Edificios from '@/components/Edificios';

export default function Home({
  categoriesData,
  edificiosData,
}) {
  return (
    <div>
      <Edificios categoriesData={categoriesData} edificiosData={edificiosData} />
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

  return {
    props: {
      categoriesData,
      edificiosData,
    },
  };
}
