import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Disability from "../Screens/Disability";
import MaritalStatus from "../Screens/MaritalStatus";
import Sexuality from "../Screens/Sexuality";
import Treatment from "../Screens/Treatment";
import Country from "../Screens/Country";
import Dashboard from "../Screens/Dashboard";
import ChatList from "../Screens/ChatList";

const AppDrawerNavigator = createDrawerNavigator({
    Login:{
        screen: Login,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Register:{
        screen: Register,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Disability:{
        screen: Disability,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    MaritalStatus:{
        screen: MaritalStatus,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Sexuality:{
        screen: Sexuality,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Treatment:{
        screen: Treatment,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Country:{
        screen: Country,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Dashboard:{
        screen: Dashboard,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    ChatList:{
        screen: ChatList,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
})

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator }

});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
