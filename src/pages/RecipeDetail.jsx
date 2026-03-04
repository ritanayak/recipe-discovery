import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  // Show spinner while loading
  if (loading) return <Spinner />;

  // Show error if API fails
  if (error) return <ErrorMessage message={error} />;

  // Safety check if data is missing
  if (!data || !data.meals) return <p>Recipe not found.</p>;

  const meal = data.meals[0];
  const favorite = isFavorite(recipeId);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", textAlign: "center" }}>
      <h1>{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
      />
      <p style={{ textAlign: "left", marginTop: "1rem" }}>{meal.strInstructions}</p>

      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          backgroundColor: favorite ? "#ff6b6b" : "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() =>
          favorite ? removeFavorite(recipeId) : addFavorite(recipeId)
        }
      >
        {favorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}