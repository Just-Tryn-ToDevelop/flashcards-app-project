import React, { useEffect, useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { createCard } from "../utils/api";
import { Link } from "react-router-dom";

function AddCards({ deck }) {
  const initialState = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createCard(deck.id, formData);
    setFormData(initialState);
  };
  if (!deck) return null;
  return (
    <Fragment>
      <main>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={`/decks/${deck.id}`}>
              {deck.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add Card</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Form onSubmit={submitHandler}>
          <div>
            <h2>{deck.name}: Add Card</h2>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Front</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Front side of card"
              name="front"
              value={formData.front}
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Back</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Back side of card"
              name="back"
              value={formData.back}
              onChange={changeHandler}
            />
          </Form.Group>
          <Link to={`/decks/${deck.id}`}>
            {" "}
            <Button variant="secondary" type="button">
              Done
            </Button>{" "}
          </Link>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </main>
    </Fragment>
  );
}

export default AddCards;
