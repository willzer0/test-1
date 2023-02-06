// import React from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import { Link } from "react-router-dom";
const EditCard = ({ user }) => {
  // const { dispatch } = useUsersContext();

  const handleClick = async () => {
    const response = await fetch("/api/UserRoute/" + user._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      // dispatch({ type: "DELETE_USERS", payload: json });
      user(json);
    }
  };

  return (
    <div className="p-2 border-slate-200 border-[1px] rounded-sm mb-2">
      <p className="font-bold text-[15px]">{user.title}</p>
      <p className="text-[10px] text-slate-500 font-bold -mt-1">
        {user.createdAt.substring(0, 10)}
      </p>
      <p className="text-[12px] -mt-1">{user.comment}</p>
      <div className="flex justify-end">
        <Link to="/comments/edit">
          <button className="bg-blue-700 text-white text-[12px] px-5 h-[18px] rounded-3xl mr-4">
            Edit
          </button>
        </Link>
        <button
          className="bg-red-600 text-white text-[12px] px-4 h-[18px] mt-[5px] rounded-3xl"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditCard;
