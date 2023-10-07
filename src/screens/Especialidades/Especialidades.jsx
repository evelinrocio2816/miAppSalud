import { FlatList, View } from "react-native";

import { CategoryItem } from "../Home/components";
import { Header } from "../../components";
import { useGetCategoryQuery } from "../../services/medicApi";



const Especialidades = ({ navigation }) => {
 const{data,isLoading}=useGetCategoryQuery()
  return (
    <View>
      <Header title={"Especialidades"} />
      {!isLoading && ( <FlatList
        data={data}
        keyExtractor={category => category.especialidad}
        renderItem={({ item }) => (
          <CategoryItem category={item.especialidad} navigation={navigation} />
        )}
      />)}
     
    </View>
  );
};

export default Especialidades;
