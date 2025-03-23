export interface Project {
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
