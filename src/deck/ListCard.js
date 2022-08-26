import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

function ListCard({ card, deck }) {
  const history = useHistory();
  const handleDelete = async (id) => {
    id = card.id;
    const result = window.confirm(
      "Are you sure you want to delete this card?\n\nYou will not be able to recover it."
    );
    if (result) {
      await deleteCard(id);
      history.go(0);
    }
  };

  return (
    <Fragment>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card-text">{card.front}</div>
              </div >
              <div className="col">
                <div className="card-text">{card.back}</div>
              </div>
            </div >
          </div>
          <div className="float-right">
            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`} style={{textDecoration: "none"}}>
              {" "}
              <div className="btn btn-secondary" type="button">
                Edit
              </div>{" "}
            </Link>
            <div className="btn btn-danger" type="button" onClick={handleDelete}>
              Delete
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListCard;
