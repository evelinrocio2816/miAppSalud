import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Medicos.styles";
import allMedicos from "../../data/medicos";
import { Header, SearchInput } from "../../components";
import { TouchableOpacity } from "react-native";

const Medicos = ({navigation, route }) => {
  const [arrMedicos, setArrMedicos] = useState([]);
  const [keyword, setKeyword] = useState("");
  const {category}= route.params

  useEffect(() => {
    if (category) {
      const medicos = allMedicos.filter(
        medico => medico.category === category
      );
      const medicosFiltered = medicos.filter(medico =>
        medico.especialidad.includes(keyword)
      );
      setArrMedicos(medicosFiltered);
    } else {
      const medicosFiltered = allMedicos.filter(medico =>
        medico.especialidad.includes(keyword)
      );
      setArrMedicos(medicosFiltered);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={"Servicios"} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList data={arrMedicos}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>navigation.navigate('Detalles del Turno',{medicos: item})}>
            <Text>{item.especialidad}</Text>

        </TouchableOpacity>}
        
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Medicos;
