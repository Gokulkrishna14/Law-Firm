import Home from "./Section/Home/Home";
import styles from "./App.css";

function App() {

  const containerStyles = {
    maxWidth: "1600px",
    margin: "0 auto",
    backgroundColor: "black",
  };

  return (
    <div style={containerStyles}>
      <Home />
    </div>
  );
}

export default App;
