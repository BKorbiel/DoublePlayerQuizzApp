import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {signin, signup } from '../../actions/auth';
const Auth = () => {
    const [isSignUp, setIsSingUp] = useState(false);
    const [data, setData] = useState({username:'', email:'', password:'', passwordConfirm:''});

    const handleSubmit = () => {
        if (isSignUp) {
            signup(data);
        } else {
            signin(data);
        }
    }

	useEffect(() => {
        const checkUser = async () => {
            const user = await AsyncStorage.getItem('user');
            if (user === null) {
                //navigate
            }
        }
		checkUser();
	}, []);

    return (
        <View style={styles.container}>
            <Text>{isSignUp ? "Create a new account" : "Sign In"}</Text>
            <TextInput
                value={data.email}
                placeholder="Enter your email"
                onChangeText={(text) => setData({...data, email: text})}
            />
            { isSignUp &&
                <TextInput
                    value={data.username}
                    placeholder="Enter your username"
                    onChangeText={(text) => setData({...data, username: text})}
                />
            }
            <TextInput
                value={data.password}
                placeholder="Enter your password"
                onChangeText={(text) => setData({...data, password: text})}
                secureTextEntry={true}
                />
            {isSignUp && 
                <TextInput
                    value={data.passwordConfirm}
                    placeholder="Confirm password"
                    onChangeText={(text) => setData({...data, passwordConfirm: text})}
                />
            }
            <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={() => handleSubmit()}/>
            <Button title={isSignUp ? 
                "Already have an account? Click here to sign in" 
                : 
                "Don't have an account yet? Click here to create a new one"} 
            onPress={() => setIsSingUp((prev) => !prev)}/>
        </View>
    )
}

export default Auth;