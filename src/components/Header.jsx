import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="fixed top-0 lg:top-10 w-full z-[10] h-12 sm:h-16">
      <nav
        className="flex items-center justify-between flex-wrap bg-white lg:bg-gray-800 lg:bg-opacity-75 px-4"
        data-te-navbar-ref
      >
        {/* <!-- Logo --> */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link className="text-xl text-black" to="/">
            <img className="h-12 sm:h-16" src={logo} alt="Mi Logo" />
          </Link>
        </div>

        {/* <!-- Menú desplegable (mobile) --> */}
        <div className="block lg:hidden">
          <button
            className="flex justify-center items-center button-menu"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div />
            <div />
            <div />
          </button>
        </div>

        {/* <!-- Menú (desktop) --> */}
        <div
          className="!visible hidden w-full flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end mb-4 lg:mb-0"
          id="navbarSupportedContent4"
          data-te-collapse-item
        >
          <div className="text-sm">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white border-b border-b-gray-400 lg:border-0 hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase"
              aria-current="page"
              to="/nosotros"
              data-te-nav-link-ref
            >
              Nosotros
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white border-b border-b-gray-400 lg:border-0 hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase"
              aria-current="page"
              to="/emprendimientos"
              data-te-nav-link-ref
            >
              Emprendimientos
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white border-b border-b-gray-400 lg:border-0 hover:text-gray-200 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase"
              aria-current="page"
              to="/contacto"
              data-te-nav-link-ref
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
