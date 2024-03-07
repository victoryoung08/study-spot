export default async function getAddressCoordinates(address: string) {
  const mapBoxAccessToken =
    "pk.eyJ1Ijoic3R1ZHlzcG90Y2FmZSIsImEiOiJjbG5qOWV1aGMxZzVtMmxsZnZyNmxlc2djIn0.vJPppkgvvnh0nz90LgpWmQ";
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapBoxAccessToken}`
    );

    const location = await response.json();
    const suburb = location.features[0].context[1].text;
    const longitude = location.features[0].center[0];
    const latitude = location.features[0].center[1];
    return { longitude, latitude, suburb };
  } catch (error) {
    return { error };
  }
}
