import light_theme from "../../../assets/images/icons/lightTheme.png";
import dark_theme from "../../../assets/images/icons/darkTheme.png";
import cl from "./Theme_Handler.module.css";
import { useContext } from "react";
import { App_Context } from "../../../App_Context/App_Context";

export const Theme_Handler = (props) => {
  const {theme} = useContext(App_Context);
  return (
   <>
     {theme === "light"
       ? <img {...props} className={cl.icon} src={dark_theme} alt="not found" />
       : <img {...props} className={cl.icon} src={light_theme} alt="not found" />
     }
   </>
  );
};
