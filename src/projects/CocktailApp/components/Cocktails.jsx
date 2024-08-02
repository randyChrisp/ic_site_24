import { useGlobalContext } from "../../../context/cocktailContext";
import { BsHandThumbsUp } from "react-icons/bs";
import "../Cocktails.css";

const Cocktails = () => {
  const { drinks, loading, selectDrink, addToFavorites } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (drinks.length < 1) {
    return (
      <section className="section">
        <h4>No cocktails matched your search criteria. Please try again.</h4>
      </section>
    );
  }

  return (
    <>
      <section className="section-center">
        {drinks.map((singleDrink) => {
          const {
            idDrink,
            strDrink: title,
            strDrinkThumb: image,
          } = singleDrink;

          return (
            <article key={idDrink} className="single-drink">
              <img
                src={image}
                alt={title}
                className="img"
                onClick={() => selectDrink(idDrink)}
              />
              <footer>
                <h5>{title}</h5>
                <button
                  className="like-btn"
                  onClick={() => addToFavorites(idDrink)}
                >
                  <BsHandThumbsUp />
                </button>
              </footer>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Cocktails;
