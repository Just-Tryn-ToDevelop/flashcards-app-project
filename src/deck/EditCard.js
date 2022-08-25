import React, { useEffect, useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard } from "../utils/api";
import { updateCard } from "../utils/api";

function EditCard({ deck }) {
  const initialState = {
    front: "",
    back: "",
  };
  const [card, setCard] = useState({});
  const [formData, setFormData] = useState(initialState);
  const [updatedCard, setUpdatedCard] = useState({});
  const { cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!cardId) return;
    const abortController = new AbortController();
    readCard(cardId, abortController.signal).then(setCard);

    return () => abortController.abort();
  }, [cardId]);

  useEffect(() => {
    if (card) setFormData(card);
  }, [card]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedCard({ ...formData, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateCard(updatedCard);
    setFormData(initialState);
    history.push(`/decks/${deck.id}/`);
  };

  console.log();

  if (!deck) return null;
  return (
    <Fragment>
      <main>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href={`/decks/${deck.id}/`}>
              {deck.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Card {card.id}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Form onSubmit={submitHandler}>
          <div>
            <h2>Edit Card</h2>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Front</Form.Label>
            <Form.Control
              as="textarea"
              name="front"
              value={formData.front}
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Back</Form.Label>
            <Form.Control
              as="textarea"
              name="back"
              value={formData.back}
              onChange={changeHandler}
            />
          </Form.Group>
          <Link to={`/decks/${deck.id}/`}>
            <Button variant="secondary" type="button">
              Cancel
            </Button>{" "}
          </Link>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </main>
    </Fragment>
  );
}

export default EditCard;
