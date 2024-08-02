import { useGlobalContext } from "../../../context/cocktailContext";
import { useState } from "react";
import "../Cocktails.css";

const Search = () => {
  const { setSearchTerm, fetchRandomDrink, fetchDrinks, allDrinksUrl } =
    useGlobalContext();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomDrink = () => {
    setSearchTerm("");
    setText("");
    fetchRandomDrink();
  };

  const handleReset = () => {
    setText("");
    fetchDrinks(allDrinksUrl);
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Your favorite cocktail..."
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="btn"
          onClick={handleRandomDrink}
        >
          Surprise me!
        </button>
        <button className="btn btn-outline" type="btn" onClick={handleReset}>
          Reset
        </button>
      </form>
    </header>
  );
};

export default Search;
