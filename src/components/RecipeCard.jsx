import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeCard({ meal }) {
  const { isFavorite } = useFavorites();
  if (!meal) return null;

  const favorite = isFavorite(meal.idMeal);

  return (
    <div style={styles.card}>
      <Link to={`/recipe/${meal.idMeal}`} style={styles.link}>
        {/* Title above image */}
        <div style={styles.content}>
          <h3 style={styles.title}>{meal.strMeal}</h3>
          {favorite && <span style={styles.favorite}>❤️</span>}
        </div>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={styles.image}
        />
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    width: "100%",
    maxWidth: "280px",
    margin: "0.5rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "500",
    margin: 0,
  },
  favorite: {
    fontSize: "1.2rem",
    color: "red",
  },
};