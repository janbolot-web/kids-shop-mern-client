import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/auth";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = () => {
    dispatch(login(form));
  };

  return (
    <div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
      <div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
        <div className="row-span-4 row-start-2 text-4xl">
          Войти
          <div className="pt-10 pr-20">
            <label className="text-sm font-sans font-medium">Email</label>
            <input
              type="text"
              name="email"
              onChange={changeHandler}
              value={form.email}
              placeholder="Введите свой email"
              className="w-full bg-black  py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
            />
          </div>
          <div className="pt-2 pr-20">
            <label className="text-sm font-sans font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={changeHandler}
              value={form.password}
              placeholder="Введите свой пароль"
              className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
            />
            <a
              href="/"
              className="text-sm font-sans font-medium text-gray-600 underline"
            >
              Забыли пароль?
            </a>
          </div>
          <div className="text-lg font-sans font-medium w-full pr-20 pt-14">
            <button
              type="button"
              onClick={loginHandler}
              className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white"
            >
              Войти
            </button>
          </div>
        </div>
        <Link
          to="registration"
          className="text-sm font-sans font-medium text-gray-400 underline"
        >
          Нет аккаунта? Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default Login;
