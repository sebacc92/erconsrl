import ParallaxSection from './Parallax';

function Objetivo() {
  return (
    <ParallaxSection>
      <div className="bg-black bg-opacity-30 rounded-lg p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">NUESTRO OBJETIVO</h1>
        <p className="text-lg text-white opacity-75">
          El objetivo de equipo es desarrollar la creatividad de proyectos y la
          excelencia en la construcción de obras propias y de terceros que
          respalden el crecimiento con la experiencia de nuestros profesionales.{' '}
          <br /> <i>Ercon Srl.</i>
        </p>
      </div>
    </ParallaxSection>
  );
}

export default Objetivo;
