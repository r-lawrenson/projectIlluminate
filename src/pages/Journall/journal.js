import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { AddNote } from './pages/Add-note';

import { useApp } from './hooks/useApp';

import '../cssFiles/Journal.css';
import { Contex } from './Contex';

export const Journal = React.memo(({user}) => {
  const {
    isNote,
    setIsNote,
    setNotes,
    filtredNotes,
    smile,
    title,
    onTitle,
    onSmile,
    onSubmit
  } = useApp();

  return (
    <Contex.Provider
      value={{
        filtredNotes,
        setNotes,
        smile,
        title,
        onTitle,
        onSmile,
      }}>
      <div>
      <h1>{user}'s Journal</h1>
        <Header setIsNote={setIsNote} isNote={isNote} />
        {isNote ? <Main /> : <AddNote onSubmit={onSubmit} />}
      </div>
    </Contex.Provider>
  );
});

