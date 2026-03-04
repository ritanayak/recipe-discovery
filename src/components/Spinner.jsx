export default function Spinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
  spinner: {
    margin: "0 auto",
    width: "40px",
    height: "40px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #ff7043",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};