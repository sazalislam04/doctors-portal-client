import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="max-w-[1240px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
