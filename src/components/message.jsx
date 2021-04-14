import React from 'react';
import {emojify} from 'react-emojione';

const Message = (props) => {
  const stringToColour = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

  const time = new Date(props.message.created_at).toLocaleTimeString();

  return (
    <div className="message-container">
      <i className="author">
        <span style={{color: stringToColour(props.message.author) }}>{props.message.author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(props.message.content)}</p>
    </div>
  );
}

export default Message;

