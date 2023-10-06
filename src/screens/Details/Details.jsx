import { Image, Text, View } from "react-native";
import styles from './Details.style'
import { Header } from "../../components";






const Details = ({route}) => {
  const {medicos}=route.params
  return (
    <>
      <View style={styles.container}>
        <Header title={"Detalles Del Turno"} />
       <Image style={styles.image} source={medicos.image}/>
        <Text style={styles.title}>Medico:{medicos.nombre}</Text>
        <Text style={styles.description}>Description:{medicos.desciption}</Text>
        <Text style={styles.price}>Precio: $ ${medicos.price}</Text>
       
      </View>
    
    </>
  );
};

export default Details;
