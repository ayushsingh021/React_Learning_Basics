import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import Github, { gitInfoLoader } from "./components/Github/Github.jsx";

//routes are created --  Layout have done the nesting of routes and on depending on routes outlet will render that element
//Method 1 : doing routing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     children:[
//       {
//         path: "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path: "contact_us",
//         element : <ContactUs/>
//       },

//     ]
//   },
// ]);

//Method 2 : Doing routing --(Better)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact_us" element={<ContactUs />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={gitInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

//gitInfoLoader -- (loader function) -- helps to do data call before even clicking (on hover basically) --due to which website works faster
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
