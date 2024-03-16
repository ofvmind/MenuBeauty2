import decor from "../../../assets/images/icons/decor.svg";
import cl from "./Decor_Lines.module.css";

export const Decor_Lines = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <img className={cl.icon} src={decor} alt="decor" />
    </div>
  );
};