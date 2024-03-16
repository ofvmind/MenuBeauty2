import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { App_Router } from "./components/Router/App_Router";
import { Footer } from "./components/Footer/Footer";
import { App_Context } from "./App_Context/App_Context";
import { config_styles } from "./Config/config_styles";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [font, setFont] = useState(
    localStorage.getItem("font") || "Anta, sans-serif"
  );

  const [fontSize, setFontSize] = useState("normal");

  const [hideSlider, setHideSlider] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      const obj = config_styles.themes.light_theme;
      Object.keys(obj).forEach((key) => {
        document.body.style.setProperty(key, obj[key]);
      });
    } else {
      const obj = config_styles.themes.dark_theme;
      Object.keys(obj).forEach((key) => {
        document.body.style.setProperty(key, obj[key]);
      });
    }
  }, [theme]);

  useEffect(() => {
    if (fontSize === "big") {
      const obj = config_styles.fonts.size.big;
      Object.keys(obj).forEach(key => {
        document.body.style.setProperty(key, obj[key]);
      });
    } else if (fontSize === "normal") {
      const obj = config_styles.fonts.size.normal;
      Object.keys(obj).forEach(key => {
        document.body.style.setProperty(key, obj[key]);
      });
    } else if (fontSize === "little") {
      const obj = config_styles.fonts.size.little;
      Object.keys(obj).forEach(key => {
        document.body.style.setProperty(key, obj[key]);
      });
    }
  }, [fontSize])

  return (
    <App_Context.Provider
      value={{
        theme,
        setTheme,
        font,
        setFont,
        fontSize,
        setFontSize,
        hideSlider,
        setHideSlider
      }}
    >
      <div className="wrapper" style={{ fontFamily: font }}>
        <BrowserRouter>
          <App_Router />
          <Footer />
        </BrowserRouter>
      </div>
    </App_Context.Provider>
  );
}

export default App;
