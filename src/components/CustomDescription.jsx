import { useRouter } from 'next/router';

// eslint-disable-next-line react/prop-types
function CustomDescription({ buttonLink, description, title }) {
  const router = useRouter();
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-h-[80%] flex items-center justify-center">
        <div className="bg-black bg-opacity-70 p-4 text-white opacity-80 rounded-md max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="font-gotham-bold font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text5xl">
            {title}
          </h2>
          <p className="font-gotham-narrow-medium mb-4 text-center text-base sm:text-lg md:text-xl whitespace-normal overflow-wrap break-word">
            {description}
          </p>
          {buttonLink && (
            <button
              type="button"
              onClick={() => router.push(buttonLink)}
              className="bg-[#990000] text-white font-bold py-2 px-4 rounded hover:bg-red-700 text-xs sm:text-sm md:text-base"
            >
              Ver detalle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default CustomDescription;
