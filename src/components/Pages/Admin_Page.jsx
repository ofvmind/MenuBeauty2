import { useContext, useEffect } from "react";
import "./Admin_Page.scss";
import { App_Context } from "../../App_Context/App_Context";
import { Link } from "react-router-dom";
import { Theme_Handler } from "../UI/Theme_Handler/Theme_Handler";

function Admin_Page() {
  const { font, setFont, theme, setTheme, fontSize, setFontSize } = useContext(App_Context);

  useEffect(() => {
    localStorage.setItem("font", font);
    document.body.style.overflow = "auto";
  }, [font]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="admin__page">
      <Link to="/" className="redirect">
        Головна
      </Link>
      <div className="fonts__row">
        <p className="select">Виберіть Шрифт</p>
        <ul className="fonts__list">
          <li
            style={{ border: font === "Anta" && "3px solid white" }}
            onClick={() => setFont("Anta")}
            className="font__item red"
          >
            1
          </li>
          <li
            style={{ border: font === "arial" && "3px solid white" }}
            onClick={() => setFont("arial")}
            className="font__item pink"
          >
            2
          </li>
          <li
            style={{ border: font === "Madimi One" && "3px solid white" }}
            onClick={() => setFont("Madimi One")}
            className="font__item blue"
          >
            3
          </li>
          <li
            style={{ border: font === "Poppins" && "3px solid white" }}
            onClick={() => setFont("Poppins")}
            className="font__item green"
          >
            4
          </li>
          <li
            style={{
              border: font === "'Lobster', cursive" && "3px solid white",
            }}
            onClick={() => setFont("'Lobster', cursive")}
            className="font__item purple"
          >
            5
          </li>
          <li
            style={{ border: font === "Playfair Display" && "3px solid white" }}
            onClick={() => setFont("Playfair Display")}
            className="font__item orange"
          >
            6
          </li>
        </ul>
      </div>
      <div className="font-size__row">
        <div className="size__item">
          <span>Великий</span>
          <div onClick={() => setFontSize('big')} className="radio" style={{ backgroundColor: fontSize === "big" && "blue" }}/>
        </div>
        <div className="size__item" >
          <span>Стандартний</span>
          <div onClick={() => setFontSize('normal')} className="radio" style={{ backgroundColor: fontSize === "normal" && "blue" }} />
        </div>
        <div className="size__item">
          <span>Маленький</span>
          <div onClick={() => setFontSize('little')} className="radio" style={{ backgroundColor: fontSize === "little" && "blue" }}/>
        </div>
      </div>
      <div className="theme__row">
        <p>Тема Світла/Темна</p>
        <Theme_Handler
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        />
      </div>
    </div>
  );
}

export default Admin_Page;
