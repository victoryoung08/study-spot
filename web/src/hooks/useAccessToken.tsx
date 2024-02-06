export default async function getAccessToken() {
  try {
    const response = await fetch("/api/get-access-token");
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }
    const data = await response.json();
    console.log(response);
    return data.token.access;
  } catch (error) {
    return { error };
  }
}
