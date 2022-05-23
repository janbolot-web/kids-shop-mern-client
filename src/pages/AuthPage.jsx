import React, { useContext, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const AuthPage = () => {
 

  return (
    <div className="grid grid-cols-12">
      <Outlet  />

      <div className="banner col-span-8 text-black font-sans font-bold">
        <div className="bg-black w-full h-full opacity-40"></div>
      </div>
    </div>
  );
};

export default AuthPage;
