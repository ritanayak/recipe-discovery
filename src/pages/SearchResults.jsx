import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  if (!data || !data.meals) {
    return <p>No recipes found for "{searchQuery}".</p>;
  }

  return (
    <div className="grid">
      {data.meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}