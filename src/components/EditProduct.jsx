import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { updateProduct } from "../redux/actions/products";

const EditProduct = ({ setIsShow, product, dispatch }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [color, setColor] = useState(product.color);
  const [description, setDescription] = useState(product.description);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);

  const saveChanges = () => {
    const updatedProduct = {
      title:title,
      imageUrl:imageUrl,
      price:price,
      color:color,
      description:description,
    };
    dispatch(updateProduct(updatedProduct, product._id));
  };

  return (
    <div className="relative  z-10" role="dialog" aria-modal="true">
      <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
          <div className="flex text-base text-left  transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
            >
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-w-2 aspect-h-3 overflow-hidden sm:col-span-4 lg:col-span-5">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Неверная ссылка на изображение"
                      className="object-center object-cover  rounded-lg "
                    />
                  ) : (
                    <img
                      src={imageUrl}
                      alt="Неверная ссылка на изображение"
                      className="object-center object-cover  rounded-lg "
                    />
                  )}
                  <div className="mt-5">
                    <input
                      type="text"
                      rows={3}
                      className="block w-full border-gray-600 border-2 outline-none rounded-md py-2 pl-2"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-2xl w-full font-extrabold text-gray-900 sm:pr-12"
                  />
                  <section
                    aria-labelledby="information-heading"
                    className="mt-2"
                  >
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>
                    <span className="text-2xl">$</span>
                    <input
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                      value={`${price}`}
                      className="text-2xl text-gray-900"
                    />
                  </section>

                  <section className="mt-5 h-36">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full h-full outline-none "
                    ></textarea>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <h4 className="text-sm text-gray-900 font-medium">
                          Color
                        </h4>

                        <fieldset className="mt-4">
                          <legend className="sr-only">Choose a color</legend>
                          <span className="flex items-center space-x-3">
                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                className="sr-only"
                                aria-labelledby="color-choice-0-label"
                              />
                              <span
                                id="color-choice-0-label"
                                className="sr-only"
                              >
                                White
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>

                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                              <input
                                type="radio"
                                name="color-choice"
                                className="sr-only"
                                aria-labelledby="color-choice-1-label"
                              />
                              <span
                                id="color-choice-1-label"
                                className="sr-only"
                              >
                                {" "}
                                Gray{" "}
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>

                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                              <input
                                type="radio"
                                name="color-choice"
                                className="sr-only"
                                aria-labelledby="color-choice-2-label"
                              />
                              <span
                                id="color-choice-2-label"
                                className="sr-only"
                              >
                                {" "}
                                Black{" "}
                              </span>
                              <span
                                aria-hidden="true"
                                className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                              ></span>
                            </label>
                          </span>
                        </fieldset>
                      </div>

                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm text-gray-900 font-medium">
                            Size
                          </h4>
                          <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Size guide
                          </a>
                        </div>

                        <fieldset className="mt-4">
                          <legend className="sr-only">Choose a size</legend>
                          <div className="grid grid-cols-4 gap-4">
                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                              <input
                                type="radio"
                                name="size-choice"
                                className="sr-only"
                                aria-labelledby="size-choice-0-label"
                              />
                              <span id="size-choice-0-label"> XXS </span>

                              <span
                                className="absolute -inset-px rounded-md pointer-events-none"
                                aria-hidden="true"
                              ></span>
                            </label>

                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                              <input
                                type="radio"
                                name="size-choice"
                                className="sr-only"
                                aria-labelledby="size-choice-1-label"
                              />
                              <span id="size-choice-1-label"> XS </span>

                              <span
                                className="absolute -inset-px rounded-md pointer-events-none"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                              <input
                                type="radio"
                                name="size-choice"
                                className="sr-only"
                                aria-labelledby="size-choice-2-label"
                              />
                              <span id="size-choice-2-label"> S </span>

                              <span
                                className="absolute -inset-px rounded-md pointer-events-none"
                                aria-hidden="true"
                              ></span>
                            </label>

                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                              <input
                                type="radio"
                                name="size-choice"
                                className="sr-only"
                                aria-labelledby="size-choice-3-label"
                              />
                              <span id="size-choice-3-label"> M </span>

                              <span
                                className="absolute -inset-px rounded-md pointer-events-none"
                                aria-hidden="true"
                              ></span>
                            </label>
                          </div>
                        </fieldset>
                      </div>

                      <div className="flex justify-between">
                        <button className="mt-6  bg-red-600 border border-transparent rounded-md py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:red-500">
                          <span className="mr-2">Удалить товар</span>{" "}
                          <BiTrashAlt size={22} />
                        </button>
                        <button
                          onClick={saveChanges}
                          className="mt-6  bg-green-600 border border-transparent rounded-md py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:green-500"
                        >
                          <span className="mr-2">Сохранить изменение</span>
                          <AiOutlineCheck size={22} />
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
