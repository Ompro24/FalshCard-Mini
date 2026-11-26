import { useNavigate } from "react-router-dom";
import "./Home.css";

// Landing page: short intro text, a button to the flashcards,
// and a few categories of terms to study.
function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 className="home-title">Dev-Term Flashcards</h1>
      <p className="home-subtitle">
        Learn programming concepts one card at a time.
      </p>

      <button className="home-button" onClick={() => navigate("/flashcards")}>
        Start Learning
      </button>

      <h2 className="category-heading">Categories</h2>
      <div className="category-list">
        <div className="category-item">Languages</div>
        <div className="category-item">Web Development</div>
        <div className="category-item">Data &amp; Databases</div>
      </div>
    </div>
  );
}

export default Home;
