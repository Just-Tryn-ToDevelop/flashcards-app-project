import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import { listDecks } from "../utils/api";
import { Link } from "react-router-dom";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks);

    return () => abortController.abort();
  }, []);

  const list = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

  return (
    <main>
      <div>
        <Link to="/decks/new">
          <button
            className="btn btn-secondary"
            type="button"
            style={{ marginBottom: "15px" }}
          >
            Create Deck
          </button>
        </Link>
      </div>
      <section>{list}</section>
    </main>
  );
}

export default DeckList;
