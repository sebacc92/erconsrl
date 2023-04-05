import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Card({ images, location, categoria, title }) {
  return (
    <Link to={`/emprendimientos/${title}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-white dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 hover:duration-400 cursor-pointer">
        <div className="relative">
          <img
            className="rounded-t-lg h-96"
            src={images[0]}
            alt=""
            height="380"
          />
          <span
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-2 py-1 rounded-md border border-white ${
              categoria === 'En pozo' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {categoria}
          </span>
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
            {title}
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
