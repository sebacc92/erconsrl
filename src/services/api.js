import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;

// Define una API Slice con endpoints
const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://strapi-erconsrl.onrender.com/api',
  }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'acerca-de-nosotro',
    }),
    getCarousel: builder.query({
      query: () => 'items?populate=img',
    }),
    getEdificio: builder.query({
      query: (id) => `/edificios/${id}?populate=*`,
    }),
    getEdificios: builder.query({
      query: () => `/edificios?pagination[page]=${page}&populate=*`,
    }),
    getEdificiosDestacados: builder.query({
      query: () =>
        `/edificios?pagination[page]=${page}&filters[destacado]=true&populate=*`,
    }),
    getInformacionDeContacto: builder.query({
      query: () => 'informacion-de-contacto',
    }),
    getObjetivo: builder.query({
      query: () => 'objetivo',
    }),
    getProveedores: builder.query({
      query: () => 'proveedores?populate=imagen',
    }),
    getTestimonios: builder.query({
      query: () => 'testimonios?populate=imagen',
    }),
  }),
});

// Exportar los hooks para su uso en los componentes
export const {
  useGetAboutQuery,
  useGetInformacionDeContactoQuery,
  useGetCarouselQuery,
  useGetEdificioQuery,
  useGetEdificiosQuery,
  useGetEdificiosDestacadosQuery,
  useGetObjetivoQuery,
  useGetProveedoresQuery,
  useGetTestimoniosQuery,
} = api;
export default api;
