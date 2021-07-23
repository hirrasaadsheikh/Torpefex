import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Progressbar from "../Progressbar";
import {FancyAlert} from "react-native-expo-fancy-alerts";
import Button from "../Buttons/Button";

export default class Country extends React.Component{

    state = {
        visible: false
    }
    Alert = () => {
        this.setState({visible: true})
    }
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Progressbar
                        first = "#9E1774"
                        second = "#9E1774"
                        third = "#9E1774"
                        fourth = "#9E1774"
                        fifth = "#9E1774"
                    />
                </View>

                <View style={styles.Body}>
                    <View>
                        <FancyAlert
                            visible={this.state.visible}
                            icon={<View style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'green',
                                borderRadius: 50,
                                width: '100%',
                            }}><Text style={{fontSize:25, color:"white"}}>✔</Text></View>}
                            style={{ backgroundColor: 'white' }}
                        >
                            <Text style={{ marginTop: -16, marginBottom: 32 }}>Congrats! We are done</Text>
                            <Button
                                outerHeight={"18%"}
                                innerHeight={"100%"}
                                outerWidth={"95%"}
                                innerWidth={"85%"}
                                outerColor={"green"}
                                innerColor={"white"}
                                shadow={"green"}
                                Text={"Let's Find Your Match"}
                                onPress={()=>this.props.navigation.navigate("Dashboard")}
                            />
                        </FancyAlert>
                    </View>
                    <Text style={{textAlign:"center",fontSize:22, fontFamily: 'sans-serif-medium'}}>Country</Text>
                    <ScrollView>
                        <TouchableOpacity style={styles.Bar} onPress={this.Alert}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Pakistan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>United States</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Indonesia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>England</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Malaysia</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Dubai</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Singapore</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Natherland</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Newzealand</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>France</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Bar}>
                            <Text style={{textAlign:"center", fontFamily: 'sans-serif-thick'}}>Switzerland</Text>
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

