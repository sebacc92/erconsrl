import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
  return (
    <header className="fixed top-0 lg:top-10 w-full z-[10] h-12 sm:h-16">
      <nav
        className="flex items-center justify-between flex-wrap bg-white lg:bg-gray-800 lg:bg-opacity-75 px-4"
        data-te-navbar-ref
      >
        {/* <!-- Logo --> */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink className="text-xl text-black" to="/">
            <img
              className="h-12 sm:h-16"
              src="/assets/logo.png"
              alt="Logo Ercon"
            />
          </NavLink>
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
            <NavLink
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
                  isActive ? 'lg:underline' : ''
                } custom-underline`
              }
              aria-current="page"
              to="/"
              data-te-nav-link-ref
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
                  isActive ? 'lg:underline' : ''
                } custom-underline`
              }
              aria-current="page"
              to="/nosotros"
              data-te-nav-link-ref
            >
              Nosotros
            </NavLink>
            <div className="relative inline-block">
              <button
                type="button"
                onClick={toggleSubmenu}
                className="block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase"
                aria-current="page"
                data-te-nav-link-ref
              >
                Emprendimientos
              </button>
              {submenuOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <NavLink
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      to="/emprendimientos/finalizadas"
                    >
                      Finalizadas
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      to="/emprendimientos/trabajando"
                    >
                      Trabajando
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      to="/emprendimientos/proyectos"
                    >
                      Proyectos
                    </NavLink>
                    <NavLink
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      to="/emprendimientos/inversion"
                    >
                      Inversion
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              className={({ isActive }) =>
                `block mt-4 lg:inline-block lg:mt-0 text-black lg:text-white hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
                  isActive ? 'lg:underline' : ''
                } custom-underline`
              }
              aria-current="page"
              to="/contacto"
              data-te-nav-link-ref
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
