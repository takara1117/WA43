import type { City } from "./interfaces";

//都市情報の取得
export async function getCityInfo(): Promise<{ number: City }> {
  const urlFull = "https://hal.architshin.com/wa/getCityList.php";
  const response = await fetch(urlFull);
  const cityInfoJSON = await response.json();
  return cityInfoJSON;
}

//天気情報取得のAPI
export const getWeatherInfo = async (q: string): Promise<string> => {
  const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
  const params: {
    lang: string;
    q: string;
    appId: string;
  } = {
    lang: "ja",
    q: q,
    appId: "2c3684bb2552411ef80102d31630227d",
  };
  const queryParams = new URLSearchParams(params);
  const urlFull = `${weatherInfoUrl}?${queryParams}`;
  const response = await fetch(urlFull);
  const weatherInfoJSON = await response.json();
  const weatherArray = weatherInfoJSON.weather;
  const weather = weatherArray[0];
  const weatherInfo = `都市IDが${weatherInfoJSON.id}の${weatherInfoJSON.name}現在の天気は${weather.description}です。`;
  return weatherInfo;
};
