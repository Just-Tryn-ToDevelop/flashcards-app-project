import React, { Fragment } from "react";
import { deleteDeck } from "../utils/api";
import { useHistory, Link } from "react-router-dom";

function Deck({ deck }) {
  const history = useHistory();
  const handleDelete = async (id) => {
    id = deck.id;
    const result = window.confirm("Are you sure you want to delete this deck?");
    if (result) {
      await deleteDeck(id);
      history.go(0);
    }
  };

  return (
    <Fragment>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <div className="mb-2 text-muted" style={{ textAlign: "right" }}>
            {deck.cards.length} cards
          </div>
          <p className="card-text">{deck.description}</p>
          <Link to={`/decks/${deck.id}`} style={{textDecoration: "none"}}>
            <button className="btn btn-secondary" type="button" >
              View
            </button>{" "}
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button className="btn btn-primary" type="button">
              Study
            </button>{" "}
          </Link>
          <button className="btn btn-danger float-right" onClick={handleDelete}>
            Delete
          </button>{" "}
        </div>
      </div>
    </Fragment>
  );
}

export default Deck;
