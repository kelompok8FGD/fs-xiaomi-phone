import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App.jsx";
import ProtectedRouteHOC from "./components/ProtectedRouteHOC.jsx";
import "./index.css";
import "./i18.js";
//import pages
import Home from "./pages/Home.jsx";
import Store from "./pages/Store.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import Profile from "./pages/Profile.jsx";
import Support from "./pages/Support.jsx"
import Error from "./pages/Error.jsx";
import SmartPhone from "./pages/Smartphone.jsx";
import About from "./pages/About.jsx";
import Agreement from "./pages/Agreement.jsx";
import Leadership from "./pages/Leadership.jsx";
import Privacy from "./pages/Privacy.jsx";
import Poco from "./pages/Poco.jsx";
import Xiaomi from "./pages/Xiaomi.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderCompleted from "./pages/OrderCompleted.jsx"
import DetailPoco from "./pages/ProductDetails/Poco/index.jsx";
import RedmiList from "./pages/Redmi.jsx";
import Search from "./pages/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/support", element: <Support /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <ProtectedRouteHOC element={<Cart />} /> },
      {
        path: "/account",
        element: <ProtectedRouteHOC element={<Account />} />,
      },
      {
        path: "/profile",
        element: <ProtectedRouteHOC element={<Profile />} />,
      },
      { path: "/smartphone", element: <SmartPhone /> },
      { path: "/About", element: <About /> },
      { path: "/Agreement", element: <Agreement /> },
      { path: "/Leadership", element: <Leadership /> },
      { path: "/Privacy", element: <Privacy /> },
      { path: "/Poco", element: <Poco /> },
      { path: "/redmi", element: <RedmiList /> },
      { path: "/xiaomi", element: <Xiaomi /> },
      { path: "/search", element: <Search /> },
      { path: "*", element: <Error /> },
      {
        path: "/checkout",
        element: <ProtectedRouteHOC element={<Checkout />} />,
      },
      {
        path: "/ordercompleted",
        element: <ProtectedRouteHOC element={<OrderCompleted />} />,
      },
      { path: "/detail/:id", element: <DetailPoco /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
