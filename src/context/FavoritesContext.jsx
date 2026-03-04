import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// ✅ FavoritesContext handles global favorite recipes
const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Persist favorites across sessions using custom hook
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // Add a recipe to favorites (no duplicates)
  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  // Remove a recipe from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav !== id));
  };

  // Check if a recipe is already favorited
  const isFavorite = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook to consume context easily
export function useFavorites() {
  return useContext(FavoritesContext);
}