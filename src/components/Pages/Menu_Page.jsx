import { useContext, useRef, useState } from "react";
import {
  cocktail,
  pizza,
  juice,
  strongAlco,
  wine,
  bar_menu,
} from "../Menu_Components/products";
import Menu_List from "../Menu_Components/Menu_List";
import { useMenuFilter } from "../Menu_Components/Menu_Filter";
import { Search_Icon } from "../UI/search_icon/Search_Icon";
import Main_Menu_List from "../Menu_Components/Main_Menu_list";
import Header from "../Header/Header";
import Menu_Points from "../UI/Menu_Points/Menu_Points";
import { App_Context } from "../../App_Context/App_Context";
import { Carousel } from "../UI/Carousel/Carousel";
import Bar_Menu_List from "../Menu_Components/Bar_Menu_List";

function Menu_Page() {
  const { theme, setTheme } = useContext(App_Context);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const searchPizza = useMenuFilter(pizza, searchQuery);
  const searchJuice = useMenuFilter(juice, searchQuery);
  const searchCocktails = useMenuFilter(cocktail, searchQuery);
  const searchAlco = useMenuFilter(strongAlco, searchQuery);
  const searchWine = useMenuFilter(wine, searchQuery);

  const pizzaRef = useRef();
  const juiceRef = useRef();
  const cocktailRef = useRef();
  const strongRef = useRef();
  const wineRef = useRef();
  const barMenuRef = useRef();

  const searchRef = useRef();

  const focusSearchInput = () => {
    searchRef.current.focus();
  };

  const focusOnProducts = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop -25,
      behavior: "smooth",
    });

  return (
    <>
      <Header
        showSearch={showSearch}
        focusSearchInput={focusSearchInput}
        setShowSearch={setShowSearch}
        setSearchQuery={setSearchQuery}
        searchRef={searchRef}
        searchQuery={searchQuery}
      />
      &nbsp;
      <Carousel searchQuery={searchQuery}/>
      &nbsp;

      <Menu_Points 
        searchQuery={searchQuery}
        focusOnProducts={focusOnProducts}
        pizzaRef={pizzaRef}
        juiceRef={juiceRef}
        cocktailRef={cocktailRef}
        strongRef={strongRef}
        wineRef={wineRef}
        barMenuRef={barMenuRef}
      />
      <div className={searchQuery ? "menu desktopMargin mobileMargin" : "menu"}>
        <Main_Menu_List
          setQuery={setSearchQuery}
          setShowSearch={setShowSearch}
          searchPizza={searchPizza}
          searchJuice={searchJuice}
          searchCocktails={searchCocktails}
          searchAlco={searchAlco}
          searchWine={searchWine}
          refer1={pizzaRef}
          refer2={juiceRef}
          refer3={cocktailRef}
          refer4={strongRef}
          refer5={wineRef}
        />
        <p tabIndex={12} ref={barMenuRef} style={{display: searchQuery && "none"}} className="bar">Бар Меню</p>
        <Bar_Menu_List searchQuery={searchQuery} products={bar_menu} />
      </div>
    </>
  );
}

export default Menu_Page;
