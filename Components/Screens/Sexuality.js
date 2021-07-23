import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Progressbar from "../Progressbar";

export default class Sexuality extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Progressbar
                        first = "#9E1774"
                        second = "#9E1774"
                        third = "#9E1774"
                        fourth = "#D3D3D3"
                        fifth = "#D3D3D3"
                        onPressFirst = {()=>this.props.navigation.navigate("Education")}
                    />
                </View>

                <View style={styles.Body}>
                    <Text style={{textAlign:"center",fontSize:22, fontFamily: 'sans-serif-medium'}}>Sexuality</Text>
                    <ScrollView>
                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}} onPress={()=>this.props.navigation.navigate("Treatment")}>Male</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Female</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Other</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
    },
    Header: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
    },
    Body: {
        width: "100%",
        height: "90%",
    },
    Bar: {
        width: "90%",
        height: 50,
        alignSelf: "center",
        borderRadius:20,
        borderColor: "#D3D3D3",
        borderWidth: 1.3,
        justifyContent: "center",
        marginTop: "5%"
    }
});

