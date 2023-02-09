import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export function useDev() {
  let { user } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user?.dev) navigate("/");
  }, [user]);
}
