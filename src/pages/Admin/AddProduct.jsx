import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/products";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const { token } = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();

  const onAddProduct = async () => {
    try {
      if (
        !title.length ||
        !imageUrl.length ||
        !price.length ||
        !description.length ||
        !color.length
      ) {
        alert("Заполните все поля");
        return;
      }
      const product = { title, price, description, imageUrl, color };
      await dispatch(addProduct(product, token));
      setTitle("");
      setImageUrl("");
      setPrice("");
      setColor("");
      setDescription("");
      alert('Товар добавлен!')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-lg font-medium text-gray-700">
                Название товара
              </label>
              <input
                type="text"
                name="Название товара"
                id="first-name"
                className="mt-1 outline-none text-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-lg font-medium text-gray-700">
                Ссылка на картинку
              </label>
              <input
                type="text"
                name="Ссылка на картинку"
                id="first-name"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                className="mt-1 outline-none text-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Цвет товара
                </label>
              </div>
              <div className="mt-5">
                <div className="mb-3 xl:w-96">
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                  >
                    <option value={null}>Выберите цвет</option>
                    <option value="Красный">Красный</option>
                    <option value="Коричневый">Коричневый</option>
                    <option value="Белый">Белый</option>
                    <option value="Черный">Черный</option>
                    <option value="Желтый">Желтый</option>
                    <option value="Синий">Синий</option>
                    <option value="Зеленый">Зеленый</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-lg font-medium text-gray-700">
                Цена
              </label>
              <input
                type="text"
                name="Цена товара"
                id="first-name"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="mt-1 outline-none text-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Описание
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="Описание"
                  rows="6"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="shadow-sm outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={onAddProduct}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
