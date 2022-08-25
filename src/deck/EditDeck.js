import React, { useEffect, useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { updateDeck } from "../utils/api";
import { Link } from "react-router-dom";

function EditDeck({ deck }) {
  const initialState = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [updatedDeck, setUpdatedDeck] = useState({});

  useEffect(() => {
    if (deck) setFormData(deck);
  }, [deck]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedDeck({ ...formData, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateDeck(updatedDeck);
    setFormData(initialState);
  };
  if (!deck) return null;
  return (
    <Fragment>
      <main style={{ margin: "30px" }}>
        <div>
          <div>
            <Breadcrumb className="bg-light border d-flex justify-content-center pt-2 ">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href={`/decks/${deck.id}/`}>
                {deck.name}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Edit Deck</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Form onSubmit={submitHandler}>
            <div>
              <h1>Edit Deck</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                as="input"
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={changeHandler}
              />
            </Form.Group>
            <Link to={`/decks/${deck.id}`}>
              <Button variant="secondary" type="button">
                Cancel
              </Button>{" "}
            </Link>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </main>
    </Fragment>
  );
}

export default EditDeck;
