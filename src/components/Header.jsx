/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const [isTop, setIsTop] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 lg:top-10 w-full z-[10] bg-white h-28">
      {/* Menu mobile */}
      <nav aria-label="Main Nav" className="flex lg:hidden flex-col space-y-1">
        <div className="flex justify-between items-center flex-shrink-0 mr-6">
          {/* <!-- Logo --> */}
          <NavLink className="text-xl text-black" to="/">
            <img className="h-24" src="/assets/logo.png" alt="Logo Ercon 2" />
          </NavLink>
          {/* <!-- Menú desplegable (mobile) --> */}
          <div className="block lg:hidden">
            <button
              className="flex justify-center items-center button-menu"
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <div />
              <div />
              <div />
            </button>
          </div>
        </div>

        <div
          id="navigation"
          className={`${
            isMobileMenuOpen ? 'max-h-[400px] scale-up-vertical-top' : 'max-h-0'
          } overflow-hidden bg-white font-bold transition-colors duration-300 ease-in-out rounded uppercase`}
        >
          <NavLink
            aria-current="page"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <span className="text-lg font-medium py-2 px-4">Inicio</span>
          </NavLink>

          <NavLink
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-current="page"
            onClick={() => setIsMobileMenuOpen(false)}
            to="nosotros"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="text-sm font-medium py-2 px-4">Nosotros</span>
          </NavLink>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="text-sm font-medium py-2 px-4">
                  {' '}
                  Emprendimientos{' '}
                </span>
              </div>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <nav
              aria-label="Users Nav"
              className="mt-2 flex flex-col space-y-1 px-4"
            >
              <NavLink
                aria-current="page"
                onClick={() => setIsMobileMenuOpen(false)}
                to="/emprendimientos/finalizadas"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Finalizados
              </NavLink>

              <NavLink
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-current="page"
                onClick={() => setIsMobileMenuOpen(false)}
                to="/emprendimientos/inversion"
              >
                Inversion
              </NavLink>
              <NavLink
                aria-current="page"
                onClick={() => setIsMobileMenuOpen(false)}
                to="/emprendimientos/trabajando"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Trabajando
              </NavLink>

              <NavLink
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-current="page"
                onClick={() => setIsMobileMenuOpen(false)}
                to="/emprendimientos/proyectos"
              >
                Proyecto
              </NavLink>
            </nav>
          </details>

          <NavLink
            aria-current="page"
            onClick={() => setIsMobileMenuOpen(false)}
            to="/contacto"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium py-2 px-4"> Contacto </span>
          </NavLink>
        </div>
      </nav>
      {/* Menu desktop */}
      <nav
        className="hidden lg:flex justify-between items-center space-y-1"
        id="navbarSupportedContent4"
        data-te-collapse-item
      >
        <div className="flex justify-between items-center flex-shrink-0 mr-6">
          {/* <!-- Logo --> */}
          <NavLink className="text-xl text-black" to="/">
            <img className="h-24" src="/assets/logo.png" alt="Logo Ercon" />
          </NavLink>
        </div>
        <div className="text-lg">
          <NavLink
            className={({ isActive }) =>
              `block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
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
              `block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
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
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase"
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
              `block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4 hover:bg-red-500 font-bold transition-colors duration-300 ease-in-out py-2 px-4 rounded uppercase ${
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
      </nav>
    </header>
  );
}

export default Header;
