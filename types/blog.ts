export type Post = {
  id: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  coverImage: string;
  publishedAt: Date;
  updatedAt: Date;
  authors: {
    id: string;
    name: string;
    image: string;
  }[];
  category: {
    id: string;
    slug: string;
    name: string;
  };
  tags: {
    id: string;
    slug: string;
    name: string;
  }[];
  attribution: {
    author: string;
    url: string;
  } | null;
};

export type Pagination = {
  limit: number;
  currpage: number;
  nextPage: number | null;
  prevPage: number | null;
  totalItems: number;
  totalPages: number;
};

export type MarblePostList = {
  posts: Post[];
  pagination: Pagination;
};

export type MarblePost = {
  post: Post;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};
