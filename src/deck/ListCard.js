import React, { useEffect, useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Text>{card.front}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{card.back}</Card.Text>
              </Col>
            </Row>
          </Container>
          <div className="float-right">
            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
              {" "}
              <Button variant="secondary" type="button">
                Edit
              </Button>{" "}
            </Link>
            <Button variant="danger" type="button" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
}

export default ListCard;
