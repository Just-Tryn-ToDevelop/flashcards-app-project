import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck, cards }) {
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
          <button className="btn btn-primary" type="button">
            Add Cards
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NotEnoughCards;
