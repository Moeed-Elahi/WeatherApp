import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from '../../../../Redux/store/weatherSlice';
import { styled } from '@mui/system';
import { Grid ,Container } from "@mui/material"
import Sun from "../../../../assets/images/block.png"
import cloud from "../../../../assets/images/ethC.png"
import { SectionHeading, SectionSubHeading } from '@/Views/Styles/style';
const API_KEY = '1aae245da000437dbba122742231508'; // Replace with your API key
const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const weatherConditionToBackground = {
  Sunny: {Sun},
  Cloudy: {cloud},
  // Add more mappings for other conditions
};
const StyledWeatherApp = styled('div')`
  display: flex;
  justify-content: center;
  background-image: ${({ weatherCondition }) =>
    weatherCondition
      ? `url(${weatherConditionToBackground[weatherCondition]})`
      : ''};
      /* background-image */
`;

const WeatherApp = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
console.log("weatherData",weatherData);
  const fetchWeatherData = async () => {
    try {
      setError(null);
      const response = await axios.get(`${API_URL}&q=${city}`);
      dispatch(setWeather(response.data));
    } catch (error) {
      setError('City not found or API request failed.');
    }
  };
  return (
    <>
        <SectionHeading>Weather Update</SectionHeading>
        <StyledWeatherApp weatherCondition={weatherData?.current?.condition.text}>
    <Container >
      
      <Grid container>
        <Grid xs={12} md={6}>
      <TextField
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ width: 300, marginTop: 20 }}
      />
      <br/>
      <Button variant="contained" onClick={fetchWeatherData} sx={{ marginTop: 5 }}>
        Search
      </Button>

      {error && <Typography color="error" sx={{ marginTop: 5 }}>{error}</Typography>}

        </Grid>
        <Grid xs={12} md={6}>
        {weatherData && (
        <div>
          <SectionSubHeading variant="h5" sx={{ marginTop: 20 }}>
            {weatherData.location.name}
          </SectionSubHeading>
          <Typography >
          Local Time:  {weatherData.location.localtime}
          </Typography>
          <Typography>Temperature: {weatherData.current.temp_c}°C</Typography>
          <Typography>Condition: {weatherData.current.condition.text}</Typography>
          <Typography>humidity: {weatherData.current.humidity}</Typography>
          <Typography>feelslike: {weatherData.current.feelslike_c}°C</Typography>
          <img src={weatherData.current.condition.icon} alt="Weather Icon" />
        </div>
      )}
        </Grid>
      </Grid>
     
   
    
    </Container>
    </StyledWeatherApp>
    </>
  );
};

export default WeatherApp;
