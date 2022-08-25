import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck, cards }) {
  console.log(cards);
  return (
    <section>
      <div></div>
      <h2>{deck.name}: Study</h2>
      <h4>Not Enough Cards.</h4>
      <p>
        You need at least 3 cards to study. There are {cards.length} cards in
        this deck
      </p>
      <div>
        <Link to={`/decks/${deck.id}/cards/new`}>
          <Button variant="primary" type="button">
            Add Cards
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default NotEnoughCards;
