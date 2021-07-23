import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ChatList extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={{flexDirection: "row"}}>
                    <Icon name="arrow-left" size={20} style={{color: "white", margin: 20}} />
                    <Text style={{textAlign:"center", margin: 20,fontSize:15, fontFamily: 'sans-serif-thick', letterSpacing:2, color: "white"}}>CHAT BOX</Text>
                </View>
                <View style={styles.Body}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#9E1774"
    },
    Body: {
        width: "100%",
        height: "89%",
        backgroundColor: "#F7F7F7",
        marginTop: "5%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});
