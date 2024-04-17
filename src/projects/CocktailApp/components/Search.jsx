import { useGlobalContext } from "../../../context/cocktailContext";
import { useState } from "react";
import "../Cocktails.css";

const Search = () => {
  const { setSearchTerm, fetchRandomDrink } = useGlobalContext();

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
      </form>
    </header>
  );
};

export default Search;
