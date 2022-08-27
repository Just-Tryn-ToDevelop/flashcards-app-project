import React, {Fragment} from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function Form({addChangeHandler, addSubmitHandler, editChangeHandler, editSubmitHandler, formData, deck}) {
    const {cardId} = useParams();
    const history = useHistory();
return (
<Fragment>
    {
cardId ? (
    <form onSubmit={editSubmitHandler}>
<div>
  <h1>Edit Card</h1>
</div>
<div className="mb-3" >
  <label className="form-label">Front</label>
  <textarea
    className="form-control"
    name="front"
    value={formData.front}
    onChange={editChangeHandler}
  />
</div>
<div className="mb-3" >
  <label className="form-label">Back</label>
  <textarea
    className="form-control"
    name="back"
    value={formData.back}
    onChange={editChangeHandler}
  />
</div>
<Link to={`/decks/${deck.id}`} style={{ textDecoration: "none" }}>
  <button className="btn btn-secondary" type="button" >
    Cancel
  </button>{" "}
</Link>
  <button className="btn btn-primary" type="submit" >
    Submit
  </button>
</form>) : (<form onSubmit={addSubmitHandler}>
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
    onChange={addChangeHandler}
  />
</div>
<div className="form-group mb-3" >
  <label className="form-label">Back</label>
  <textarea
    className="form-control"
    name="back"
    placeHolder="Back side of card"
    value={formData.back}
    onChange={addChangeHandler}
  />
</div>
  <a className="btn btn-secondary" type="button" href={`/decks/${deck.id}`}>
    Done
  </a>{" "}
  <button className="btn btn-primary" type="submit">
    Save
  </button>
</form>)
    }
</Fragment>
    
)
}

export default Form;