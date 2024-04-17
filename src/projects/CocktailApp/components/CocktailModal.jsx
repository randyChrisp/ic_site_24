import { useGlobalContext } from "../../../context/cocktailContext";
import "../Cocktails.css";

const CocktailModal = () => {
  const { selectedDrink, closeCocktailModal } = useGlobalContext();

  const {
    strDrinkThumb: image,
    strDrink: title,
    strInstructions: text,
    strSource: source,
  } = selectedDrink;

  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CocktailModal;
