import { Outlet, useLocation } from "react-router-dom";
import { DynamicThemeProvider } from "./context/DynamicThemeContext";
{/*Delete cart provider only after fully implementing redux*/}
import { CartProvider } from "./context/CartProvider"; 
import Header from "./components/organism/Header/Header";
import Footer from "./components/organism/Footer";
{/*Imports for redux cart*/}
import { store } from './redux/store'
import { Provider } from 'react-redux'
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
        <Provider store={store}>
          <CartProvider>
            {showHeader && <Header />}
            <main>
              <Outlet />
            </main>
            {showFooter && <Footer />}
          </CartProvider>
        </Provider>
      </DynamicThemeProvider>
    </>
  );
}

export default App;
