import React from 'react';
import {Text, View, StyleSheet, StatusBar, TextInput} from 'react-native';
import Button from "../Buttons/Button";

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <StatusBar backgroundColor="#9E1774" />

                <View style={styles.Card}>
                    <View style={{width: "100%", height:"10%",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",fontSize:22, fontFamily: 'sans-serif-medium'}}>Sign In</Text>
                    </View>
                    <View style={{width:"100%",height:"90%",justifyContent:"center"}}>
                        <TextInput
                            keyboardType='default'
                            placeholder="Email"
                            placeholderTextColor="gray"
                            style={styles.TextInput}
                        />
                        <TextInput
                            keyboardType='default'
                            placeholder="Password"
                            placeholderTextColor="gray"
                            style={styles.TextInput}
                            secureTextEntry
                        />

                        <Button
                            outerHeight={"12%"}
                            innerHeight={"100%"}
                            outerWidth={"95%"}
                            innerWidth={"85%"}
                            outerColor={"#9E1774"}
                            innerColor={"white"}
                            shadow={"#9E1774"}
                            Text={"SIGN IN"}
                            onPress={()=>this.props.navigation.navigate("Disability")}
                        />

                        <View style={{flexDirection:"row",alignSelf: "center",marginTop: "10%"}}>
                            <Text>Don't have an account yet? </Text>
                            <Text style={{color:"#9E1774"}} onPress={()=>this.props.navigation.navigate("Register")}>Sign Up</Text>
                        </View>

                    </View>
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
    Card: {
        width: "95%",
        height: "95%",
        backgroundColor: "white",
        alignSelf: "center",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: "10%"
    },
    TextInput: {
        width: "95%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        alignSelf: "center",
    }
})
