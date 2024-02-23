import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TextField } from '@mui/material';

function App() {
  // create a input field which has debounce logic to update the state
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    setDebounceTimeout(
      setTimeout(() => {
        setDebouncedValue(e.target.value);
      }, 2000),
    );
  };

  // function to return a material ui text field with debounce logic
  const renderMaterialInputField = () => {
    return (
      <TextField
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
        sx={{
          padding: '10px',
          '&:hover': {
            borderColor: 'red',
          },
          '& fieldset': {
            border: '1px solid white',
          },
          // text color of the input field
          '& input': {
            color: 'red',
          },
        }}
      />
    );
  };
  // style the material ui text field with 0 padding , hover effect and border

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* add styled text for heading using materialUI*/}
      <h1>Built by Copilot</h1>
      <div className="card">
        {renderMaterialInputField()}
        <p>
          Debounced value: <strong>{debouncedValue}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
