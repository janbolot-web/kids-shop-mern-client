import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
import AddProduct from "./pages/Admin/AddProduct";
import AdminPanel from "./pages/Admin/AdminPanel";
import GetProducts from "./pages/Admin/GetProducts";
import GetUsers from "./pages/Admin/GetUsers";
import Greeting from "./pages/Admin/Greeting";
import AuthPage from "./pages/AuthPage";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export const useRoutes = () => {
  const { isLogin } = useSelector(({ user }) => user);
  if (isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/*" element={<AdminPanel />}>
          <Route path="" element={<Greeting />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="getUsers" element={<GetUsers />} />
          <Route path="getProducts" element={<GetProducts />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Navigate to="/auth" replace />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/auth/*" element={<AuthPage />}>
          <Route path="" element={<Login />} />
          <Route path="registration" element={<Registeration />} />
        </Route>
      </Routes>
    </>
  );
};
