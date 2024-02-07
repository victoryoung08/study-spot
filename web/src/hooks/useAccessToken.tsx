export default async function getAccessToken() {
  try {
    const response = await fetch("/api/get-access-token");
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }
    const data = await response.json();
    return data.token.user.access;
  } catch (error) {
    return { error };
  }
}
