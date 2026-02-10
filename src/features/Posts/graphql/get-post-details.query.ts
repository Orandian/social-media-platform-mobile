import { gql } from "@apollo/client";
import { POST_FRAGMENT } from "./post.fragment";

export const GET_POST_DETAILS = gql`
  query GetPostDetails($id: ID!) {
    post(id: $id) {
      ...PostFields
      # Add more fields specific to detail view here
    }
  }
  ${POST_FRAGMENT}
`;
