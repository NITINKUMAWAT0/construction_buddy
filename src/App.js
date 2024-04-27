import './App.scss';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Contractor_page from "./pages/Contractor-page/Contractor_page";
import Materials from './pages/Materials/Materials';
import ArcAndDes from './pages/ArcAndDes/ArcAndDes';

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
  path:'/',
  element:<Layout/>,
  children:[
    {
      path: '/',
      element: <Home />
    }, {
      path: '/products/:id',
      element: <Products />
    }, {
      path: '/product/:id',
      element: <Product />
    },{
      path: '/about',
      element: <About />
    },{
      path: '/contact-us',
      element: <ContactUs />
    },{
      path: '/contractors/:id',
      element: <Contractor_page />
    },
    {
        path: "/architecture/:id",
        element: <ArcAndDes/>
    },
    {
      path:"/materials/:id",
      element:<Materials/>
    }

  ]
}
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
