import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

function StudyCard({ deck, cards, index }) {
  const [card, setCard] = useState([cards]);
  const [showFront, setShowFront] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (!cards) return;
    setCard(cards[index]);
  }, [cards]);

  if (cards.length < 3) {
    return <NotEnoughCards deck={deck} cards={cards} />;
  }

  const flipHandler = () => {
    setShowFront(!showFront);
  };

  const nextHandler = () => {
    if (cards.indexOf(card) === cards.length - 1) {
      const result = window.confirm(
        "Restart cards?\n\nClick 'cancel' to return to the home page."
      );
      if (result) {
        history.go(0);
      } else history.push("/");
    }
    index = cards.indexOf(card) + 1;
    setCard(cards[index]);
    setShowFront(!showFront);
  };

  if (!card) return null;
  return (
    <Fragment>
      {showFront ? <h2>Study: {deck.name}</h2> : <h2>{deck.name}: Study</h2>}
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">Card {cards.indexOf(card) + 1} of {cards.length}</h5>
          <p className="card-text">{showFront ? card.front : card.back}</p>
          {showFront ? (
            <button className="btn btn-secondary" type="button" onClick={flipHandler}>
              Flip
            </button>
          ) : (
            <div>
              <button className="btn btn-secondary" type="button" onClick={flipHandler}>
              Flip
            </button>{" "}
              <button className="btn btn-primary" type="button" onClick={nextHandler}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default StudyCard;
