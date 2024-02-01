import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartToggleProvider from "./assets/contexts/CartToggleContex.jsx";
import SizeChosenProvider from "./assets/contexts/SizeChosenContex.jsx";
import ProdDetailProvider from "./assets/contexts/ProdetailContext.jsx";
import ShippingProvider from "./assets/contexts/ShippingContext.jsx";
import ContactUsProvider from "./assets/contexts/ContactUsContext.jsx";
import OpensignUpProvider from "./assets/contexts/OpenSigUpContext";
import CheckingCardProvider from "./assets/contexts/CheckCartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <OpensignUpProvider>
    <React.StrictMode>
      <ContactUsProvider>
        <ShippingProvider>
          <CartToggleProvider>
            <SizeChosenProvider>
              <ProdDetailProvider>
                <CheckingCardProvider>
                  <App />
                </CheckingCardProvider>
              </ProdDetailProvider>
            </SizeChosenProvider>
          </CartToggleProvider>
        </ShippingProvider>
      </ContactUsProvider>
    </React.StrictMode>
  </OpensignUpProvider>
);
