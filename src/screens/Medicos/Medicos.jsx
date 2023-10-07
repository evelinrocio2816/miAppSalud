import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Medicos.styles";
import allMedicos from "../../data/dataMedicos";
import { Header, SearchInput } from "../../components";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useGetMedicsByCategoryQuery } from "../../services/medicApi";


const Medicos = ({ navigation }) => {
  const category =useSelector(state => state.medic.categorySelected)
  const [keyword, setKeyword] = useState("");
  const {data, isLoading}=useGetMedicsByCategoryQuery(category)
  

  return (
    <View style={styles.container}>
      <Header title={"Servicios"} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (<FlatList
          data={Object.values(data)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Detalles del Turno", { medicos: item })
              }
            >
              <Text>{item.nombre}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />)}
        
      </View>
    </View>
  );
};

export default Medicos 
