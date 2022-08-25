import React, { useEffect, useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
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
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            Card {cards.indexOf(card) + 1} of {cards.length}
          </Card.Title>
          <Card.Text>{showFront ? card.front : card.back}</Card.Text>
          {showFront ? (
            <Button variant="secondary" type="button" onClick={flipHandler}>
              Flip
            </Button>
          ) : (
            <div>
              <Button variant="secondary" type="button" onClick={flipHandler}>
                Flip
              </Button>{" "}
              <Button variant="primary" type="button" onClick={nextHandler}>
                Next
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default StudyCard;
