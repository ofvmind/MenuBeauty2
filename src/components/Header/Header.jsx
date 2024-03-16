import { useContext, useEffect, useState } from "react";
import { Burger } from "../UI/Burger/Burger";
import { Search_Icon } from "../UI/search_icon/Search_Icon";
import "./Header.scss";
import { Back } from "../UI/Back/Back";
import { Link } from "react-router-dom";
import Brand from "../UI/Brand/Brand";
import { App_Context } from "../../App_Context/App_Context";
import cl from "./backward.module.css";

function Header({
  showSearch,
  focusSearchInput,
  setShowSearch,
  searchQuery,
  setSearchQuery,
  searchRef,
}) {

  const { hideSlider, setHideSlider } = useContext(App_Context);

  useEffect(() => {
    if (!searchQuery)
      setTimeout(() => {
        document.querySelector(".flickity-enabled").style.top = "0";
      }, 100);
  }, [searchQuery]);

  const [showNav, setShowNav] = useState(false);

  const rootClasses = [cl.backward];
  if (showNav) rootClasses.push(cl.active);
  const [x, setX] = useState(false);
  if (x) rootClasses.push(cl.disactive);


  if (showNav) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <div className="header">
      <Brand />

      <Search_Icon
        open={showSearch}
        onClick={() => {
          if (!showSearch) {
            setShowSearch(true);
            setTimeout(() => focusSearchInput(), 10);
          } else {
            setShowSearch(false);
            setSearchQuery("");
          }
        }}
      />
      <div className="search">
        <input
          tabIndex={111}
          ref={searchRef}
          className={showSearch ? "menu__filter active" : "menu__filter"}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setHideSlider(true);
          }}
          placeholder="Пошук"
          type="text"
        />
      </div>

      <Burger
        onClick={() => {
          setShowNav(true);
        }}
      />
      <div className={rootClasses.join(' ')} />
      <div className={showNav ? "header__nav show" : "header__nav"}>
        <Back style={{ opacity: 0.4 }} onClick={() => {
          setX(true);
          setShowNav(false);
          setTimeout(() => {
            setX(false);
          }, 400);
        }} />
        <ul className="header__nav-list">
          <li className="header__nav-item">Контакти</li>
          <li className="header__nav-item">Ліцензія</li>
          <li className="header__nav-item">
            <Link
              style={{ color: "#bebcbc", textDecoration: "none" }}
              to="/admin"
            >
              ADMIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
