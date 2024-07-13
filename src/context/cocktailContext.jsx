import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const CocktailContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(CocktailContext);
};

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else favorites = [];
  return favorites;
};

const allDrinksUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const CocktailContextProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCocktailModal, setShowCocktailModal] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const fetchDrinks = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.drinks) {
        setDrinks(data.drinks);
      } else {
        setDrinks([]);
      }
    } catch (error) {
      console.error(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinks(allDrinksUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;

    fetchDrinks(`${allDrinksUrl}${searchTerm}`);
  }, [searchTerm]);

  const fetchRandomDrink = () => {
    fetchDrinks(randomDrink);
  };

  const selectDrink = (idDrink, favoriteDrink) => {
    let drink;
    if (favoriteDrink) {
      drink = favorites.find((item) => item.idDrink === idDrink);
    } else {
      drink = drinks.find((item) => item.idDrink === idDrink);
    }

    if (drink) {
      const ingredients = Object.keys(drink)
        .filter((key) => key.startsWith("strIngredient") && drink[key] !== null)
        .map((key) => drink[key]);
      setIngredients(ingredients);
    } else {
      console.log("Error: Unable to retrieve drinks data from the API");
    }

    setSelectedDrink(drink);
    setShowCocktailModal(true);
  };

  const closeCocktailModal = () => {
    setShowCocktailModal(false);
  };

  const addToFavorites = (idDrink) => {
    const alreadyFavorite = favorites.find((item) => item.idDrink === idDrink);
    const drink = drinks.find((item) => item.idDrink === idDrink);
    if (alreadyFavorite) return;
    const newFavorites = [...favorites, drink];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (idDrink) => {
    const newFavorites = favorites.filter((item) => item.idDrink !== idDrink);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <CocktailContext.Provider
      value={{
        drinks,
        allDrinksUrl,
        ingredients,
        loading,
        searchTerm,
        setSearchTerm,
        fetchDrinks,
        fetchRandomDrink,
        showCocktailModal,
        selectedDrink,
        selectDrink,
        closeCocktailModal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
