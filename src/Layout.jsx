import { Outlet, useLoaderData } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  const { informacionDeContacto } = useLoaderData();
  console.log('informacionDeContacto', informacionDeContacto);
  return (
    <div className="App">
      <Topbar data={informacionDeContacto} />
      <Header />
      <main className="min-h-screen">
        <Outlet context={{ informacionDeContacto }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
