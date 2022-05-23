import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/actions/cart";
import Alert from "../components/Alert";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { userId } = useSelector(({ user }) => user.user);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      await axios
        .get(`https://kids-shop-mern.herokuapp.com/api/product/${id}`, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          setProduct(response.data);
          setIsLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const addToCart = async () => {
    setDisabled(true);
    await dispatch(addProductToCart(userId, id));
    setDisabled(false);
    setMessage("Товар добавлен в корзину");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(true);
    getProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="text-gray-700  body-font overflow-hidden bg-white sm:mt-0 ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.imageUrl}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <TiStarFullOutline className="text-lg text-red-500" />
                <TiStarFullOutline className="text-lg text-red-500" />
                <TiStarFullOutline className="text-lg text-red-500" />
                <TiStarFullOutline className="text-lg text-red-500" />
                <TiStarOutline className="text-lg text-red-500" />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <FaFacebookF className="text-lg text-gray-500" />
                <BsTwitter className="text-lg text-gray-500 ml-2" />
                <RiMessageFill className="text-lg text-gray-500 ml-2" />
              </span>
            </div>
            <p className="leading-relaxed"> {product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3"> {product.color}</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product.price} сом
              </span>
              <button
                onClick={addToCart}
                disabled={disabled}
                className="flex ml-auto text-red-500 disabled:opacity-30  border-2 font-bold border-red-500 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white transition-all rounded "
              >
                В Корзину
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {alert && <Alert setAlert={setAlert} message={message} />}
    </section>
  );
};

export default ProductDetail;
