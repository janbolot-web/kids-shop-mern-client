import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useAuth } from "./hooks/auth.hook";
import { setIsLogin, setUser } from "./redux/actions/auth";
import { getProductsFromCart } from "./redux/actions/cart";
import { useRoutes } from "./routes";
function App() {
  const { token } = useSelector(({ user }) => user.user);
  const isLogin = !!token;
  const routes = useRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      dispatch(setUser(data));
      dispatch(getProductsFromCart(data.userId));
    }
    dispatch(setIsLogin(isLogin));
  }, [token]);
  return (
    <BrowserRouter>
      <div className="dark:bg-gray-900 ">
        <Header />
        {routes}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
