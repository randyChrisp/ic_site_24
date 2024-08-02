import { useGlobalContext } from "../../../context/cocktailContext";
import "../Cocktails.css";

const Favorites = () => {
  const { favorites, selectDrink, removeFromFavorites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idDrink, strDrinkThumb: image } = item;
            return (
              <div key={idDrink} className="favorite-item">
                <img
                  src={image}
                  className="favorites-img img"
                  onClick={() => selectDrink(idDrink, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idDrink)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
