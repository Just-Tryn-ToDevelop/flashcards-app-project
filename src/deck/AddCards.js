import React, { useState, Fragment } from "react";
import { createCard } from "../utils/api";
import Form from "./Form";

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
          <Form
            addChangeHandler={changeHandler}
            addSubmitHandler={submitHandler}
            formData={formData}
            deck={deck}
          />
        </div>
      </main>
    </Fragment>
  );
}

export default AddCards;
