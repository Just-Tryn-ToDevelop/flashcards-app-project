import React, { Fragment } from "react";
import { Link, useHistory, Switch, Route } from "react-router-dom";
import { deleteDeck } from "../utils/api";
import CardsList from "./CardsList";

function ViewDeck({ deck }) {
  const history = useHistory();

  const handleDelete = async (id) => {
    id = deck.id;
    const result = window.confirm(
      "Are you sure you want to delete this deck?\n\nYou will not be able to recover it."
    );
    if (result) {
      await deleteDeck(id);
      history.push("/");
    }
  };
  if (!deck) return null;
  return (
    <Fragment>
      <section>
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
                <li className="breadcrumb-item active">{deck.name}</li>
              </ol>
            </nav>
          </div>
        <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <div className="mb-2 text-muted" style={{ textAlign: "right" }}>
            {deck.cards.length} cards
          </div>
          <p className="card-text">{deck.description}</p>
          <Link to={`/decks/${deck.id}/edit`} style={{textDecoration: "none"}}>
            <button className="btn btn-secondary" type="button" >
              Edit
            </button>{" "}
          </Link>
          <Link to={`/decks/${deck.id}/study`} style={{textDecoration: "none"}}>
            <button className="btn btn-primary" type="button">
              Study
            </button>{" "}
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <button className="btn btn-primary" type="button">
              Add Cards
            </button>{" "}
          </Link>
          <button className="btn btn-danger float-right" onClick={handleDelete}>
            Delete
          </button>{" "}
        </div>
      </div>
      </section>
      <section>
        <div>
          <Switch>
            <Route path={`/decks/${deck.id}`}>
              <CardsList deck={deck} />
            </Route>
          </Switch>
        </div>
      </section>
    </Fragment>
  );
}

export default ViewDeck;
