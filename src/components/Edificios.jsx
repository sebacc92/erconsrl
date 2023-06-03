import { useState } from 'react';
import Card from './Card';

function Edificios({ categoriesData, edificiosData }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  if (!categoriesData || !edificiosData) return <div />;

  function handlePageChange(page) {
    // Aquí es donde deberías hacer la petición para obtener los datos de la nueva página
    setCurrentPage(page);
  }

  return (
    <div className="nuestros-emprendimientos px-2 py-16 bg-gray-200">
      <div className="sm:mx-4 mt-8">
        <h3 className="mb-4 text-3xl text-center text-black font-semibold uppercase tracking-wide font-gotham-narrow-bold">
          Nuestros Emprendimientos
        </h3>
        <div className="mb-4 flex justify-center">
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas las categorías</option>
            {categoriesData.data.map((category) => (
              <option key={category.id} value={category.id}>
                {category.attributes.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <div className="grid justify-items-center align-items-center gap-8 text-neutral-600 sm:grid-cols-1 lg:grid-cols-4">
            {edificiosData.data
              .filter((item) => selectedCategory === "" || item.attributes.categoria?.data?.id === selectedCategory)
              .map((item) => (
                <Card
                  key={item.id}
                  description={item.attributes.description}
                  imagenes={item.attributes.imagenes}
                  location={item.attributes.location}
                  categoria={item.attributes.categoria?.data?.attributes?.nombre}
                  titulo={item.attributes.titulo}
                  id={item.id}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {Array(edificiosData.meta.pagination.pageCount).fill(null).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                style={page === currentPage ? { backgroundColor: "#990000", color: "#fff", padding: "10px 20px" } : { padding: "10px 20px" }}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Edificios;
