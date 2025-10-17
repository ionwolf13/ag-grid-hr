export const fetchApi = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: any
) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body
    });

    if (!response.ok) throw new Error();
    const responseJson = await response.json();
    return responseJson;
  } catch (e: any) {
    return null;
  }
};
