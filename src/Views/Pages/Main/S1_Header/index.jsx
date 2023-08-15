import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setWeather } from '../../../../Redux/store/weatherSlice';
import { styled } from '@mui/system';
import { Grid, Container } from "@mui/material"
import { SectionHeading, SectionSubHeading } from '@/Views/Styles/style';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Replace with your API key
const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const StyledWeatherApp = styled('div')`
  display: flex;
  justify-content: center;
 
`;

const WeatherApp = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
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
      <StyledWeatherApp>
        <Container >
          <Grid container>
            <Grid item xs={12} md={6}>
              <SectionHeading fs="20px" align="left" p="20px 0">Enter City Name</SectionHeading>
              <TextField
                label="name"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{ width: 300, marginTop: 0 }}
              />
              <br />
              <Button variant="contained" onClick={fetchWeatherData} sx={{ marginTop: 5 }}>
                Search
              </Button>

              {error && <Typography color="error" sx={{ marginTop: 5 }}>{error}</Typography>}

            </Grid>
            <Grid item xs={12} md={6}>
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
