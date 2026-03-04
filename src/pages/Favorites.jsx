// src/pages/Favorites.jsx
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Favorites() {  //  default export
  const { favorites } = useFavorites();

  if (!favorites || favorites.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        You have no favorite recipes yet. Browse and add some! ❤️
      </p>
    );
  }

  return (
    <div className="grid">
      {favorites.map((id) => (
        <FavoriteItem key={id} id={id} />
      ))}
    </div>
  );
}

function FavoriteItem({ id }) {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || !data.meals) return null;

  return <RecipeCard meal={data.meals[0]} />;
}