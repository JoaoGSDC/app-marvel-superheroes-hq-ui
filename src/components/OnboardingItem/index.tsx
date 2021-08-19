import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import api from "../../services/api";
import ChooseHero from "../ChooseHero";
import { styles } from "./styles";

interface IPropsDTO {
  item: any;
}

const OnboardingItem = ({ item }: IPropsDTO) => {
  const { width } = useWindowDimensions();

  const [displayChooseHero, setDisplayChooseHero] = useState<boolean>(false);

  const [superheroes, setSuperheroes] = useState<any>([]);

  useEffect(() => {
    const handleComics = async () => {
      await api
        .get(`/characters`)
        .then((response: any) => {
          setSuperheroes(response.data.data.results);
        })
        .catch((error: any) => console.log(error));
    };

    handleComics();
  }, []);

  return (
    <>
      <View style={[styles.container, { width }]}>
        <Image source={item.image} style={[styles.image, { width }]} />
        {!displayChooseHero ? (
          <View style={styles.textContainer}>
            <Text style={styles.description}>{item.description}</Text>

            {item.showButton ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => setDisplayChooseHero(true)}
              >
                <Text style={styles.buttonText}>Let's go!</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <View style={styles.circlesContainer}>
              <View
                style={[
                  styles.circle,
                  { opacity: item.id === 1 ? 0.75 : 0.25 },
                ]}
              />
              <View
                style={[
                  styles.circle,
                  { opacity: item.id === 2 ? 0.75 : 0.25 },
                ]}
              />
            </View>
          </View>
        ) : (
          <ChooseHero superheroes={superheroes} />
        )}
      </View>
    </>
  );
};

export default OnboardingItem;
