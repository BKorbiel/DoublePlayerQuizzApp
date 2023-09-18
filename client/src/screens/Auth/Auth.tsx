import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const Auth = () => {
    const [isSignUp, setIsSingUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState('');

    return (
        <View style={styles.container}>
            <Text>{isSignUp ? "Create a new account" : "Sign In"}</Text>
            {isSignUp && 
                <TextInput
                    value={email}
                    placeholder="Enter your email"
                    onChangeText={(text) => setEmail(text)}
                />
            }
            <TextInput
                value={username}
                placeholder="Enter your username"
                onChangeText={(text) => setUsername(text)}
                />
            <TextInput
                value={password}
                placeholder="Enter your password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                />
            {isSignUp && 
                <TextInput
                    value={passwordConfirm}
                    placeholder="Confirm password"
                    onChangeText={(text) => setPasswordConfirm(text)}
                />
            }
            <Button title={"Sign In"} onPress={() => {}}/>
            <Button title={"Don't have an account yet? Create a new one"} onPress={() => setIsSingUp(true)}/>
        </View>
    )
}

export default Auth;