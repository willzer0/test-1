import { useState } from "react";
import { useUsersContext } from "../hooks/useUsersContext";

export default function UserForm() {
  //   const { dispatch } = useUsersContext();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { title, comment };

    const response = await fetch("/api/UserRoute", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setComment("");
      setError(null);
      console.log("new user added", json);
      //   dispatch({ type: "CREATE_USERS", payload: json });
      user(json);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-[95%] border-slate-300 border-[1px] self-center rounded-md p-4 ">
        <p className="text-[15px] font-bold mb-2">Add your comment</p>
        <div className="flex flex-col">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Your name..."
            className=" placeholder:text-[14px] border-[1px] border-black px-1 w-[120px] h-[20px] self-start mb-2"
          />
          <textarea
            name="textarea"
            id="textarea"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
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
      {error && (
        <div className="text-red-600 bg-red-200 border-red-500 border-[2px] text-[10px]">
          {error}
        </div>
      )}
    </form>
  );
}
