import { useContext } from "react";
import Menu_Item from "./Menu_Item";
import { App_Context } from "../../App_Context/App_Context";

const Menu_List = ({ title, products, refer, ...props }) => {
  const { theme, setTheme } = useContext(App_Context);

  if (!products.length) return null;

  return (
    <>
      <div className="products__title">
        <p {...props} ref={refer} >
          {title}
        </p>
      </div>
      <div className="products__list">
        {products.map((product) => (
          <Menu_Item {...props} refer={refer} key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default Menu_List;
