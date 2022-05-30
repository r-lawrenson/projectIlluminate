import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { AddNote } from './pages/Add-note';

import { useApp } from './hooks/useApp';

import '../Journal/Journal.css';
import { Contex } from './Contex';

export const Journal = React.memo(() => {
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
        <Header setIsNote={setIsNote} isNote={isNote} />
        {isNote ? <Main /> : <AddNote onSubmit={onSubmit} />}
      </div>
    </Contex.Provider>
  );
});

