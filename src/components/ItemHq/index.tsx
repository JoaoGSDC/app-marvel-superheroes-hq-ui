import React from "react";
import { View, Image, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";

interface IPropsDTO {
  item: any;
}

const ItemHq = ({ item }: IPropsDTO) => {
  const { width, height } = useWindowDimensions();

  const uri = `${item.thumbnail.path}.${item.thumbnail.extension}`;

  return (
    <>
      <View
        style={{
          width,
          height,
          alignItems: "center",
          marginTop: -30,
          marginBottom: -30,
        }}
      >
        <Image source={{ uri }} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.price}>U${item.prices[0].price.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};

export default ItemHq;
