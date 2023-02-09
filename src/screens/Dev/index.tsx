import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import ProductForm from "./components/ProductForm";

export default function Dev() {
  const { user } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.dev) return navigate("/");
  }, [user]);

  return (
    <section className="m-12">
      <ProductForm />
    </section>
  );
}
