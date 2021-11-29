import React from 'react';
import './form.scss';
import {useState} from 'react';

function Form(props) {

  let [method, setMethod] = useState('');
  let [url, setUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method:`${method}`,
      url: `${url}`,
    };
    props.handleApiCall(formData);
  }

  function handleInput(e) {
    let {value, name} = e.target;
    setUrl(value);
  }
  function handleMethods(e) {
    let {value, name} = e.target.id;
    setMethod(value);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={handleInput} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods" onClick={handleMethods}>
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
  
}

export default Form;
