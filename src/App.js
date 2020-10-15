import React from "react";
import "./styles.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import { useAuth } from "./components/contexts/Auth";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function Header() {
  const { user } = useAuth();

  return (
    <div className="Header">
      <h1>{user ? `Welcome, ${user.username}` : 'Home'}</h1>
      <Nav />
    </div>
  );
}

function Footer() {
  return <footer>&copy; 2020</footer>;
}
