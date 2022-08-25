import React, { useEffect, useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
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
        <Breadcrumb className="bg-light border d-flex justify-content-center pt-2 ">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href={`/decks/${deck.id}/`}>
            {deck.name}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Study</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <StudyCard deck={deck} cards={cards} index={currentCardIndex} />
    </Fragment>
  );
}

export default StudyDeck;
