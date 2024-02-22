import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement | HTMLDivElement>(
  handler: Handler,
  listenCapture = true,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log();
        //!ref.current.contains(e.target as Node) will check if where we clicked contains the ref DOM or not
        console.log();
        handler(e);
      }
    }

    document.addEventListener("click", handleClick, listenCapture);
    return () => document.removeEventListener("click", handleClick);
  }, [handler, listenCapture]);

  return ref;
}

export default useClickOutside;
