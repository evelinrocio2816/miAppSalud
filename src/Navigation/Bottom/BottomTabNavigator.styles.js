import { StyleSheet } from "react-native";
import { colors } from "../../global/colors";


export default styles= StyleSheet.create({
    tabBar: {
        backgroundColor: colors.color1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 5,
      },
      iconContainer: {
        backgroundColor: colors.color3,
        borderRadius: 20,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },
    })
