import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
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
  console.log(deck);
  if (!deck) return null;
  return (
    <Fragment>
      <section>
        <div>
          <Breadcrumb className="bg-light border d-flex justify-content-center pt-2 ">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{deck.name}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{deck.name}</Card.Title>
            <Card.Text>{deck.description}</Card.Text>
            <Link to={`/decks/${deck.id}/edit`}>
              <Button variant="secondary" type="button">
                Edit
              </Button>{" "}
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <Button variant="primary" type="button">
                Study
              </Button>{" "}
            </Link>
            <Link to={`/decks/${deck.id}/cards/new`}>
              <Button variant="primary" type="button">
                Add Cards
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
