import icon from "../../../assets/images/icons/unSearch.png";
import cl from "./Back.module.css";

export const Back = (props) => {
  return <img {...props} className={cl.icon} src={icon} alt="img not found" />;
};