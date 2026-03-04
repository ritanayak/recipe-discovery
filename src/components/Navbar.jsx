import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?query=${query}`);
    setQuery("");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          🍽 Recipe Discovery
        </Link>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      <div>
        <Link to="/favorites" style={styles.link}>
          ❤️ Favorites
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#ff7043",
    color: "white",
  },
  logo: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    gap: "0.5rem",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "none",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
};