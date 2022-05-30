import React from 'react';
import './button.css'

// Add props on click, for example 'AddNote' on click
//props.children = Button text eg create, list etc
export const Button = (props) => {
  return (
    <button
    onClick={props.onClick}> 
      {props.children} 
    </button>
  );
};

