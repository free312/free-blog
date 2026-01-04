import { Post } from '../types/blog';
import postsData from './posts.json';

export const getPosts = (): Post[] => {
  return postsData;
};

export const getPostById = (id: string): Post | undefined => {
  return postsData.find(post => post.id === id);
};
