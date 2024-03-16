import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import { App_Context } from "../../App_Context/App_Context";

const Menu_Item = ({ item }) => {
  const { theme, setTheme } = useContext(App_Context);

  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "hidden";

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="product__item">
        <div className="product__description">
          <p className="p__title">{item.title}</p>
          <p className="p__quantity">{item.quantity}</p>
          <p className="p__price">{item.price} грн</p>
        </div>
        <img src={item.image} alt="img not found" className="product__img" />
      </div>
      <Modal visible={isOpen} setVisible={setIsOpen}>
        <div className="about">
          <img src={item.image} alt="img" />
          <div className="about__text">
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="description">
          <div
            className="d_img"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <span>{item.title}</span>
          <p>{item.description}</p>
        </div>
      </Modal>
    </>
  );
};

export default Menu_Item;
