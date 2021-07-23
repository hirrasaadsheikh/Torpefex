import React from 'react';
import {StyleSheet, View, Text,Image,TextInput,TouchableOpacity,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Progressbar extends React.Component{
    state = {
        Sections: ""
    }
    render(){
        return(
            // <View style={{width:"100%",height:"100%"}}>
                <View style={{flexDirection:"row", justifyContent: "space-between",width:"100%",height:"100%",marginTop:"15%",paddingHorizontal:"5%"}}>
                    <TouchableOpacity style={{width:"15%",height:"10%",backgroundColor:this.props.first,borderRadius:10}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"15%",height:"10%",backgroundColor:this.props.second,borderRadius:10}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"15%",height:"10%",backgroundColor:this.props.third,borderRadius:10}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"15%",height:"10%",backgroundColor:this.props.fourth,borderRadius:10}}></TouchableOpacity>
                    <TouchableOpacity style={{width:"15%",height:"10%",backgroundColor:this.props.fifth,borderRadius:10}}></TouchableOpacity>
                    {/*<View style={{width:"55%",height:"50%",backgroundColor:"maroon"}}></View>*/}
                </View>
            // </View>
        )
    }
}

export default Progressbar
