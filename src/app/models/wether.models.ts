export interface Root {
    city: City
    forecast: Forecast[]
  }
  
  export interface City {
    id: number
    name?: string
    population: number
    lat: number
    lon: number
    country: string
  }
    
  export interface Forecast {
    day: string
    formattedDay: string
    minTempCelsius: number
    minTempFarenheit: number
    maxTempCelsius: number
    maxTempFarenheit: number
    windAverageMs: number
    windAverageKmh: number
    windAverageMph: number
    windDirection: number
    symbol: string
    forecastText: string
  }
  