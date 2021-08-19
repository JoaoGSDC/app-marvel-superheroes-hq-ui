import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import ItemHq from "../../components/ItemHq";
import api from "../../services/api";
import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const [superheroComics, setSuperheroComics] = useState<any>([]);

  const superhero: any = useSelector((state: any) => state.superhero);

  useEffect(() => {
    const handleComics = async () => {
      await api
        .get(`/characters/${superhero.id}/comics`)
        .then((response: any) => {
          setSuperheroComics(response.data.data.results);
        })
        .catch((error: any) => console.log(error));
    };

    handleComics();
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.textContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.icon}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.firstText}>Welcome to the</Text>
          <Text style={styles.superheroName}>{superhero.name}</Text>
          <Text style={styles.lastText}>comics gallery!</Text>
        </View>

        <FlatList
          data={superheroComics}
          renderItem={({ item }) => <ItemHq key={item.id} item={item} />}
          horizontal
          showsVerticalScrollIndicator
          pagingEnabled
          bounces={false}
        />
      </View>
    </>
  );
};

export default Home;
