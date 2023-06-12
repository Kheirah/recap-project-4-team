import { useState, useEffect } from "react";

export function useWeather() {
  const [weather, setWeather] = useState({});
  const weatherUrl = "https://example-apis.vercel.app/api/weather";
  
  async function fetchWeather() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        console.error("Something is going wrong");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [weather]);

  return { weather, fetchWeather };
}
