import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <main className="min-h-screen">
        <Outlet foo="bar" />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
