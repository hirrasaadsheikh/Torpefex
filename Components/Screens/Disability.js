import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Progressbar from "../Progressbar";

export default class Disability extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Progressbar
                    first = "#9E1774"
                    second = "#D3D3D3"
                    third = "#D3D3D3"
                    fourth = "#D3D3D3"
                    fifth = "#D3D3D3"
                    />
                </View>

                <View style={styles.Body}>
                    <Text style={{textAlign:"center",fontSize:22, fontFamily: 'sans-serif-medium'}}>What's your disability?</Text>
                    <ScrollView>
                        <TouchableOpacity style={styles.Bar} onPress={()=>this.props.navigation.navigate("MaritalStatus")}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Leg Disable</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Eye Sight</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Heart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Nose Disability</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Arms Cut</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Brain Issue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Cuts</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Breathing Problems</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Hand Issue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Sugar Patient</Text>
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

