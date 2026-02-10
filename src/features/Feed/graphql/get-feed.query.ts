import { gql } from "@apollo/client";
import { POST_FRAGMENT } from "../../Posts/graphql/post.fragment";

export const GET_FEED = gql`
  query GetFeed($limit: Int, $offset: Int) {
    feed(limit: $limit, offset: $offset) {
      ...PostFields
    }
  }
  ${POST_FRAGMENT}
`;
