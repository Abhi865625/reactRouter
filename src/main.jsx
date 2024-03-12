import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Aboutus from "./components/AboutUs/Aboutus";
import ContactUs from "./components/ContactUs/ContactUs";
import User from "./components/User/User";
import GitHub, { gitHubInfoLoader } from "./components/GitHub/GitHub";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       {
//         path: "about",
//         element: <Aboutus />,
//       },
//       { path: "contact", element: <ContactUs /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={gitHubInfoLoader} path="github" element={<GitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
