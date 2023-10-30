import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default AppNavigator;