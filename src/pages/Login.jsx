import React from "react";
import logo from "../image/blck_clvr.jpeg";
export default function Login() {
  return (
    <body className="flex justify-center items-center w-[100%] h-[100vh]">
      <div className="border-[2px] border-slate-200 w-[400px] h-[400px] flex flex-col items-center shadow-sm shadow-slate-300">
        <img
          src={logo}
          className="w-[220px] h-[120px] mt-5 rounded-sm shadow-sm shadow-black "
        />
        <input
          type="text"
          placeholder="Email"
          className="px-2 w-[235px] border-[1px] border-black mt-14 h-[40px] text-[20px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-2 w-[235px] border-[1px] border-black mt-2 h-[40px] text-[20px]"
        />
        <button className="bg-blue-600 rounded-md mt-4 text-white px-4 text-[15px] hover:bg-blue-700">
          Login
        </button>
      </div>
    </body>
  );
}
