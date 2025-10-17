import { fetchApi } from "../utils/functions/fetchApi";

export const fetchAuthenticateUser = async (
  username: string,
  password: string
) => {
  const response = await fetchApi(
    "http://127.0.0.1:8000/auth/login",
    "POST",
    JSON.stringify({
      username,
      password
    })
  );
  console.log("RESPOSNE", response);
};
