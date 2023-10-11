import { FlatList, Pressable, Text, View } from "react-native";
import  styles from './Orders.styles'
import { Header } from "../../components";
import dataOrders from "../../data/dataOrders";
import OrdersItem from "./components/OrdersItem";
import { useSelector } from "react-redux";


const Orders = () => {
  const shift = useSelector(state=> state.shift.items)
  const total= useSelector(state => state.shift.total)
  const renderItem = ({item})=> <OrdersItem item={item}/>
  return (
    <>
      <View >
        <Header title={"Orden de turno"} />
      </View>
      <View style={styles.container}>
        <FlatList data={shift}
        keyExtractor={item => item.id}
        renderItem={renderItem}/>
      </View>
      <View>
        <Pressable>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total: ${total}`} </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default Orders;
