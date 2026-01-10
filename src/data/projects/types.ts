export interface Project {
  id: string;

  title: string;
  subtitle?: string;

  context: {
    company: string;
    location?: string;
    year: string;
    role: string;
    scope: string;
  };

  stack: string[];

  background: string[];
  results: string[];

  images: string[];

  review?: {
    author: string;
    role?: string;
    content: string[];
  };

  tags: string[];
}

export interface SlideData {
  id: string;
  slideImg: string;
  slideTitle: string;
  slideDescription: string;
  slideUrl: string;
  slideTags: string[];
}
