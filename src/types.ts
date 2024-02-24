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
// document interface ComplexData
/**
 * @typedef {Object} ComplexData
 * @property {string} title - title of the data
 * @property {number} count - count of the data
 * @property {string[]} tags - tags of the data
 * @property {Object} content - content of the data
 * @property {string} content.name - name of the content
 * @property {number} content.age - age of the content
 * @property {Object} content.address - address of the content
 * @property {string} content.address.city - city of the address
 * @property {string} content.address.country - country of the address
 * @property {boolean} isActive - is active or not
 * @description ComplexData interface
 * @example
 * {
 * title: 'title',
 *  count: 23,
 * tags: ['tag1', 'tag2'],
 * content: {
 *  name: 'name',
 * age: 23,
 * address: {
 * city: 'city',
 * country: 'country',
 * },
 *  },
 * isActive: true,
 * }
 */
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
