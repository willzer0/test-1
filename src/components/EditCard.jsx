import React from "react";

export default function EditCard() {
  return (
    <div className="p-2 border-slate-200 border-[1px] rounded-sm mb-2">
      <p className="font-bold text-[15px]">Faizal</p>
      <p className="text-[10px] text-slate-500 font-bold -mt-1">6th May 2022</p>
      <p className="text-[12px] -mt-1">Good post!</p>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white text-[12px] px-5 h-[18px] rounded-3xl mr-4">
          Edit
        </button>
        <button className="bg-red-600 text-white text-[12px] px-4 h-[18px] rounded-3xl">
          Delete
        </button>
      </div>
    </div>
  );
}
