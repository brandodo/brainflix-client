export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://brainflix-server-repo.herokuapp.com"
    : process.env.REACT_APP_BACKEND_API_URL;
