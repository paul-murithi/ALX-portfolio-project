import HomePage from "./pages/Homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CombinedAuth from "./pages/Auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <CombinedAuth />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
