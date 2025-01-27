import React from 'react';

import './Input.css';

import sendImage from '../../icons/send.png'

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><img className="sendImage" src={sendImage} alt="send"/></button>
  </form>
)

export default Input;