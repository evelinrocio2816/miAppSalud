import { FlatList, Text, View } from 'react-native'
import styles from './Especialidades.styles'
import dataCategorys from '../../data/dataCategorys'
import { CategoryItem } from '../Home/components'
import { Header } from '../../components'


const Especialidades = ({ navigation}) => {
  return (
    <View >
        <Header title={'Especialidades'}/>
      <FlatList
      data={dataCategorys}
      keyExtractor={category => category}
      renderItem={({item}) =>(<CategoryItem category={item.especialidad} navigation={navigation}/>)  }/>
    </View>
  )
}

export default Especialidades

