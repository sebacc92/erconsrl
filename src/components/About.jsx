import Image from "next/image";

function About({ aboutData }) {
  const contentWithBreaks = aboutData?.content?.replace(
    /\n/g,
    '<br />'
  );

  if (!aboutData) return <div />;
  const imagenes = aboutData.imagenes.data;
  return (
    aboutData.mostrar && (
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
              <Image
                src={imagenes[2].attributes.url}
                alt="Imagen 1"
                className="w-full h-56 object-cover"
              />
              <Image
                src={imagenes[4].attributes.url}
                alt="Imagen 2"
                className="w-full h-56 object-cover"
              />
              <Image
                src={imagenes[0].attributes.url}
                alt="Imagen 3"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Image
                src={imagenes[3].attributes.url}
                alt="Imagen 4"
                className="w-full h-56 object-cover col-span-1"
              />
              <Image
                src={imagenes[1].attributes.url}
                alt="Imagen 5"
                className="w-full h-56 object-cover col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default About;
