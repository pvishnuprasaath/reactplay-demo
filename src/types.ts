// TS interface for POSTS
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
