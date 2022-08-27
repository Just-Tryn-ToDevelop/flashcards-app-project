import React, { useState, Fragment } from "react";
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
      <main style={{ margin: "30px" }}>
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
                <li className="breadcrumb-item active">Create Deck</li>
              </ol>
            </nav>
          </div>
          <form onSubmit={submitHandler}>
            <div>
              <h1>Create Deck</h1>
            </div>
            <div className="mb-3" controlId="formBasicEmail">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Deck Name"
                value={formData.name}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3" controlId="formBasicPassword">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                placeholder="Brief description of the deck"
                value={formData.description}
                onChange={changeHandler}
              />
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
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

export default CreateDeck;
