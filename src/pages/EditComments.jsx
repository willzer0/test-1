import React from "react";
import EditCard from "../components/EditCard";
export default function EditComments() {
  return (
    <body className="flex flex-col justify-center items-center">
      <div className="w-full max-w-md flex flex-col gap-4">
        <div className="flex">
          <button href="#" className="text-blue-400 text-[12px]">
            List of Comments
          </button>
          <button className="text-blue-400 text-[12px] w-[77%] flex justify-end">
            Logout
          </button>
        </div>
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <p className="font-bold text-[15px] mb-2">List of Comments</p>
          <EditCard />
        </div>
      </div>
    </body>
  );
}
