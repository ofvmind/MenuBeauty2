import { useContext, useEffect } from "react";
import "./Menu_Points.css";
import { App_Context } from "../../../App_Context/App_Context";

const Menu_Points = ({ searchQuery, focusOnProducts, pizzaRef, juiceRef, cocktailRef, strongRef, wineRef, barMenuRef }) => {
  const { theme } = useContext(App_Context);

  return (
    <div style={{display: searchQuery && "none"}} className="menu__points">
    <div className="point"
      onClick={() => focusOnProducts(pizzaRef)}
    >
      <p>Піцца</p>
    </div>
    <div className="point" onClick={() => focusOnProducts(juiceRef)}>
      <p>Соки</p>
    </div>
    <div className="point" onClick={() => focusOnProducts(cocktailRef)}>
      <p>Коктейлі</p>
    </div>
    <div className="point" onClick={() => focusOnProducts(strongRef)}>
      <p>Алкоголь</p>
    </div>
    <div className="point" onClick={() => focusOnProducts(wineRef)}>
      <p>Вина</p>
    </div>
    <div className="point" onClick={() => focusOnProducts(barMenuRef)}>
      <p>Бар</p>
    </div>
  </div>
  );
};

export default Menu_Points;