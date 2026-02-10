import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/login.mutation";

export const useAuthActions = () => {
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);

  const login = async (username: string, password: string) => {
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });
      // TODO: Save token to store
      return data.login;
    } catch (e) {
      console.error("Login failed:", e);
      throw e;
    }
  };

  return {
    login,
    isLoggingIn: loading,
  };
};
