import { ComplexData, Post } from './types';
// json object which holds an array of posts with title and body, where title is a string about react and body is a string about downsides of react
export const POSTS: Post[] = [
  {
    title: 'React is awesome',
    body: 'React is a JavaScript library for building user interfaces',
  },
  {
    title: 'React is not awesome',
    body: 'React is not a full-fledged framework and requires the use of additional libraries for state management, routing, and certain other features',
  },
  {
    title: 'React is the best',
    body: 'React is the best library for building user interfaces',
  },
  {
    title: 'React is the worst',
    body: 'React is the worst library for building user interfaces',
  },
];

export const complexData: ComplexData[] = [
  {
    title: 'title',
    count: 23,
    tags: ['tag1', 'tag2'],
    content: {
      name: 'name',
      age: 23,
      address: {
        city: 'city',
        country: 'country',
      },
    },
    isActive: true,
  },
];
