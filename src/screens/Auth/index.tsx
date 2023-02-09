import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Logo } from "../../components";
import useAuth from "../../hooks/useAuth";
import LogInForm from "./LogInForm";

export default function Auth() {
  let navigate = useNavigate();
  const { user } = useAuth();
  const [logIn, setLogIn] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center rounded-xl bg-gray-100 mt-16">
        <Logo className="my-12 mx-44 w-48 h-36" />
        <div className="flex justify-center gap-x-20">
          <button
            onClick={() => setLogIn(true)}
            className="text-2xl"
            style={{
              color: logIn ? "#9DD1F1" : "black",
              fontWeight: logIn ? "bold" : "normal",
            }}
          >
            Dev Login
          </button>
        </div>
        {logIn ? <LogInForm /> : <Navigate to="/dev" />}
      </div>
    </div>
  );
}
