import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{deck.name}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textAlign: "right" }}
            >
              {deck.cards.length} cards
            </Card.Subtitle>
            <Card.Text>{deck.description}</Card.Text>
            <Link to={`/decks/${deck.id}`}>
              <Button variant="secondary" type="button">
                View
              </Button>{" "}
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <Button variant="primary" type="button">
                Study
              </Button>{" "}
            </Link>
            <Button
              variant="danger"
              className="float-right"
              onClick={handleDelete}
            >
              Delete
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default Deck;
