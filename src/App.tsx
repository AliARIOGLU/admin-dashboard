import "./styles/global.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// PAGES
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NotFound from "./pages/notFound/NotFound";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";

function App() {
  const Layout = () => {
    return (
      <main className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
