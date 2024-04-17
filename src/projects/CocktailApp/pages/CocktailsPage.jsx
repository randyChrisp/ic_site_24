import React from "react";
import Cocktails from "../components/Cocktails";
import Favorites from "../components/Favorites";
import Search from "../components/Search";
import CocktailModal from "../components/CocktailModal";
import { useGlobalContext } from "../../../context/cocktailContext";

const CocktailsPage = () => {
  const { favorites, showCocktailModal } = useGlobalContext();

  return (
    <div>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Cocktails />
      {showCocktailModal && <CocktailModal />}
    </div>
  );
};

export default CocktailsPage;
