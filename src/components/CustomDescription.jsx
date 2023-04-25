// eslint-disable-next-line react/prop-types
function CustomDescription({ description, onClick, titulo }) {
  return (
    <div className="absolute top-[20%] sm:top-[25%] md:top-[30%] lg:top-[35%] xl:top-[25%] 2xl:top-[15%] w-full max-h-[80%] flex items-center justify-center p-4 mt-[4rem]">
      <div className="bg-black bg-opacity-50 p-4 text-white opacity-80 rounded-md">
        <h2 className="font-gotham-bold font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text5xl">
          {titulo}
        </h2>
        <p className="font-gotham-narrow-medium mb-4 text-center text-base sm:text-lg md:text-xl">
          {description}
        </p>
        <button
          type="button"
          onClick={onClick}
          className="bg-[#990000] text-white font-bold py-2 px-4 rounded hover:bg-red-700 text-xs sm:text-sm md:text-base"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}

export default CustomDescription;
