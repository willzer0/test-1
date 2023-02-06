import React, { useState } from "react";
import logo from "../image/blck_clvr.jpeg";
import CommentsCard from "../components/CommentsCard";
import { useEffect } from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import UserForm from "../components/UserForm";

export default function Article() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/UserRoute");
      const json = await response.json();

      if (response.ok) {
        // dispatch({ type: "SET_USERS", payload: json });
        setUsers(json);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
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
        <UserForm />
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <p className="font-bold text-[15px] mb-2">Comments(2)</p>
          {users &&
            users.map((user) => <CommentsCard key={user._id} user={user} />)}
        </div>
      </div>
    </div>
  );
}
