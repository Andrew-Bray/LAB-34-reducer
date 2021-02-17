/* eslint-disable max-len */
import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducers/recordReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (val) => {
    dispatch({
      type: 'RECORD',
      payload: val
    });
  };

  const handleClick = ({ target }) => {
    dispatch({
      type: target.id,
    });
  };

  return (
    <>
      <button 
        data-testid="undo-button" 
        id="UNDO" 
        onClick={handleClick}>
          undo
      </button>
      <button 
        data-testid="redo-button" 
        id="REDO"
        onClick={handleClick}>
          redo
      </button>
      <input 
        data-testid="color-picker"
        id="RECORD"
        type="color" 
        value={state.current} 
        onChange={({ target }) => handleChange(target.value)} />
      <div data-testid="my-color-div" style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
