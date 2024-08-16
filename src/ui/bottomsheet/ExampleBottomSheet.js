import { Button, Text, View } from "react-native";
import { useBottomSheet } from "../../utils/BottomSheetUtils";





function ExampleBottomSheet() {
    const {showBottomSheet,hideBottomSheet} = useBottomSheet();

    return (
        <View style={{alignSelf:'center',flex:1,height:250}}>
        <Text>hello</Text>
        <Button title="hello" onPress={hideBottomSheet} />
        </View>
    )
}


export default ExampleBottomSheet;