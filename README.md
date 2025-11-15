# Weather App - React Version
A modern weather application built with React and Vite that allows users to search for weather information by city name.


## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🔍 Search weather by city name
- 📱 Fully responsive design with mobile-first approach
- ⚡ Fast and modern UI with smooth animations
- 🎨 Beautiful weather icons for different conditions
- 📊 Display temperature, humidity, and wind speed
- ✨ Interactive WebGL light ray effects that follow mouse movement
- 🌑 Dark theme with animated background
- ⏳ Loading states and error handling

## Technologies Used

- **React 19** - Frontend framework
- **Vite 7** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **OGL** - WebGL library for animated light ray effects
- **OpenWeatherMap API** - Weather data
- **Poppins Font** - Modern typography

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

1. Enter a city name in the search input field
2. Click the search button or press Enter
3. View the current weather information including:
   - Temperature in Celsius (displayed prominently)
   - Weather condition with animated icon
   - Humidity percentage
   - Wind speed in km/h
4. Move your mouse around to see the interactive light ray effects respond to your cursor

## API Configuration

The app uses the OpenWeatherMap API. The API key is currently hardcoded in the Weather component. For production use, consider:

1. Moving the API key to environment variables (create a `.env` file):
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
2. Creating a backend service to proxy API calls
3. Implementing rate limiting
4. Adding API key validation and error handling

## Customization

### LightRays Component
The LightRays component accepts various props for customization:
- `raysOrigin`: Position of ray origin (default: "top-center")
- `raysColor`: Color of the rays (default: "white")
- `raysSpeed`: Animation speed (default: 1.5)
- `lightSpread`: Spread of the light (default: 0.8)
- `rayLength`: Length of rays (default: 3)
- `followMouse`: Enable mouse following (default: true)
- `mouseInfluence`: Strength of mouse influence (default: 0.1)
- `noiseAmount`: Amount of noise effect (default: 0.1)
- `distortion`: Distortion amount (default: 0.05)

You can customize these in `src/App.jsx`.

## Project Structure

```
src/
├── components/
│   ├── Weather.jsx      # Main weather component with search and display
│   └── LightRays.jsx    # WebGL animated light ray background component
├── App.jsx              # Main app component with layout
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind imports
```

### LightRays Component
A sophisticated WebGL-based component that creates animated light ray effects:
- Customizable ray origin (top-center, top-left, top-right, etc.)
- Mouse-following interactive rays
- Adjustable speed, spread, length, and color
- Noise and distortion effects
- Optimized performance with intersection observer

### Weather Component
The main weather display component featuring:
- City search functionality
- Real-time weather data fetching
- Responsive design with Tailwind CSS
- Loading and error states
- Weather condition icons
- Temperature, humidity, and wind speed display

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source

## Browser Support

- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers with WebGL support

## Performance

- Optimized WebGL rendering with device pixel ratio limiting
- Intersection Observer for efficient rendering
- Smooth 60fps animations
- Responsive design with mobile-first approach

## Acknowledgments

- Weather icons from the original project
- OpenWeatherMap for providing the weather API
- OGL library for WebGL functionality
- React and Vite communities for excellent tooling
- Tailwind CSS for the utility-first styling approach
