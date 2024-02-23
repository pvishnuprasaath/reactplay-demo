import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TextField } from '@mui/material';

// function which renders the number of days between two dates
// eslint-disable-next-line react-refresh/only-export-components
export const calculateDaysBetweenTwoDates = (date1: string, date2: string) => {
  const date1InMs = new Date(date1).getTime();
  const date2InMs = new Date(date2).getTime();
  const differenceInMs = date2InMs - date1InMs;
  const oneDayInMs = 1000 * 60 * 60 * 24;
  return Math.floor(differenceInMs / oneDayInMs);
};

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

  // fetch first 10 posts from jsonplaceholder api - https://jsonplaceholder.typicode.com/posts and display the title and body on the post in a meterial ui card
  // function to fetch the posts from the api
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
  };
  // function to render the posts in a material ui card
  const renderPosts = () => {
    return (
      <div>
        <h3>Posts from JSONPlaceholder</h3>
        <div className="card">
          {/* loop over the posts and render the first 3 */}
          {posts.slice(0, 3).map((post, index) => (
            <div key={index}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  // fetch the posts from the api and render the posts
  const [posts, setPosts] = useState<{ title: string; body: string }[]>([]);
  const [error, setError] = useState<string | null>('');

  // fetch posts inside a useEffect hook
  useEffect(() => {
    fetchPosts()
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error));
  }, []);

  // function to return a material ui text field with debounce logic
  const renderMaterialInputField = () => {
    return (
      <TextField
        id="outlined-basic"
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
      <div className="card">
        <h3>Days between two dates</h3>
        <p>{calculateDaysBetweenTwoDates('2021-01-03', '2021-12-31')} days</p>
        {/* render posts */}
        {renderPosts()}
        {error && <p>ERROR: {error}</p>}
      </div>
    </>
  );
}

export default App;
