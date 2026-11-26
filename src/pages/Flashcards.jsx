import { useState } from "react";
import Flashcard from "../components/Flashcard";
import { flashcards } from "../data/flashcards";
import "./Flashcards.css";

// Flashcards page: shows one card at a time.
// The user can flip the card, go to the next/previous card,
// or shuffle the deck into a random order.
function Flashcards() {
  const [cards, setCards] = useState(flashcards); // the deck (order can change)
  const [currentIndex, setCurrentIndex] = useState(0); // which card is shown
  const [isFlipped, setIsFlipped] = useState(false); // is the card flipped?

  // Go to the previous card, or wrap around to the last card.
  function goToPrevious() {
    setIsFlipped(false);
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  // Go to the next card, or wrap around to the first card.
  function goToNext() {
    setIsFlipped(false);
    if (currentIndex === cards.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // Shuffle the deck into a random order and go back to the first card.
  function shuffleCards() {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  return (
    <div className="flashcards">
      <h1 className="flashcards-title">Flashcards</h1>
      <p className="flashcards-counter">
        Card {currentIndex + 1} of {cards.length}
      </p>

      <Flashcard
        card={cards[currentIndex]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <div className="flashcard-buttons">
        <button className="nav-button" onClick={goToPrevious}>
          Previous
        </button>
        <button className="nav-button" onClick={shuffleCards}>
          Shuffle
        </button>
        <button className="nav-button" onClick={goToNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
