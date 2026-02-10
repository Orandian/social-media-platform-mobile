import { useQuery } from "@apollo/client";
import { GET_FEED } from "../graphql/get-feed.query";

export const useFeed = (limit = 10, offset = 0) => {
  const { data, loading, error, fetchMore } = useQuery(GET_FEED, {
    variables: { limit, offset },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    fetchMore({
      variables: { offset: data?.feed.length || 0 },
    });
  };

  return {
    posts: data?.feed || [],
    loading,
    error,
    loadMore,
  };
};
