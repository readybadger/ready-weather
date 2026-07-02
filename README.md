# Ready Weather (R⚡︎W)

Ready Weather is a React web app written in Typescript.

## Prerequisutes
- Node.js (_Check the `engines` value in `./package.json` to ensure compatibility_)
- npm
- [OpenWeather](https://openweathermap.org/) API Key

## Get started
### Run the app
1. Clone the repo
2. `npm i`
3. `cp .env .env.local`
4. Add the OpenWeather API key to `.env.local`
3. `npm run dev` to start the dev server

### Production preview
The following command can be used to preview the production build: 
```bash
npm run build & npm run preview
```

## Dependencies
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [WeatherStack API](docs.apilayer.com/weatherstack/docs/api-documentation) for weather data.
