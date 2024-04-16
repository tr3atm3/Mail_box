import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./components/SignUp/Authentication";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="bg-[#f5f5f5] w-full h-[100vh]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
    ],
  },
]);
