import React from "react";
import { Text, View, FlatList } from "react-native";
import OnboardingItem from "../OnboardingItem";
import { styles } from "./styles";

const Onboarding = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={[
            {
              id: 1,
              image: require("../../../assets/bg-onboarding-cap.jpg"),
              description:
                "In this app you can see your favorites Marvel's Comics",
              showButton: false,
            },
            {
              id: 2,
              image: require("../../../assets/bg-onboarding-iron.jpg"),
              description: "Choose your favorite superhero",
              showButton: true,
            },
          ]}
          renderItem={({ item }) => (
            <OnboardingItem key={item.id} item={item} />
          )}
          horizontal
          showsVerticalScrollIndicator
          pagingEnabled
          bounces={false}
        />
      </View>
    </>
  );
};

export default Onboarding;
