const baseUrl = "https://node-auth-jwt-w78c.onrender.com";

export const Endpoints = {
  userInfo: `${baseUrl}/user/info`,
  posts: `${baseUrl}/post/all`,
  createPost: `${baseUrl}/post/create`,
  suggestions: `${baseUrl}/user/suggestions`,
  follow: `${baseUrl}/user/follow`,
  followers: `${baseUrl}/user/followers`,
  following: `${baseUrl}/user/following`,
  unfollow: `${baseUrl}/user/unfollow`,
};
