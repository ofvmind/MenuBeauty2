import icon from "../../../assets/images/icons/search.svg";
import unIcon from "../../../assets/images/icons/unSearch.png";
import cl from "./Search_Icon.module.css";

export const Search_Icon = ({ open, ...props }) => {
  return (
    <>
      {!open
        ?  <img {...props} src={icon} className={cl.icon} alt="img not found" />
        :  <img {...props} src={unIcon} className={cl.un_icon} alt="img not found" />
      }
    </>
  );
};