import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
  const [headerColor, setHeaderColor] = useState('red');
  const [topBarVisible, setTopBarVisible] = useState(true);

  return (
    <div className="App">
      <Topbar isVisible={topBarVisible} />
      <Header />
      <main className="min-h-screen">
        <Outlet foo="bar" />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
