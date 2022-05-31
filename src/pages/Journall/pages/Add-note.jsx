import React from 'react';
import { Button } from '../components/Button/Button';
import { Select } from '../components/Filter/Select';
import { useAddNote } from '../hooks/useAddNote';
import './Add-note.css'

export const AddNote =({ onSubmit }) => {
  const {
    title,
    setTitle,
    smile,
    setSmile,
    date,
    setDate,
    src,
    text,
    setText,
  } = useAddNote();

  const onSmile = e => {
    const smile = e.target.value
    setSmile(smile)
  }

  const inputRef = React.useRef();
  const selectDate = () => {
    inputRef.current.type = inputRef.current.type === 'text' ? 'date' : 'text';
  };


  return (
    <div className="form">
      <div>
        <form onSubmit={e => onSubmit(e, title, smile, date, src, text)}>
          <div id='inputs'>
          <div id='inputBox'>
            <div>
              <label htmlFor="name">
                <input className='inputBox'
                  type="text"
                  name="name"
                  placeholder="Title"
                  value={title}
                  onChange={e => setTitle(e.target.value.trimStart())}
                />
              </label>
            </div>
            <div>
              <Select smile={smile} setSmile={onSmile} />
              <label htmlFor="date">
                <input className='inputBox'
                  ref={inputRef}
                  type="text"
                  name="date"
                  placeholder="Date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  onFocus={selectDate}
                  onBlur={selectDate}
                />
              </label>
            </div>
            </div>
          
          {/* Main Journal content box large paragraphs go here */}
          <textarea
            name="description"
            id="description "
            placeholder="Express yourself..."
            value={text}
            onChange={e => setText(e.target.value.trimStart())}></textarea>
          <Button>
            Submit
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

