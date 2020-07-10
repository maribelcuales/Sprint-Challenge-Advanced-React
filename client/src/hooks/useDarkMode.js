import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"; 

export const useDarkMode = initialState => {
  const [mode, setMode] = useLocalStorage("dark-mode", initialState);

  const appBody = document.querySelector("body");

  useEffect(() => {
    if (mode) {
      appBody.classList.add("dark-mode");
    } else {
      appBody.classList.remove("dark-mode")
    }
  }, [mode]);
  
  return [mode, setMode];
}
