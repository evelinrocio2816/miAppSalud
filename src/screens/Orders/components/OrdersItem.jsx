import { Pressable, Text, View , Image} from "react-native";
import styles from './OrdersItems.styles'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const OrdersItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image}/>
      </View>
     
      <View>
        <Text style={styles.name}>{item.nombre}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>{item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <Pressable>
          <FontAwesome5 name="trash-alt" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  );
};

export default OrdersItem;
