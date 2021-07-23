import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Footer from "../Footer/Footer";

export default class Dashboard extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={{textAlign:"center",fontSize:15, fontFamily: 'sans-serif-thick', letterSpacing:2}}>LET'S CONNECT WITH YOUR MATCH</Text>
                </View>

                <View style={styles.Body}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.Card}>
                            <Image
                                style={styles.Image}
                                source={require("../../Assets/First.jpeg")}
                            />

                            <View style={{marginTop: "4%"}}>
                                <Text style={{fontFamily: 'sans-serif-medium', marginLeft: 10}}>Harry Michael</Text>
                                <View style={styles.Description}>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "2%"}}>23 Years</Text>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "3%"}}>United States</Text>
                                    <TouchableOpacity>
                                        <Image
                                            style={{width:40, height: 40}}
                                            source={require("../../Assets/Chat.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Card}>
                            <Image
                                style={styles.Image}
                                source={require("../../Assets/Second.jpg")}
                            />

                            <View style={{marginTop: "4%"}}>
                                <Text style={{fontFamily: 'sans-serif-medium', marginLeft: 10}}>Johny Jam</Text>
                                <View style={styles.Description}>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "2%"}}>23 Years</Text>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "3%"}}>United Kingdom</Text>
                                    <TouchableOpacity>
                                        <Image
                                            style={{width:40, height: 40}}
                                            source={require("../../Assets/Chat.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Card}>
                            <Image
                                style={styles.Image}
                                source={require("../../Assets/Third.jpg")}
                            />

                            <View style={{marginTop: "4%"}}>
                                <Text style={{fontFamily: 'sans-serif-medium', marginLeft: 10}}>Harry Virk</Text>
                                <View style={styles.Description}>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "2%"}}>23 Years</Text>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "3%"}}>France</Text>
                                    <TouchableOpacity>
                                        <Image
                                            style={{width:40, height: 40}}
                                            source={require("../../Assets/Chat.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Card}>
                            <Image
                                style={styles.Image}
                                source={require("../../Assets/Fourth.jpg")}
                            />

                            <View style={{marginTop: "4%"}}>
                                <Text style={{fontFamily: 'sans-serif-medium', marginLeft: 10}}>Sheeda Pappi</Text>
                                <View style={styles.Description}>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "2%"}}>23 Years</Text>
                                    <Text style={{fontFamily: 'sans-serif-medium', color: "#555F5E", marginTop: "3%"}}>Switzerland</Text>
                                    <TouchableOpacity>
                                        <Image
                                            style={{width:40, height: 40}}
                                            source={require("../../Assets/Chat.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.Footer}>
                    <Footer
                    sizeHome = {35}
                    colorHome = {"#F7C900"}
                    sizeUser = {31}
                    colorUser = {"white"}
                    sizeChat = {30}
                    colorChat = {"white"}
                    onPressChat = {()=>this.props.navigation.navigate("ChatList")}
                    onPressHome = {()=>this.props.navigation.navigate("Dashboard")}
                    onPressUser = {()=>this.props.navigation.navigate("User")}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#9E1774"
    },
    Header: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        // backgroundColor: "black"
    },
    Body: {
        width: "100%",
        height: "80%",
        justifyContent: "center",
        // backgroundColor: "red"
    },
    Card: {
        width: 300,
        height: 450,
        backgroundColor: "#EFEFEF",
        alignSelf: "center",
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 4,
        marginLeft: 20
    },
    Image: {
        width: 300,
        height: 370,
        borderRadius: 20,
        marginTop: -0.5,
        // marginLeft: 10,
    },
    Description: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    Footer: {
        width: "100%",
        height: "10%",
        justifyContent: "center"
    }
});
