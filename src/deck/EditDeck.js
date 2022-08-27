import React, { useEffect, useState, Fragment } from "react";
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
            <nav ariaLabel="breadcrumb" className="bg-light border d-flex justify-content-center pt-2" >
              <ol className="breadcrumb">
                <li className="breadcrumb-item" > <a href="/" style={{textDecoration: "none"}}>Home</a></li>
              <li className="breadcrumb-item" >
              <a href={`/decks/${deck.id}/`} style={{textDecoration: "none"}}>{deck.name}</a>
              </li>
              <li className="breadcrumb-item active" >Edit Deck</li>
              </ol>
            </nav>
          </div>
          <form onSubmit={submitHandler}>
            <div>
              <h1>Edit Deck</h1>
            </div>
            <div className="mb-3" controlId="formBasicEmail">
              <label className="form-label">Name</label>
              <input
              className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3" controlId="formBasicPassword">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={formData.description}
                onChange={changeHandler}
              />
            </div>
            <Link to={`/decks/${deck.id}`} style={{textDecoration: "none"}}>
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

export default EditDeck;
