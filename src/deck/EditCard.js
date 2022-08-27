import React, { useEffect, useState, Fragment } from "react";
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
                <li className="breadcrumb-item">
                  <a
                    href={`/decks/${deck.id}/`}
                    style={{ textDecoration: "none" }}
                  >
                    {deck.name}
                  </a>
                </li>
                <li className="breadcrumb-item active">Edit Card {card.id}</li>
              </ol>
            </nav>
          </div>

          <form onSubmit={submitHandler}>
            <div>
              <h1>Edit Card</h1>
            </div>
            <div className="mb-3" controlId="formBasicEmail">
              <label className="form-label">Front</label>
              <textarea
                className="form-control"
                name="front"
                value={formData.front}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3" controlId="formBasicPassword">
              <label className="form-label">Back</label>
              <textarea
                className="form-control"
                name="back"
                value={formData.back}
                onChange={changeHandler}
              />
            </div>
            <Link to={`/decks/${deck.id}`} style={{ textDecoration: "none" }}>
              <button className="btn btn-secondary" type="button">
                Cancel
              </button>{" "}
            </Link>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
          </form>
          
        </div>
      </main>
    </Fragment>
  );
}

export default EditCard;
