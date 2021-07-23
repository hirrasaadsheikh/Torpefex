import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Footer extends React.Component{
    render(){
        return(
            <View style={{width:"95%", height: "75%", backgroundColor: "#115E9B",alignSelf:"center",borderRadius:40,justifyContent:"center"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 40}}>
                    <TouchableOpacity onPress={this.props.onPressChat}>
                        <Icon name="comment" size={this.props.sizeChat} style={{color:this.props.colorChat}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressHome}>
                        <Icon name="home" size={this.props.sizeHome} style={{color:this.props.colorHome}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressUser}>
                        <Icon name="user" size={this.props.sizeUser} style={{color:this.props.colorUser}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Footer
