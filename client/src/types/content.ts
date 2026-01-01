export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  link?: string;
  content: string;
  slug: string;
}

export interface Diary {
  id: string;
  date: string;
  title: string;
  content: string;
  slug: string;
}

export interface Drawing {
  id: string;
  url: string;
  title: string;
}

