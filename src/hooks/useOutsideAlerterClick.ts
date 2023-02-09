import React, { ChangeEvent, RefObject, useEffect, useState } from "react";

export default function useOutsideAlerterClick(ref: RefObject<HTMLElement>) {
  const [click, setClick] = useState(false);
  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      if (ref.current && !ref.current.contains(target as Node)) setClick(true);
      else setClick(false);
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref]);
  return click;
}
