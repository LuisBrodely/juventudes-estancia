import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Business from "./pages/Business";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/business",
    element: <Business />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
