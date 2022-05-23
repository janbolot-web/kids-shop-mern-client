import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart, deleteProductToCart } from "../redux/actions/cart";

const CartItem = ({
  productId,
  title,
  imageUrl,
  price,
  quantity,
  setAlert,
  setMessage,
}) => {
  const { userId } = useSelector(({ user }) => user.user);
  const dispatch = useDispatch();

  const deleteItemProduct = async () => {
    setDisabled(true);
    await dispatch(deleteProductToCart(userId, productId));
    setDisabled(false);
    setMessage("Товар был удален из корзины");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  const [disabled, setDisabled] = useState(false);

  const deleteOneProduct = async () => {
    setDisabled(true);
    await dispatch(deleteProductToCart(userId, productId, true));
    setDisabled(false);
    setMessage("Товар был удален из корзины");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const addProduct = async () => {
    setDisabled(true);
    await dispatch(addProductToCart(userId, productId));
    setDisabled(false);
    setMessage("Товар добавлен в корзину");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-24">
          <img className="h-24" src={imageUrl} alt="" />
        </div>
        <div className="flex flex-col justify-between items-start ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">для мальчиков</span>
          <button
            onClick={deleteItemProduct}
            disabled={disabled}
            className="disabled:opacity-30 font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Удалить
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <button
          onClick={deleteOneProduct}
          disabled={disabled}
          className=" disabled:opacity-30 text-gray-500  "
        >
          <FiMinus size={22} className=" hover:text-gray-900 cursor-pointer" />
        </button>

        <div className="mx-3 border-gray-500 border-2 px-2 rounded-full">
          {quantity}
        </div>

        <button
          onClick={addProduct}
          disabled={disabled}
          className=" disabled:opacity-30 text-gray-500  "
        >
          <FiPlus size={22} className="  hover:text-gray-900 cursor-pointer" />
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price} сом
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {quantity * price} сом
      </span>
    </div>
  );
};

export default CartItem;
