import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

interface IPropsDTO {
  superheroes: any;
}

const ChooseHero = ({ superheroes }: IPropsDTO) => {
  const navigation = useNavigation();
  const dispatch: any = useDispatch();

  return (
    <>
      <ScrollView style={styles.container}>
        {superheroes.map((superhero: any) => {
          return (
            <>
              <TouchableOpacity
                key={superhero.id}
                style={styles.button}
                onPress={() => {
                  dispatch({
                    type: "ADD_SUPERHERO",
                    superhero: { id: superhero.id, name: superhero.name },
                  });
                  // @ts-ignore: Unreachable code error
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.text}>{superhero.name}</Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </>
  );
};

export default ChooseHero;
