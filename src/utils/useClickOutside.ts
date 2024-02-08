import { useEffect, useRef, MutableRefObject } from "react";

type Handler = (event: MouseEvent) => void;

export function useClickOutside(
  handler: Handler,
  listenCapture = true,
): MutableRefObject<HTMLElement | undefined> {
  const ref = useRef<HTMLElement | undefined>();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e);
      }
    }

    document.addEventListener("click", handleClick, listenCapture);
    return () => document.removeEventListener("click", handleClick);
  }, [handler, listenCapture]);

  return ref;
}

export default useClickOutside;
