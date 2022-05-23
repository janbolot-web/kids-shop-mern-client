import React from "react";

const AdBlock = () => {
  return (
    <div className="mt-10  max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-rows-2 grid-flow-col gap-8 text-white text-3xl">
      <div className="h-72 flex relative overflow-hidden justify-center items-center cursor-pointer bg-slate-600 ">
        <img
          src="https://images.unsplash.com/photo-1560506840-ec148e82a604?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          className="absolute"
          alt=""
        />
        <div className="z-10 bg-black/50 hover:bg-black/40 transition-all w-full h-full flex items-center justify-center ">
          <span className="text-4xl">Акция</span>
        </div>
      </div>
      
      <div className="h-72 flex relative overflow-hidden justify-center items-center cursor-pointer bg-slate-600 ">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/05/10/23/children-dresses-3795739_960_720.jpg"
          className="absolute"
          alt=""
        />
        <div className="z-10 bg-black/50 hover:bg-black/40 transition-all w-full h-full flex items-center justify-center ">
          <span className="text-4xl">Распродажа</span>
        </div>
      </div>
      <div className="h-72 flex relative overflow-hidden justify-center items-center cursor-pointer bg-slate-600 ">
        <img
          src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          className="absolute"
          alt=""
        />
        <div className="z-10 bg-black/50 hover:bg-black/40   transition-all w-full h-full flex items-center justify-center ">
          <span className="text-4xl">Новинка</span>
        </div>
      </div>
      <div className="shadow-xl		h-72 flex relative overflow-hidden justify-center items-center cursor-pointer bg-slate-600 ">
        <img
          src="https://st3.depositphotos.com/9880800/16285/i/1600/depositphotos_162853808-stock-photo-happy-family-with-shopping-bags.jpg"
          className="absolute"
          alt=""
        />
        <div className="z-10 bg-black/50 hover:bg-black/40 transition-all w-full h-full flex items-center justify-center ">
          <span className="text-4xl">Хит продаж</span>
        </div>
      </div>
    </div>
  );
};

export default AdBlock;
