import React, { useContext } from 'react';
import Note from '../Note-block/NoteNlock';
import { Contex } from '../../Contex';

import './Main.css';

export const Main = () => {
  const {filtredNotes} = useContext(Contex);
  return (
    <main className="container">
      {/* filtering through previous note/note history */}
      {filtredNotes && filtredNotes.map((note, index) => <Note key={`note_${index}`} {...note} />)}
    </main>
  );
};

