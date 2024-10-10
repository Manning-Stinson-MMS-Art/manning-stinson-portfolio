import React from "react";
import Homepage from "./pages/homepage/HomePage"; // Note the capitalization of HomePage.jsx
import Favicon from "./components/favicon/Favicon"; // Import the Favicon component

const App = () => {
  return (
    <div>
      <Favicon icon="/manningstinson.svg" /> // Updated to match the SVG in public folder
      <Homepage />
    </div>
  );
};

export default App;