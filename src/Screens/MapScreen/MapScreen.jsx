import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = () => {
  const {
    params: { location, name, place },
  } = useRoute();

  const { latitude, longitude } = location;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        // onMapReady={() => console.log("Map is ready")}
        // onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title={place}
          coordinate={{
            latitude,
            longitude,
          }}
          description={name}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
