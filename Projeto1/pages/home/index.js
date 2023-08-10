import {View, Text, Button} from 'react-native'
import styles from './styles.js'

export default function Home({navigation, route}){
    const {conta} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Home</Text>
            <Text style={styles.caixa}>{conta}</Text>
            <Button
                title='Final'
                onPress={()=> navigation.navigate('Final')}
            />
            <Button
                title='Login'
                onPress={()=> navigation.navigate('Login')}
            />
        </View>
    )
}
