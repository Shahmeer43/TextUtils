import { useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
//import backgroundImage from "./toolsBackgroundImage.png";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const timeOut = useRef(null);

  let modeButton = (event) => {
    setMode(mode === "light" ? "dark" : "light");

    event.target.parentElement.style.backgroundColor =
      mode === "light" ? "blue" : "grey";

    document.body.style.backgroundColor = mode === "dark" ? "white" : "#032643";

    // document.body.style.backgroundImage = `url(${backgroundImage})`;

    showAlert(mode === "light" ? "Dark Mode Enabled" : "Dark Mode Disabled");
  };

  let showAlert = (msg) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    setAlert(msg);
    timeOut.current = setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div>
      <Navbar
        brandName="TextUtils"
        modeInfo={{ mode: mode, modeButton: modeButton }}
      />
      <Routes>
        <Route
          path="/"
          element={<Home mode={mode} alert={alert} showAlert={showAlert} />}
        />
        <Route path="/About" element={<About mode={mode} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
