import React from "react";
import logo from "../image/blck_clvr.jpeg";
import CommentsCard from "../components/CommentsCard";
export default function article() {
  return (
    <body className="flex flex-col justify-center items-center">
      <div className="w-full max-w-max flex flex-col gap-4">
        <img
          src={logo}
          className="w-[30%] mt-4 ml-4 rounded-sm shadow-sm shadow-black "
        />
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <h1 className="font-bold text-[15px]">My Article</h1>
          <p className="text-[10px] text-slate-500 font-bold">6th May 2022</p>
          <br />
          <p className="w-[100%] text-[10px]">
            Some quick example text to build on the card title and make up the
            bulk oh the card's content
          </p>
        </div>
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4 ">
          <p className="text-[15px] font-bold mb-2">Add your comment</p>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Your name..."
              className=" placeholder:text-[14px] border-[1px] border-black px-1 w-[120px] h-[20px] self-start mb-2"
            />
            <textarea
              name="textarea"
              id="textarea"
              placeholder="Your comment..."
              className=" placeholder:text-[14px] w-[280px] border-[1px] border-black placeholder:justify-center mb-1"
            ></textarea>
            <div className=" flex mb-2">
              <input
                type="text"
                placeholder="Captcha"
                className=" placeholder:text-[14px] border-black border-[1px] w-[120px] px-1"
              />
            </div>
            <p className="font-bold text-[12px] ml-2">What is x + y?</p>
          </div>
          <button className="px-2 bg-blue-500 rounded-sm text-white text-[10px] font-bold">
            Submit
          </button>
        </div>
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <p className="font-bold text-[15px] mb-2">Comments(2)</p>
          <CommentsCard />
          <CommentsCard />
        </div>
      </div>
    </body>
  );
}
