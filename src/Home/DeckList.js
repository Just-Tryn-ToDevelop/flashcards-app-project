import React, { useEffect, useState } from "react";
import Deck from "./Deck";
import { listDecks } from "../utils/api";
import Button from "react-bootstrap/Button";
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
          <Button
            variant="secondary"
            type="button"
            style={{ marginBottom: "15px" }}
          >
            Create Deck
          </Button>
        </Link>
      </div>
      <section>{list}</section>
    </main>
  );
}

export default DeckList;
