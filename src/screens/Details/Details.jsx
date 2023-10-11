import {
  Image,
  Pressable,

  Text,
 
  View,
} from "react-native";
import styles from "./Details.style";
import { Header } from "../../components";
import { useDispatch } from "react-redux";
import  {addItem}  from "../../features/shift/shiftSlice";

const Details = ({ route}) => {
 
  const dispatch = useDispatch();

  const handleAddShift = () => {
    dispatch(addItem({ ...shift, quantity: 1 }));
  };
  const { medicos} = route.params;
  return (
    <>
      <View style={styles.container}>
        <Header title={"Detalles Del Turno"} />

        <Image style={styles.image} source={medicos.image} />
        <Text style={styles.title}>Medico:{medicos.nombre}</Text>
        <Text style={styles.description}>
          Description:{medicos.description}
        </Text>
        <Text style={styles.price}>Precio: ${medicos.price}</Text>

        <Pressable onPress={handleAddShift}>
          <Text>Add Shift</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Details;
{
  /* <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()} >
      <Text style={styles.textButton}>Back ⬅️ </Text>
  </TouchableOpacity>*/
}
