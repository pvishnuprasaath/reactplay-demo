// TS interface for POSTS
// document interface Post
/**
 * @typedef {Object} Post
 * @property {string} title - title of the post
 * @property {string} body - body of the post
 * @description Post interface
 * @example
 * {
 *  title: 'React is awesome',
 * body: 'React is a JavaScript library for building user interfaces'
 * }
 */
export interface Post {
  title: string;
  body: string;
}

// TS interface for complexData
export interface ComplexData {
  title: string;
  count: number;
  tags: string[];
  content: {
    name: string;
    age: number;
    address: {
      city: string;
      country: string;
    };
  };
  isActive: boolean;
}
