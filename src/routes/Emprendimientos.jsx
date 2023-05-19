import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Emprendimientos() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://strapi-erconsrl.onrender.com/api/emrendimientos?pagination[page]=${page}&populate=*`
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.meta.pagination.pageCount);
        const uniqueCategories = [
          ...new Set(
            response.data.data.map((item) => item.attributes.categoria)
          ),
        ];
        setCategories(uniqueCategories);
        setSelectedCategory(uniqueCategories[0]);
      });
  }, [page]);

  const filteredData = selectedCategory
    ? data.filter((item) => item.attributes.categoria === selectedCategory)
    : data;

  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
      {filteredData.map((item) => (
        <div key={item.id}>
          <Card
            description={item.attributes.descripcion}
            images={item.attributes.imagenes}
            location={item.attributes.location}
            categoria={item.attributes.categoria}
            titulo={item.attributes.titulo}
          />
        </div>
      ))}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button type="button" key={index} onClick={() => setPage(index + 1)}>
            Page {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Emprendimientos;
