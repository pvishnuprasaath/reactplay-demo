import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TextField } from '@mui/material';
import MarkdownEditor from './markdown-editor';

// function which renders the number of days between two dates
// eslint-disable-next-line react-refresh/only-export-components
export const calculateDaysBetweenTwoDates = (date1: string, date2: string) => {
  const date1InMs = new Date(date1).getTime();
  const date2InMs = new Date(date2).getTime();
  const differenceInMs = date2InMs - date1InMs;
  const oneDayInMs = 1000 * 60 * 60 * 24;
  return Math.floor(differenceInMs / oneDayInMs);
};

export const generateUniqueKey = (index: number, slug: string): string => {
  return `${index}-${slug}`;
};

// validate emailID
// document function validateEmail
/**
 * @function validateEmail
 * @param {string} email - email to validate
 * @returns {boolean} - returns true if email is valid
 * @description function to validate email
 * @returns {boolean} - returns true if email is valid
 * @example
 * validateEmail('vishnu@gmail.com') // returns true
 * validateEmail('vishnu') // returns false
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const validateEmail = (email: string) => {
  // regex to validate email which only allows a-z and @
  const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
  return regex.test(email);
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
    // loop over the post title and make sure to strip of all the special characters and numbers
    posts.forEach((post: { title: string; body: string }) => {
      post.title = post.title.replace(/[^a-zA-Z ]/g, '');
      post.body = post.body.replace(/[^a-zA-Z ]/g, '');
    });
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
            <div key={generateUniqueKey(index, 'post')}>
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
      <MarkdownEditor />
    </>
  );
}

export default App;
