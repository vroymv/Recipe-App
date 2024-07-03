import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./Routes/HomeStack";
import DrawerContaner from "./Routes/Drawer/DrawerContaner";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        id="sidedDrawer"
        
        
        drawerContent={({ navigation }) => (
          <DrawerContaner navigation={navigation} />
        )}
        screenOptions={{
          drawerType:"front",
          
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={() => ({
            headerShown: false,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
