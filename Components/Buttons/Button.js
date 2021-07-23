import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity style={{height:this.props.outerHeight, width:"95%", backgroundColor:this.props.outerColor, alignSelf:"center",borderRadius:10, flexDirection:"row", marginTop:"20%",
                shadowColor: this.props.shadow,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 4}} onPress={this.props.onPress}>
                <View style={{height:this.props.innerHeight, width:"85%", backgroundColor:this.props.innerColor,borderRadius:10, justifyContent:"center"}}>
                    <Text style={{textAlign:"center"}}>{this.props.Text}</Text>
                </View>
                <Icon name="arrow-right" size={15} style={{color:"white",margin:"7%"}} />
            </TouchableOpacity>
        )
    }
}

export default Button
