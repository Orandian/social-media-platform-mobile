export interface User {
  id: string;
  username: string;
  avatarUrl?: string;
  displayName?: string;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  isLiked: boolean;
}

// Add more shared types as needed
