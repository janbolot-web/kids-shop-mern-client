import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../components/Dropdown";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { useOutside } from "../../hooks/useOutsiide";
import { fetchProducts } from "../../redux/actions/products";

const GetProducts = () => {
 
  const { ref, isShow, setIsShow } = useOutside(false);
  const products = useSelector(({ products }) => products.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(isShow);
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  №
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  №
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Color
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  Price
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {products ? (
                products.map((product, index) => (
                  <tr key={product._id} className="">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4  pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                      <img src={product.imageUrl} width={300} alt="" />
                    </td>
                    <td className=" px-3 py-4 text-md font-bold ">
                      {product.title}
                    </td>
                    <td className=" px-3 py-4 text-sm">
                      {product.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {product.color}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {product.price}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <BiDotsVerticalRounded
                        ref={ref}
                        onClick={() => setIsShow(!isShow)}
                        size={22}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <div className="p-10">Загружается...</div>
              )}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
      {isShow && <div className="fixed top-20 w-8/12 h-5/6 bg-gray-200">v</div>}
    </div>
  );
};

export default GetProducts;
