export interface LocationData {
  name: string;
  latitude: number;
  longitude: number;
  country?: string;
  admin1?: string;
}

export interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  weather_code: number;
  wind_speed_10m: number;
  time: string;
}

export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
}

export interface WeatherResponse {
  current: CurrentWeather;
  daily: DailyWeather;
}

export interface AppWeatherData {
  location: LocationData;
  current: CurrentWeather;
  daily: DailyWeather;
}
