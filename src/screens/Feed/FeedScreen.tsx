import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useFeed } from "../../features/Feed/hooks/useFeed";

interface Author {
  id: string;
  username: string;
  avatarUrl?: string;
}

interface Post {
  id: string;
  content: string;
  author: Author;
}

/**
 * Feed Screen component that displays a list of posts.
 * Utilizes the useFeed hook for data fetching.
 */
export const FeedScreen = () => {
  const { posts, loading, error, loadMore } = useFeed();

  if (loading && posts.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Feed</Text>
      <FlatList
        data={posts as Post[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Post }) => (
          <View style={styles.postItem}>
            <Text style={styles.postAuthor}>{item.author?.username}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" color="#0000ff" /> : null
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  postAuthor: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  postContent: {
    fontSize: 16,
    color: "#333",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
