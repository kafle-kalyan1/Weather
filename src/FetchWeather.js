import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const FetchWeather = () => {
   const [weather, setWeather] = useState([])
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   
   const axiosData = () => {
      console.log("okkk")
      // axios.get("api.openweathermap.org/data/2.5/forecast?q=Dharan&appid=afcde0ca355ba4fe4fc0947b41892bf0")
      axios.get("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=afcde0ca355ba4fe4fc0947b41892bf0")
        .then(response => {
         //  setWeather(response.data)
          setLoading(false)
          console.log("OKKKK")
          console.log(response.data.list[0].main.temp)
        })
        .catch(error => {
         console.log("OK")

          setError(true)
          setLoading(false)
          console.log(error)
        })
   }

  return (
    <View>
      <Text>FetchWeather</Text>
      <Button title='Press' onPress={axiosData}/>

    </View>
  )
}

export default FetchWeather

const styles = StyleSheet.create({})
