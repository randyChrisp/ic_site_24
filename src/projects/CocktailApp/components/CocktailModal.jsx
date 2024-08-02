import { useGlobalContext } from "../../../context/cocktailContext";
import "../Cocktails.css";

const CocktailModal = () => {
  const { selectedDrink, closeCocktailModal, ingredients } = useGlobalContext();

  const {
    strDrinkThumb: image,
    strDrink: title,
    strInstructions: text,
  } = selectedDrink;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p style={{ color: "black" }}>
            <b>Instructions:</b>
          </p>
          <p>{text}</p>
          <p style={{ color: "black" }}>
            <b>Ingredients:</b>
          </p>
          <ul
            style={{
              display: "inline-flex",
              alignSelf: "center",
              color: "#475569",
            }}
          >
            <li>{ingredients.filter((item) => item).join(", ")}</li>
          </ul>
          <button
            className="btn btn-hipster close-btn"
            onClick={closeCocktailModal}
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CocktailModal;
