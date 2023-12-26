import { Outlet, useLocation } from "react-router-dom";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Conditionally render the Header and Footer based on the location
  // NavBar and Footer will not be rendered at account page
  const showHeader =
    location.pathname !== "/account" || location.pathname !== "/checkout"; // Example condition
  const showFooter = location.pathname !== "/account"; // Example condition

  return (
    <>
      <DynamicThemeProvider>
        <CartProvider>
          {showHeader && <Header />}
          <main>
            <Outlet />
          </main>
          {showFooter && <Footer />}
        </CartProvider>
      </DynamicThemeProvider>
    </>
  );
}

export default App;
