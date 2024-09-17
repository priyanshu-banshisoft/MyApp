import { Button, Text, View } from "react-native";
import { useBottomSheet } from '../../utils/BottomSheetUtils';
import { useLoader } from "../../components/GlobalLoader";
import { useBaseApplication } from "../../app/BaseApplication";
import apiClient from '../../api/ApiService';
import ExampleBottomSheet from "../bottomsheet/ExampleBottomSheet";
import { showToast } from "../../utils/ToastUtils";
import SweetAlert, { showSweetAlert } from "../../components/sweetAlert";
import { showAlert } from "../../utils/AlertUtils";


function HomeScreen() {
    const { authToken, checkInternetConnection } = useBaseApplication();
    const { showLoader, hideLoader } = useLoader();
    const {showBottomSheet} = useBottomSheet();
  
    const fetchData = async() => {
      showLoader();
        // showAlert({
        //     title:''
            
        // })
        // showSweetAlert({})
        //showBottomSheet(<ExampleBottomSheet />);
    //   if (!checkInternetConnection()) {
    //     console.log('No internet connection');
    //     return;
    //   }
    
    //   showLoader();
      
      try {
        //const response = await apiClient.post(ApiPaths.LOGIN)
        const response = await apiClient.get('products/get_category');
        console.log(response);

        //showBottomSheet(<ExampleBottomSheet />);
        //showToast('Hello');
        //console.log('Auth Token:', response.data);
      } catch (error) {
        console.log('Error:', error);
      } finally {
        hideLoader();
      }
    };
  
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Fetch Data" onPress={ fetchData} />
      </View>
    );
  }


  export default HomeScreen;