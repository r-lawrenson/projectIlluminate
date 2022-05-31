import React from "react";
import "./Header.css";
import { Button } from "../Button/Button";
import Filter from "../Filter/Filter";

export const Header = ({ setIsNote, isNote }) => {
  const onAddNote = () => setIsNote(false);
  const onList = () => setIsNote(true);

  return (
    <header className="header-g">
      <div className="container">
        <div className="logo">{/* <h1 className="title">Journal</h1> */}</div>
        {/* Search and filter bars */}
        {isNote && <Filter />}
        <nav className="navs">
          <div className="navWrapper">
            <Button onClick={onList}>List</Button>
            <Button onClick={onAddNote}>Create</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
