import { useQuery, useMutation } from "@apollo/client";
import { GET_POST_DETAILS } from "../graphql/get-post-details.query";
// import { LIKE_POST } from "../graphql/like-post.mutation.gql";

/**
 * Hook for managing post-related data and actions.
 * Encapsulates Apollo logic away from the UI.
 */
export const usePost = (postId: string) => {
  const { data, loading, error } = useQuery(GET_POST_DETAILS, {
    variables: { id: postId },
    skip: !postId,
  });

  // const [likePostMutation] = useMutation(LIKE_POST);

  const handleLike = async () => {
    // try {
    //   await likePostMutation({
    //     variables: { id: postId },
    //     // Optimistic UI could be added here
    //   });
    // } catch (e) {
    //   console.error("Failed to like post:", e);
    // }
    console.warn("handleLike not implemented: LIKE_POST mutation missing");
  };

  return {
    post: data?.post,
    loading,
    error,
    handleLike,
  };
};
