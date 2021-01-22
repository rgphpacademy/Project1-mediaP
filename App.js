import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home Page"
    }
  }
);

export default createAppContainer(navigator);
