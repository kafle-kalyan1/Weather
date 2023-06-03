import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FontAwesome5,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

<<<<<<< HEAD
const FetchWeather = (props) => {
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
=======
const FetchWeather = () => {
   const [weather, setWeather] = useState([])
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   
   const axiosData = () => {
      console.log("okkk")
      //Provide your API key 
      let api = "APIIIIII"
      axios.get("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid="+api)
        .then(response => {
         //  setWeather(response.data)
          setLoading(false)
          console.log("OKKKK")
          console.log(response.data.list[0].main.temp)
        })
        .catch(error => {
         console.log("OK")
>>>>>>> origin/main

  useEffect(() => {
    const api_weather = "afcde0ca355ba4fe4fc0947b41892bf0";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.currLocation}&appid=${api_weather}&units=metric`
      )
      .then((response) => {
        setLoading(false);
        let temp = response.data.main.temp;
        let wind = response.data.wind.speed;
        let humidity = response.data.main.humidity;
        let description = response.data.weather[0].description;
        let datetime = response.data.dt;

        setWeather([temp, wind, humidity, description, datetime]);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, [props.currLocation]);

  return (
    <View style={styles.container}>
      {weather.length > 0 ? (
        <>
          <Text style={styles.title}>Weather Information</Text>
          <View style={styles.weatherDataContainer}>
            <View style={styles.weatherDataRow}>
              <Text style={styles.weatherDataLabel}>Temperature:</Text>
              <Text style={styles.weatherData}>{weather[0]}</Text>
            </View>
            {!error && (
              <>
                <View style={styles.weatherDataRow}>
                  <Text style={styles.weatherDataLabel}>Wind Speed:</Text>
                  <Text style={styles.weatherData}>{weather[1]}</Text>
                </View>
                <View style={styles.weatherDataRow}>
                  <Text style={styles.weatherDataLabel}>Humidity:</Text>
                  <Text style={styles.weatherData}>{weather[2]}</Text>
                </View>
                <View style={styles.weatherDataRow}>
                  <Text style={styles.weatherDataLabel}>Description:</Text>
                  <Text style={styles.weatherData}>{weather[3]}</Text>
                </View>
                <View style={styles.weatherDataRow}>
                  <Text style={styles.weatherDataLabel}>Datetime:</Text>
                  <Text style={styles.weatherData}>{weather[4]}</Text>
                </View>
              </>
            )}
          </View>
        </>
      ) : (
        <Text style={styles.noLocationText}>No location found.</Text>
      )}

      {loading && <Text style={styles.message}>Loading...</Text>}
      {error && weather.length === 0 && (
        <Text style={styles.message}>
          Error occurred while fetching weather data
        </Text>
      )}
    </View>
  );
};

export default FetchWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  weatherDataContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 20,
    width: "80%",
  },
  weatherDataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  weatherDataLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  weatherData: {
    fontSize: 16,
    color: "#333",
  },
  noLocationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF0000",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#333",
  },
});
