import { Decor_Lines } from "../UI/decor_lines/Decor_Lines";
import Bar_Menu_Item from "./Bar_Menu_Item";

function Bar_Menu_List({ products, searchQuery }) {
  return (
    <div style={{display: searchQuery && "none"}} className="bar__conteiner">
      <ul className="bar__menu__list">
       <p className="bar__title">Alcohol</p>
      <Decor_Lines />
        <li style={{ border: "none" }} className="bar__menu__item">
          <p
            style={{
              color: "var(--text-color-main)",
              fontSize: 25,
              fontWeight: "bold",
              border: "none",
            }}
          >
            Напої
          </p>
          <div>
            <p
              style={{
                color: "var(--text-color-main)",
                fontSize: 25,
                fontWeight: "bold",
                border: "none",
              }}
            >
              50<span style={{ fontSize: 15 }}>ml</span>
            </p>
            &nbsp;
            <p
              style={{
                color: "var(--text-color-main)",
                fontSize: 25,
                fontWeight: "bold",
                border: "none",
              }}
            >
              100<span style={{ fontSize: 15 }}>ml</span>
            </p>
          </div>
        </li>
        {products.map((item) => (
          <Bar_Menu_Item key={item.id} item={item} />
        ))}
        <div style={{ textAlign: "center", fontSize: 100, marginTop: "-60px", color: "var(--text-color-main)" }}>
          ...
        </div>
      </ul>
    </div>
  );
}

export default Bar_Menu_List;
