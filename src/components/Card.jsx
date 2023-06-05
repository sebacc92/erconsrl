import Image from 'next/image';
import Link from 'next/link';

function Card({ imagen, location, categoria, titulo, id }) {
  return (
    <Link href={`/edificios/${id}`}>
      <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-white dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 hover:duration-400 cursor-pointer w-72 h-96 flex flex-col justify-between">
        <div className="relative h-2/3">
          {imagen?.data?.attributes?.url && (
            <Image
              className="rounded-t-lg h-full w-full object-cover"
              src={imagen?.data?.attributes?.url}
              alt=""
              fill
            />
          )}
          {categoria && <span
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md border border-white ${
              categoria === 'En pozo' ? 'bg-[#990000]' : 'bg-[#aF0000]'
            }`}
          >
            {categoria}
          </span>}
        </div>
        <div className="p-5 h-1/3">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {titulo}
          </h5>
          <h5 className="mb-2 text-lg text-center tracking-tight text-gray-500 dark:text-white">
            {location}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default Card;
