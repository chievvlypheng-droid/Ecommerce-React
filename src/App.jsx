// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import router from "./routers/router";
import AuthProvider from "./Context/authContext";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./Context/cartContext";
function App() {
  <AuthProvider></AuthProvider>;
  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
