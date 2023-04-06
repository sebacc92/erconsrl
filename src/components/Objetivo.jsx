/* eslint-disable react/prop-types */
import ParallaxSection from './Parallax';

function Objetivo({ titulo, descripcion }) {
  return (
    <ParallaxSection>
      <div className="bg-black bg-opacity-30 rounded-lg p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-8">{titulo}</h1>
        <p className="text-lg text-white opacity-75">
          {descripcion}
          <br /> <i>Ercon Srl.</i>
        </p>
      </div>
    </ParallaxSection>
  );
}

export default Objetivo;
