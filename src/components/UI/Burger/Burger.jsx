import cl from "./Burger.module.css";
import icon from "../../../assets/images/icons/burger.svg";

export const Burger = ({ ...props }) => {
  return <img {...props} className={cl.icon} src={icon} alt="img not found" />
};