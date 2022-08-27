import React, { useState, Fragment } from "react";
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
                <li className="breadcrumb-item active">Add Card</li>
              </ol>
            </nav>
          </div>
          
          <form onSubmit={submitHandler}>
            <div>
              <h2>{deck.name}: Add Card</h2>
            </div >
            <div className=" form-group mb-3" >
              <label className="form-label">Front</label>
              <textarea
                className="form-control"
                name="front"
                placeHolder="Front side of card"
                value={formData.front}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group mb-3" >
              <label className="form-label">Back</label>
              <textarea
                className="form-control"
                name="back"
                placeHolder="Back side of card"
                value={formData.back}
                onChange={changeHandler}
              />
            </div>
            <Link to={`/decks/${deck.id}`} style={{ textDecoration: "none" }}>
              <button className="btn btn-secondary" type="button">
                Done
              </button>{" "}
            </Link>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
          </form>

        </div>
      </main>
    </Fragment>
  );
}

export default AddCards;
