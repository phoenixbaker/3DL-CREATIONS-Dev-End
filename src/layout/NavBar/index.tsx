import React from "react";
import { UserType } from "../../context/UserContext";
import useAuth from "../../hooks/useAuth";
import { removeAuthToken } from "../../utils/AuthTokens";

export default function NavBar() {
  const { setUser, user } = useAuth();

  function logOut() {
    removeAuthToken();
    setUser({} as UserType);
  }
  return (
    <section className="bg-primary-dark-blue h-16 w-full">
      <nav className="flex h-full items-center justify-end gap-x-20 mx-24">
        <button className="text-white text-2xl" onClick={() => logOut()}>
          {user.name}
        </button>
      </nav>
    </section>
  );
}
