import { Button, Text, View } from "react-native";




function SplashScreen({navigation}) {

    return(
        <View style={{flex:1,alignSelf:'center',justifyContent:'center'}} >
            <Text>SplashScreen</Text>
            <Button onPress={()=>navigation.replace('Home')} title="nest" />
        </View>
    )
}


export default SplashScreen;