# General notes

This application was built as part of an assignment, and notes on the process and decisions are included here.

## Technical Design 

### API
The assignment specifies guidelines which include usage of the Weatherstack API. From what I can tell, the free tier is no longer supports the type of queries we would need for the core functionality (specifically historical data and forecast).

I will try each of the alternatives out to see which feels the best in terms of the relevant heuristics and developer experience. I considered:

### [**OpenWeather**](https://openweathermap.org/)
**Pros:**
- Reasonably generous free plan
- Has geocoding capabilities
- Accuracy  
  
**Cons:**
- Requires API key
- Requires multiple API calls to different endpoints for weather data

### [**Open-Meteo**](https://open-meteo.com/)
**Pros:**
- Completely free
- Has geocoding capabilities
- No API key required

**Conts:**
- Might be less accurate for some locations
