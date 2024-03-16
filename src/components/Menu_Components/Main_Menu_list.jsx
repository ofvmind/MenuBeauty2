import Menu_List from "./Menu_List";

function Main_Menu_List({
  setQuery,
  setShowSearch,
  searchPizza,
  searchJuice,
  searchCocktails,
  searchAlco,
  searchWine,
  refer1,
  refer2,
  refer3,
  refer4,
  refer5,
}) {
  if (
    !searchPizza.length &&
    !searchJuice.length &&
    !searchCocktails.length &&
    !searchAlco.length &&
    !searchWine.length
  )
    return (
      <div className="item__not-found">
        <p>Такого товару не знайдено</p>
        <span onClick={() => {
          setQuery('');
          setShowSearch(false);
        }}>Переглянути меню</span>
      </div>
    );

  return (
    <div>
      <Menu_List tabIndex={1} title="Наша піцца" products={searchPizza} refer={refer1} />
      <Menu_List tabIndex={2} title="Соки" products={searchJuice} refer={refer2} />
      <Menu_List tabIndex={3} title="Коктейлі" products={searchCocktails} refer={refer3} />
      <Menu_List tabIndex={4} title="Алкоголь" products={searchAlco} refer={refer4} />
      <Menu_List tabIndex={5} title="Наші вина" products={searchWine} refer={refer5} />
    </div>
  );
}

export default Main_Menu_List;
