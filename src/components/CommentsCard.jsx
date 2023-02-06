// import React from "react";

// export default function CommentsCard() {

const CommentsCard = ({ user }) => {
  return (
    <div className="p-2 border-slate-200 border-[1px] rounded-sm mb-2">
      <p className="font-bold text-[15px]">{user.title}</p>

      <p className="text-[10px] text-slate-500 font-bold -mt-1">
        {user.createdAt.substring(0, 10)}
      </p>
      <p className="text-[12px] -mt-1">{user.comment}</p>
    </div>
  );
};
// }

export default CommentsCard;
