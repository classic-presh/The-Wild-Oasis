import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenToCapturing = true) {
  const modalRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenToCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenToCapturing);
    },
    [handler, listenToCapturing],
  );

  return modalRef;
}
