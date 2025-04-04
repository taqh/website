export type Project = {
  title: string;
  date: Date;
  description: string;
  thumbnail: {
    large: string;
    alt: string;
  };
  tags: string[];
  path: string;
}

export type Frontmatter = {
  title: string;
  date: string;
  description: string;
  slug: string;
  schema: string | undefined;
  image: string;
}
