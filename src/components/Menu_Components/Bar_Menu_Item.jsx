function Bar_Menu_Item({ item }) {
  return (
    <li className="bar__menu__item">
      <p className="b_title">{item.title}</p>
      <div>
        <p className="b_quantity">{item.half}<span>грн</span></p>
        &nbsp;
        <p className="b_quantity">{item.full}<span>грн</span></p>
      </div>
    </li>
  );
}

export default Bar_Menu_Item;
