import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FetchWeather from "./FetchWeather";

const ShowData = () => {
  const [curLocation, setLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);

  const submit = () => {
    console.log(curLocation);
    setShowLocation(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Location"
          placeholderTextColor="#000"
          onChangeText={(data) => {setLocation(data)
            setShowLocation(false)
          }}
          value={curLocation}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          onSubmitEditing={submit}
        />
        <TouchableOpacity style={styles.searchButton} onPress={submit}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>

        {showLocation && (
          <View>
            {curLocation === "" ? (
              <Text>Please Enter Location..</Text>
            ) : (
              <FetchWeather currLocation={curLocation} />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default ShowData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:-40
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchButton: {
    marginLeft: 10,
  },
});
