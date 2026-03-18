export interface Blog {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
}

export interface BlogsResponse {
  success: boolean;
  message: string;
  data: Blog[];
}

export interface BlogDetailHero {
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    readTime: string;
  };
  category: string;
}

export interface BlogDetailKeyTakeaways {
  title: string;
  points: string[];
}

export interface BlogDetailContentSection {
  title: string;
  paragraphs: string[];
  highlightPoints: string[];
  images: string[];
}

export interface BlogDetailAdditionalSection {
  title: string;
  paragraphs: string[];
}

export interface BlogDetail {
  id: string;
  slug: string;
  category: string;
  hero: BlogDetailHero;
  keyTakeaways: BlogDetailKeyTakeaways;
  content: BlogDetailContentSection[];
  quoteSection: null | { quote: string; author: string };
  additionalSection: BlogDetailAdditionalSection;
  createdAt: string;
  updatedAt: string;
}

export interface BlogDetailResponse {
  success: boolean;
  message: string;
  data: BlogDetail;
}
