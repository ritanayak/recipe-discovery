### Recipe Discovery App

## Description

**Recipe Discovery App** is a responsive web application that allows users to explore, search, and manage recipes from a wide variety of categories. It leverages [TheMealDB API](https://www.themealdb.com/) to fetch recipes dynamically, providing up-to-date and diverse meal options. The app emphasizes a smooth user experience with features like persistent favorites, detailed recipe views, and intuitive navigation.

## Features

1. **Browse Recipes by Category**  
   Explore recipes sorted by categories such as Beef, Chicken, Seafood, Dessert, and more. Categories are displayed visually with images for easy selection.

2. **Search Recipes by Name**  
   Quickly find recipes using the search bar. Results display recipe names and images dynamically.

3. **Detailed Recipe View**  
   Each recipe page shows:  
   - Recipe name and high-quality image  
   - Step-by-step cooking instructions  
   - Option to add or remove the recipe from favorites

4. **Favorites Management**  
   Save recipes to a favorites list that persists across browser sessions using local storage. Easily view and manage favorite recipes on a dedicated page.

5. **Responsive Design**  
   Works seamlessly on mobile, tablet, and desktop devices.

6. **Loading & Error Handling**  
   - Loading spinners while fetching data  
   - Clear error messages if API requests fail  
   - Fallback messages when no recipes or search results are found

7. **Reusable Components**  
   Components like RecipeCard, Spinner, ErrorMessage, and Navbar ensure consistent styling and behavior across the app.

8. **Persistent State with Context API**  
   Favorites are managed globally using React Context along with a custom useLocalStorage hook to keep data persistent.

## Installation

1. **Clone the repository**  
   
   git clone https://github.com/your-username/recipe-discovery-app.git
   
   cd recipe-discovery-app

2. Install dependencies:

      npm install

      Running the Project Locally

1. Start the development server

     npm run dev

      By default, Vite runs the app on http://localhost:5173
.

2. Open the app in your browser

Navigate to the local URL to start exploring recipes.


# Dependencies

   * React 18+

   * React Router DOM

   * Vite

   * TheMealDB API

