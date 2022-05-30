import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import classes from './Note.module.css';

const NoteBlock = ({ smile, title, date, text }) => {
  const [modal, setModal] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const noteDate = new Date(date).toLocaleString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  const onClose = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <div className={classes.block} onClick={onClose}>
        <div className={classes.text}>
          <div className={classes.titles}>
          <span>{smile}</span>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.date}>{noteDate}</span>
          </div>
          <h3 className={classes.description}>{text.slice(0, 13) + '...'}</h3>
        </div>
      </div>

      {modal && (
        <Modal
          onClose={onClose}
          smile={smile}
          title={title}
          date={date}
          text={textValue}
          setText={setTextValue}
        />
      )}
    </>
  );
};

export default NoteBlock;
