import React, { useState, useEffect, Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../Home/DeckList";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreateDeck from "../Home/CreateDeck";
import ViewDeck from "../deck/ViewDeck";
import StudyDeck from "../deck/StudyDeck";
import EditDeck from "../deck/EditDeck";
import AddCards from "../deck/AddCards";
import { readDeck } from "../utils/api";
import EditCard from "../deck/EditCard";

function Layout() {
  const [deck, setDeck] = useState(null);
  const { params } = useRouteMatch("/decks/:deckId/") || {};
  useEffect(() => {
    if (!params) return;
    const abortController = new AbortController();
    readDeck(params.deckId, abortController.signal).then(setDeck);

    return () => abortController.abort();
  }, [params && params.deckId]);

  return (
    <Fragment>
      <Header />
      <div className="container" style={{ margin: "30px" }}>
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck deck={deck} />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck deck={deck} />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCards deck={deck} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard deck={deck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
