import { useContext, useState } from "react";
import cl from "./Modal.module.css";
import { App_Context } from "../../../App_Context/App_Context";

function Modal({ visible, setVisible, children }) {
  const { theme, setTheme } = useContext(App_Context);

  const rootClasses = [cl.modal];
  const bodyClasses = [cl.modal__body];
  if (visible) {
    document.body.style.overflow = "hidden";
    rootClasses.push(cl.active);
  } else {
    document.body.style.overflow = "auto";
  }

  const [close, setClose] = useState(false);
  if (close) {
    rootClasses.push(cl.hidden);
    bodyClasses.push(cl.hidden);
  }

  const styles = {
    lightThemeModal: {
      backgroundColor: "rgba(255, 255, 255, .5)",
    },
    darkThemeModal: {
      backgroundColor: "rgba(0, 0, 0, .7)",
    },
  };

  return (
    <div
      onClick={() => {
        setClose(true);
        setTimeout(() => {
          setClose(false);
          setVisible(false);
        }, 200);
      }}
      className={rootClasses.join(" ")}
      style={theme === "light" ? styles.lightThemeModal : styles.darkThemeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={bodyClasses.join(" ")}
      >
        {children}
        <h1
          style={{textAlign: "center"}}
          onClick={() => {
            setClose(true);
            setTimeout(() => {
              setClose(false);
              setVisible(false);
            }, 200);
          }}
          className="decor"
        >
          &times;
        </h1>
      </div>
    </div>
  );
}

export default Modal;
