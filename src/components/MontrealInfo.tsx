'use client';

import { useState, useEffect } from 'react';

export default function MontrealInfo() {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('Loading...');

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const montrealTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Montreal"}));
      const timeString = montrealTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(`${timeString} ET`);
    };

    // Initial time update
    updateTime();
    
    // Update every second
    const interval = setInterval(updateTime, 1000);

    // Fetch weather (you'll need to add your API key)
    const fetchWeather = async () => {
      try {
        // Replace with your OpenWeatherMap API key
        const API_KEY = 'your_api_key_here';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        
        if (data.main && data.weather) {
          const temp = Math.round(data.main.temp);
          const condition = data.weather[0].main;
          setWeather(`${temp}°C (${condition})`);
        }
      } catch (error) {
        console.error('Weather fetch error:', error);
        setWeather('Weather unavailable');
      }
    };

    fetchWeather();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span>Montreal</span>
      <span>{weather}</span>
      <span>{time}</span>
    </>
  );
}
