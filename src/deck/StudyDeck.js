import React, { useEffect, useState, Fragment } from "react";
import StudyCard from "./StudyCard";

function StudyDeck({ deck }) {
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    if (!deck) return;
    setCards(deck.cards);
  }, [deck]);

  if (!deck) return null;
  return (
    <Fragment>
      <div>
        <nav
          ariaLabel="breadcrumb"
          className="bg-light border d-flex justify-content-center pt-2"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              {" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              {" "}
              <a href={`/decks/${deck.id}/`} style={{ textDecoration: "none" }}>
                {deck.name}
              </a>
            </li>
            <li className="breadcrumb-item active">Study</li>
          </ol>
        </nav>
      </div>
      <StudyCard deck={deck} cards={cards} index={currentCardIndex} />
    </Fragment>
  );
}

export default StudyDeck;
