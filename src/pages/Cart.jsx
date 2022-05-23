import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

import CartItem from "../components/CartItem";
import { clearToCart } from "../redux/actions/cart";

const Cart = () => {
  const items = useSelector(({ cart }) => cart.cart && cart.cart.items);
  const totalPrice = useSelector(({ cart }) => cart.cart && cart.cart.bill);
  const totalCount = useSelector(
    ({ cart }) => cart.cart && cart.cart.totalCount
  );
  const { userId } = JSON.parse(localStorage.getItem("userData"));

  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState(false);

  const dispatch = useDispatch();

  const clearCart = async () => {
    await dispatch(clearToCart(userId));
    setMessage("Корзина очищена");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Корзина</h1>
            <h2 className="font-semibold text-2xl">
              Всего товаров: {totalCount}
            </h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              ИНФОРМАЦИЯ О ПРОДУКТЕ
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              КОЛИЧЕСТВО
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Цена
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Общая цена
            </h3>
          </div>

          {items &&
            items.map((item) => (
              <CartItem
                key={item._id}
                {...item}
                setMessage={setMessage}
                setAlert={setAlert}
              />
            ))}

          <div className="flex justify-between">
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Продолжить покупки
            </Link>
            <button
              onClick={clearCart}
              className="flex font-semibold text-gray-400 hover:text-indigo-600 text-sm mt-10"
            >
              Очистить все товары
            </button>
          </div>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Итог заказа</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              {totalCount} Товара
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              ПЕРЕВОЗКИ
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Стандартная Доставка - 200 сом</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              ПРОМО КОД
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>ОБЩАЯ СТОИМОСТЬ</span>
              <span>{totalPrice} сом</span>
            </div>
            <div className="flex font-semibold justify-between pb-6 text-sm uppercase">
              <span>Доставка</span>
              <span>200 сом</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
      {alert && <Alert setAlert={setAlert} message={message} />}
    </div>
  );
};

export default Cart;
