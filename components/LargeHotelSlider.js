import React from "react";
import { FlatList, View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import COLORS from "../styles/colors";
import { HotelLarge } from "./cards/HotelLarge";

export const LargeHotelSlider = ({ hotels, bgColor, style }) => {
  const theme = useSelector((state) => state.themeReducer).theme;

  return (
    <View
      style={[
        styles.catalogueVertical,
        {
          backgroundColor:
            COLORS[bgColor] ||
            (theme == "light" ? COLORS.bgcLight : COLORS.bgcDark),
        },
        { ...style },
      ]}
    >
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <HotelLarge
            cardInfo={{
              imgUrl: item.images[0],
              price: item.minPrice,
              name: item.name,
              rating: item.rating,
              city: item.city,
              street: item.street,
              hotelID: item.id,
            }}
            style={styles.hotelLargeStyle}
            key={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hotelLargeStyle: {
    marginLeft: 20,
    marginRight: 18,
    marginTop: "5%",
    marginBottom: 100,
    width: "90%",
  },
  catalogueVertical: {
    width: Dimensions.get("window").width,
    marginTop: 39,
    // paddingBottom: 150,
  },
});
