import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfig.js";

export const signin = async (req, res) => {
    const auth = FIREBASE_AUTH;
    const {email, password} = req.body;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials);
            //create record in db
        })
        .catch((error) => {
            res.status(error.code).json({message: error.message});
            console.log(error);
        })
}

export const signup = async (req, res) => {
    const auth = FIREBASE_AUTH;
    const {email, password, username, passwordConfirm} = req.body;

    if (password != passwordConfirm) {
        return res.status(400).json({ message: "Passwords don't match." });
    }

    //check if the nickname doesnt exist yet

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials);
            //create record in db
        })
        .catch ((error) => {
            res.status(error.code).json({message: error.message});
            console.log(error);
        })
}