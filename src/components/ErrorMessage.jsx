import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>⚠️ Something Went Wrong</h2>
      <p style={styles.message}>
        {message || "An unexpected error occurred. Please try again."}
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    margin: "2rem auto",
    maxWidth: "500px",
    border: "1px solid #ff4d4f",
    borderRadius: "8px",
    backgroundColor: "#ffe6e6",
  },
  title: {
    color: "#d32f2f",
    marginBottom: "1rem",
  },
  message: {
    color: "#333",
  },
};