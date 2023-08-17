import {View, Text, Button} from 'react-native'
import styles from './styles.js'

export default function Home({navigation, route}){
    const {conta} = route.params

    var dobro = conta * 2

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Home</Text>
            <Text style={styles.caixa}>{conta}</Text>
            <Button
                title='OK'
                onPress={()=> navigation.navigate('Final', {dobro})}
            />
        </View>
    )
}
