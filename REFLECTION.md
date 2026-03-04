1. Most Challenging Part of the Project

The most challenging part of this project was managing asynchronous API calls while maintaining a smooth user experience. Since the app relies on TheMealDB API, it required proper handling of loading states (spinner), error messages, and empty results without disrupting the UI.

Another challenge was implementing persistent favorites using React’s Context API and local storage. Ensuring favorites updated instantly across pages and remained saved after refresh required careful state management.

Maintaining consistent, responsive layout and styling across all pages also required thoughtful component structure and CSS organization.

2. Design Decision

One key design decision was managing favorites using React’s Context API combined with local storage instead of passing props through multiple components.

This approach centralizes the favorites state in a single provider, making it accessible across all pages (Home, Recipe Details, Favorites) without prop drilling. It also ensures that when a user adds or removes a favorite, the UI updates instantly everywhere.

Using a custom hook to sync state with local storage allowed favorites to persist after page refresh while keeping the component logic clean and reusable. This separation of concerns improved maintainability and scalability of the application.