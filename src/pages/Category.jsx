import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Category() {
  const { categoryName } = useParams();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  if (!data || !data.meals) {
    return <p>No recipes found in this category.</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
        {categoryName} Recipes
      </h2>
      <div className="grid">
        {data.meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}