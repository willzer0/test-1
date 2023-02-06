import React from "react";
import { Link } from "react-router-dom";
export default function Editpage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex">
          <Link to="/my-article">
            <button href="#" className="text-blue-400 text-[12px]">
              List of Comments
            </button>
          </Link>
          <Link to="/">
            <button className="text-blue-400 text-[12px] w-[46vw] mt-1 flex justify-end">
              Logout
            </button>
          </Link>
        </div>
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <p className="font-bold text-[15px] mb-2">Edit Comment</p>
          <input
            type="text"
            placeholder="Faisal"
            className="placeholder:text-[14px] border-[1px] border-black px-1 w-[120px] h-[20px] self-start mb-2 pb-1"
          />
          <textarea
            name="comment"
            id="comment"
            placeholder="Good post!"
            cols="35"
            className="placeholder:text-[14px] pt-3 h-[60px] border-[1px] border-black  mb-1"
          ></textarea>
          <br />
          <button className="bg-blue-600 text-white px-2 text-[12px] rounded-sm">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
