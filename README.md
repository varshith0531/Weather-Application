# Weather App - React Version

A modern weather application built with React and Vite that allows users to search for weather information by city name.

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🔍 Search weather by city name
- 📱 Responsive design
- ⚡ Fast and modern UI
- 🎨 Beautiful weather icons
- 📊 Display temperature, humidity, and wind speed

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **OpenWeatherMap API** - Weather data
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Usage

1. Enter a city name in the search input
2. Click the search button or press Enter
3. View the current weather information including:
   - Temperature in Celsius
   - Weather condition with icon
   - Humidity percentage
   - Wind speed in km/h

## API Configuration

The app uses the OpenWeatherMap API. The API key is currently hardcoded in the component. For production use, consider:

1. Moving the API key to environment variables
2. Creating a backend service to proxy API calls
3. Implementing rate limiting

## Project Structure

```
src/
├── components/
│   ├── Weather.jsx      # Main weather component
│   └── Weather.css      # Weather component styles
├── App.jsx              # Main app component
├── App.css              # App styles
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather icons from the original project
- OpenWeatherMap for providing the weather API
- React and Vite communities for excellent tooling
