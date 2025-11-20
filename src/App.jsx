import './app.scss';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
