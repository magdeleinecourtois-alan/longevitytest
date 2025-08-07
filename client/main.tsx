import "./global.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Index from "./pages/Index";
import Tests from "./pages/Tests";
import Questionnaires from "./pages/Questionnaires";
import Protocols from "./pages/Protocols";
import ProtocolSport from "./pages/ProtocolSport";
import ProtocolNutrition from "./pages/ProtocolNutrition";
import ProtocolSleep from "./pages/ProtocolSleep";
import ProtocolAdditionals from "./pages/ProtocolAdditionals";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

console.log("main.tsx is loading...");

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log("Creating React root...");
  
  const App = () => {
    return React.createElement(BrowserRouter, {}, 
      React.createElement(Routes, {}, [
        React.createElement(Route, { key: "landing", path: "/", element: React.createElement(Landing) }),
        React.createElement(Route, { key: "signup", path: "/signup", element: React.createElement(SignUp) }),
        React.createElement(Route, { key: "login", path: "/login", element: React.createElement(Login) }),
        React.createElement(Route, { key: "overview", path: "/overview", element: React.createElement(Index) }),
        React.createElement(Route, { key: "tests", path: "/tests", element: React.createElement(Tests) }),
        React.createElement(Route, { key: "questionnaires", path: "/questionnaires", element: React.createElement(Questionnaires) }),
        React.createElement(Route, { key: "protocols", path: "/protocols", element: React.createElement(Protocols) }),
        React.createElement(Route, { key: "sport", path: "/protocols/sport", element: React.createElement(ProtocolSport) }),
        React.createElement(Route, { key: "nutrition", path: "/protocols/nutrition", element: React.createElement(ProtocolNutrition) }),
        React.createElement(Route, { key: "sleep", path: "/protocols/sleep", element: React.createElement(ProtocolSleep) }),
        React.createElement(Route, { key: "additionals", path: "/protocols/additionals", element: React.createElement(ProtocolAdditionals) }),
        React.createElement(Route, { key: "contact", path: "/contact", element: React.createElement(Contact) }),
        React.createElement(Route, { key: "notfound", path: "*", element: React.createElement(NotFound) })
      ])
    );
  };

  root.render(React.createElement(App));
  console.log("React app rendered!");
} else {
  console.error("Root element not found!");
} 
