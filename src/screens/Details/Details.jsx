import { Image, Text,  TouchableOpacity,  View } from "react-native";
import styles from './Details.style'
import { Header } from "../../components";






const Details = ({route, navigation}) => {
  const {medicos}=route.params
  return (
    <>
      <View style={styles.container}>
        <Header title={"Detalles Del Turno"} />
       <Image style={styles.image} source={medicos.image}/>
        <Text style={styles.title}>Medico:{medicos.nombre}</Text>
        <Text style={styles.description}>Description:{medicos.description}</Text>
        <Text style={styles.price}>Precio: $ ${medicos.price}</Text>

     <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()} >
      <Text style={styles.textButton}>Back ⬅️ </Text>
     </TouchableOpacity>

   
        
      </View>
    
    </>
  );
};

export default Details;
