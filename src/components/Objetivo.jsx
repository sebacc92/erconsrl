import ParallaxSection from './Parallax';

function Objetivo({ objetivoData, parallaxData }) {
  if (!objetivoData) return <div />;
  const { titulo, contenido } = objetivoData.data.attributes;

  return (
    <div className="bg-gray-800">
      <ParallaxSection parallaxData={parallaxData}>
        <div className="bg-black bg-opacity-70 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-8 font-gotham-bold">
            {titulo}
          </h1>
          <p className="text-xl font-gotham-narrow-black-italic text-white opacity-75">
            {contenido}
            <br /> <i>Ercon Srl.</i>
          </p>
        </div>
      </ParallaxSection>
    </div>
  );
}

export default Objetivo;
