import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiKey = "9ddc26ff6d569210747338da6bf90f46";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const getWeatherIcon = (weatherMain) => {
    const iconMap = {
      'Clouds': '/images/cloudy.png',
      'Drizzle': '/images/drizzle.png',
      'Mist': '/images/mist.png',
      'Clear': '/images/clear.png',
      'Rain': '/images/rain.png',
      'Snow': '/images/snow.png',
      'Haze': '/images/Haze.png',
      'Sun': '/images/sun.png'
    };
    return iconMap[weatherMain] || '/images/clear.png';
  };

  const checkWeather = async (cityName) => {
    if (!cityName.trim()) return;
    
    setLoading(true);
    setError(false);
    
    try {
      const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
      
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (err) {
      setError(true);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    checkWeather(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-[90%] max-w-[470px] bg-[#8a2be2] text-white mt-10 sm:mt-16 md:mt-[100px] mx-auto mb-8 sm:mb-12 md:mb-[50px] rounded-[20px] p-5 sm:p-6 md:p-[40px_35px] text-center">
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
        <input
          type="text"
          placeholder="Enter City Name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border-0 outline-0 bg-[#ebfffc] text-[#555] px-3 sm:px-5 md:px-[25px] py-2 sm:py-[10px] h-12 sm:h-14 md:h-[60px] rounded-[30px] flex-1 mr-2 sm:mr-4 text-sm sm:text-base md:text-lg"
        />
        <button 
          onClick={handleSearch} 
          disabled={loading}
          className="border-0 outline-0 bg-[#ebfffc] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] cursor-pointer transition-colors duration-300 hover:bg-[#d1f2f0] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
        >
          <img src="/images/search.png" alt="Search" className="w-4 sm:w-5" />
        </button>
      </div>
      
      {error && (
        <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-red-500">
          <p>Invalid City Name</p>
        </div>
      )}
      
      {weatherData && (
        <div>
          <div className="flex justify-center">
            <img 
              src={getWeatherIcon(weatherData.weather[0].main)} 
              className="w-20 sm:w-24 md:w-[120px] mt-4 sm:mt-5" 
              alt="Weather"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[80px] font-medium mt-2 sm:mt-3">{Math.round(weatherData.main.temp)}°C</h1>
          <h2 className="text-2xl sm:text-3xl md:text-[45px] font-normal -mt-1 sm:-mt-2 md:-mt-2.5">{weatherData.name}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-[50px] w-full">
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center mr-3 sm:mr-4 md:mr-5">
                <img src="/images/humidity.png" alt="Humidity" className="w-6 sm:w-7 md:w-[30px]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl md:text-[28px] -mt-1 sm:-mt-1.5">{weatherData.main.humidity}%</p>
                <p className="text-sm sm:text-base">Humidity</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center mr-3 sm:mr-4 md:mr-5">
                <img src="/images/wind.png" alt="Wind" className="w-6 sm:w-7 md:w-[30px]" />
              </div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl md:text-[28px] -mt-1 sm:-mt-1.5">{weatherData.wind.speed} km/h</p>
                <p className="text-sm sm:text-base">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
