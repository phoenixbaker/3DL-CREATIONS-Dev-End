import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { UserType } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../api/auth";
import useAuth from "../../hooks/useAuth";

export default function LogInForm() {
  let navigate = useNavigate();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let data = await postAuth({ email, password: pass });
    if (!data) return console.log("No Response from Auth API");
    if (typeof data === "string") return console.warn(data);

    setUser(data);
    if (data.dev) return navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <div className="flex flex-col self-center text-start w-4/5 pt-8">
        <label className="text-lg pb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col self-center w-4/5 pt-6">
        <label className="text-xl">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="shadow-md rounded-full p-2 px-4"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="my-10 w-3/5 rounded-full p-4 bg-primary-blue text-white font-bold"
      >
        LOGIN
      </button>
    </form>
  );
}
