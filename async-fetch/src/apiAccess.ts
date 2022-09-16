export async function getWeatherInfo(): Promise<string> {
  const weatherInfoUrl = "https://api.openweathermap.org/data/2.5/weather";
  const params: {
    lang: string;
    q: string;
    appId: string;
  } = {
    lang: "ja",
    q: "Himeji",
    appId: "2c3684bb2552411ef80102d31630227d",
  };
  const queryParams = new URLSearchParams(params);
  const urlFull = `${weatherInfoUrl}?${queryParams}`;
  const response = await fetch(urlFull);
  const weatherInfoJSON = await response.json();
  const weatherArray = weatherInfoJSON.weather;
  const weather = weatherArray[0];
  const weatherInfo = `${weatherInfoJSON.name}の現在の天気: ${weather.description}`;
  return weatherInfo;
}
