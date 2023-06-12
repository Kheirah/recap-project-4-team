import { useState } from "react";

export async function useWeather() {
  const [weather, setWeather] = useState({});
  const weatherUrl = "https://example-apis.vercel.app/api/weather";
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      setWeather(data);
    } else {
      console.error("Something is going wrong");
    }
  } catch (error) {
    console.error("Error");
  }
  return weather;
}
