import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

//https://yts-proxy.now.sh/list_movies.json
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
