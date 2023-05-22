import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingWrapper from './components/LoadingWrapper';
import WhatsAppButton from './components/WhatsAppButton';

function Layout() {
  return (
    <LoadingWrapper isLoading={false} isLogo>
      <div className="App">
        <Topbar />
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LoadingWrapper>
  );
}

export default Layout;
