import { gql } from "@apollo/client";

export const POST_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    content
    createdAt
    likesCount
    commentsCount
    isLiked
    author {
      id
      username
      avatarUrl
    }
  }
`;
