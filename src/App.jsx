import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import CardDetail from "./components/utils/CardDetail";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ index:true, element: <Home />, },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
        {
        path: "/country/:id",
        element: <CardDetail />
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ], },]);

const App = () => {
  return (
    <>
     <div className="bg-black h-screen w-full text-white">
       <RouterProvider router={router}>
        <h2 className="text-2xl b">Hello React project</h2>
      </RouterProvider>
     </div>
    </>
  );
};

export default App;
