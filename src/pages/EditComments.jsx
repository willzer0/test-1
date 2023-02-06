import React from "react";
import EditCard from "../components/EditCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function EditComments() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/UserRoute");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };
    fetchUser();
  }, []);
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
            <button className="text-blue-400 text-[12px] w-[44vw] h-[25px] flex justify-end items-center">
              Logout
            </button>
          </Link>
        </div>
        <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4">
          <p className="font-bold text-[15px] mb-2">List of Comments</p>
          {users &&
            users.map((user) => <EditCard key={user._id} user={user} />)}
        </div>
      </div>
    </div>
  );
}
