import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";

import Loader from "./Loader/Loader";
import Pagination from "./Pagination";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Alert from "./Alert";

const ProductList = ({ products }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [message, setMessage] = useState(false);
  const [alert, setAlert] = useState(false);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const totalCount = useSelector(
    ({ products }) => products.products.totalCount
  );
  const dispatch = useDispatch();
  const pageCount = Math.ceil(totalCount / limit);
  useEffect(() => {
    dispatch(fetchProducts(limit, page));
  }, [page, totalCount]);

  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Список товаров
        </h2>
        {!isLoaded ? (
          <div className="h-96  mt-10 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {products &&
              products.map((product) => (
                <div key={product._id}>
                  <ProductItem
                    product={product}
                    setAlert={setAlert}
                    setMessage={setMessage}
                  />
                </div>
              ))}
          </div>
        )}{" "}
        <div className="flex justify-center ">
          <Pagination
            pageCount={pageCount}
            setPage={setPage}
            currentPage={page}
          />
        </div>
        {alert && <Alert setAlert={setAlert} message={message} />}
      </div>
    </div>
  );
};

export default ProductList;

{
  /* <Link
to="/cart"
className="absolute flex justify-center items-center bottom-2 right-2 bg-white w-12 h-12 rounded-full hover:bg-red-500 "
>
<BiCartAlt size={22} />
</Link> */
}
