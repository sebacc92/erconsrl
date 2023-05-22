import { useGetAboutQuery } from '../services/api';

function About() {
  const { data, isFetching } = useGetAboutQuery();

  const images = [
    '/assets/nosotros/experience-image-1.jpg',
    '/assets/nosotros/experience-image-2.jpg',
    '/assets/nosotros/experience-image-3.webp',
    '/assets/nosotros/experience-image-4.webp',
    '/assets/nosotros/experience-image-5.webp',
  ];

  const contentWithBreaks = data?.data?.attributes?.content?.replace(
    /\n/g,
    '<br />'
  );

  if (isFetching) return <div />;
  return (
    <div className="md:container mx-auto px-4 py-24" id="nosotros">
      <div className="flex flex-wrap -mx-2">
        <div className="font-gotham-medium w-full md:w-1/2 px-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">
            ACERCA DE <span className="text-[#990000]">ERCON</span>
          </h2>
          <div
            className="text-gray-600 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: contentWithBreaks }}
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mt-8 md:mt-0">
          <div className="grid grid-cols-3 gap-2">
            <img
              src={images[0]}
              alt="Imagen 1"
              className="w-full h-56 object-cover"
            />
            <img
              src={images[1]}
              alt="Imagen 2"
              className="w-full h-56 object-cover"
            />
            <img
              src={images[2]}
              alt="Imagen 3"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img
              src={images[3]}
              alt="Imagen 4"
              className="w-full h-56 object-cover col-span-1"
            />
            <img
              src={images[4]}
              alt="Imagen 5"
              className="w-full h-56 object-cover col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
