import "./Flashcard.css";

function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div className="card-scene" onClick={onFlip}>
      <div className={isFlipped ? "card card-flipped" : "card"}>
        /* display the information at the front*/
        <div className="card-face card-front">
          <h2>{card.term}</h2>
          <p className="card-hint">Click the card to see the definition</p>
        </div>

        /* display information at the backof the card*/
        <div className="card-face card-back">
          <p className="card-definition">{card.definition}</p>
          <p className="card-hint">Click the card to go back</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
