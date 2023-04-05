/* eslint-disable react/prop-types */
import bgImage from '../assets/carousel/hall.webp';

function ParallaxSection({ children }) {
  return (
    <div
      className="flex items-center justify-center mb-12 py-40 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-3xl mx-auto text-center">{children}</div>
    </div>
  );
}

export default ParallaxSection;
