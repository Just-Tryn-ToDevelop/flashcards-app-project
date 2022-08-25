import React, { useEffect, useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { createDeck } from "../utils/api";
import { Link } from "react-router-dom";

function CreateDeck() {
  const initialState = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createDeck(formData);
    setFormData(initialState);
  };

  return (
    <Fragment>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Create Deck</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <h1>Create Deck</h1>
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="input"
            placeholder="Deck Name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Brief description of the deck"
            name="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="secondary" type="button">
            Cancel
          </Button>{" "}
        </Link>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}

export default CreateDeck;
