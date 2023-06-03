
function ParallaxSection({ children, parallaxData }) {
  return !!parallaxData.data.attributes.parallax?.data?.attributes?.url && (
    <div
      className="flex items-center justify-center mb-12 py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${parallaxData.data.attributes.parallax.data.attributes.url})`,
      }}
    >
      <div className="max-w-3xl mx-auto text-center">{children}</div>
    </div>
  );
}

export default ParallaxSection;
