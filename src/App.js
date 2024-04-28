import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import ContractorPage from "./pages/Contractor-page/Contractor_page"; // Correct import path
import Materials from './pages/Materials/Materials';
import ArcAndDes from './pages/ArcAndDes/ArcAndDes';
import Cement from './Sub-pages/Cement/Cement';
import Marbals from './Sub-pages/Marbals/Marbals';
import Tiles from './Sub-pages/Tiles/Tiles';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/contact-us',
        element: <ContactUs />
      }, {
        path: '/contractors/:id',
        element: <ContractorPage />
      }, {
        path: '/architecture/:id',
        element: <ArcAndDes />
      }, {
        path: '/materials/:id',
        element: <Materials />
      }, {
        path: '/materials/cement/:id',
        element: <Cement />
      }, {
        path: '/materials/marbles/:id',
        element: <Marbals />
      }, {
        path: '/materials/tiles/:id',
        element: <Tiles />
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
