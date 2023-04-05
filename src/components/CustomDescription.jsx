// eslint-disable-next-line react/prop-types
function CustomDescription({ description, onClick, title }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
      <div className="bg-black bg-opacity-50 p-4 text-white opacity-80 rounded-md">
        <h2 className="font-gotham-bold font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text5xl">
          {title}
        </h2>
        <p className="font-gotham-narrow-medium mb-4 text-center text-base sm:text-lg md:text-xl">
          {description}
        </p>
        <button
          type="button"
          onClick={onClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 text-xs sm:text-sm md:text-base"
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
}

export default CustomDescription;
