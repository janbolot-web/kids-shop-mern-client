import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Registeration = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "https://kids-shop-mern.herokuapp.com/api/auth/registration",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response));
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
      <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
        <div className="row-span-4 w-full row-start-2 text-4xl">
          Зарегистрироваться
          <div className="pt-10 pr-20">
            <label className="text-sm font-sans font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Введите свой email"
              className="w-full bg-black  py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
              onChange={changeHandler}
              value={form.email}
            />
          </div>
          <div className="pt-2 pr-20">
            <label className="text-sm font-sans font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Введите свой пароль"
              className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
              onChange={changeHandler}
              value={form.password}
            />
          </div>
          <div className="text-lg font-sans font-medium mt-10 w-full pr-20 pt-14">
            <button
              type="button"
              onClick={registerHandler}
              className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
            >
              Регистрация
            </button>
          </div>
        </div>
        <Link
          to="/auth"
          className="text-sm font-sans font-medium text-gray-400 underline"
        >
          Уже есть аккаунт? Войти
        </Link>
      </div>
    </div>
  );
};

export default Registeration;
