import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeProvider";
import { router } from "./Routes/Router";

function App() {
  const { themes } = useContext(ThemeContext);
  return (
    <div
      className={`max-w-[1240px] mx-auto ${themes ? "bg-black" : "bg-white"}`}
    >
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
