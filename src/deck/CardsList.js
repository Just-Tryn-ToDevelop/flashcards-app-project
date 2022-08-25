import React from "react";
import ListCard from "./ListCard";

function CardsList({ deck }) {
  const list = deck.cards.map((card) => (
    <ListCard key={card.id} deck={deck} card={card} />
  ));

  return (
    <section>
      <h2 style={{ marginTop: "30px" }}>Cards</h2>
      <div>{list}</div>
    </section>
  );
}

export default CardsList;
