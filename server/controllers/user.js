import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE} from "../firebaseConfig.js";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"; 

export const signin = async (req, res) => {
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_FIRESTORE;
    const {email, password} = req.body;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        const token = userCredentials.user.accessToken;
        
        const userRef = doc(db, "users", userCredentials.user.uid);
        const user = await getDoc(userRef);

        if (!user.exists()) {
            return res.status(500).json({ message: "Something went wrong." });
        }

        const userData = user.data();
        res.status(200).json({userData, token});
    } catch(error) {
        res.status(500).json({message: error});
        console.log(error);
    }
}

export const signup = async (req, res) => {
    const auth = FIREBASE_AUTH;
    const db = FIREBASE_FIRESTORE;
    const {email, password, username, passwordConfirm} = req.body;

    if (password != passwordConfirm) {
        return res.status(400).json({ message: "Passwords don't match." });
    }

    try {
        const existingUsernameQuery = query(collection(db, "users"), where("username", "==", username));
        const existingUsername = await getDocs(existingUsernameQuery);
        if (!existingUsername.empty()) {
            return res.status(400).json({ message: "Username already exists." });
        }

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const token = userCredentials.user.accessToken;
        const userData = {
            id: userCredentials.user.uid,
            username: username,
            email: email,
        }

        await setDoc(doc(db, "users", userCredentials.user.uid), userData);

        res.status(200).json({userData, token});
    } catch(error) {
        res.status(500).json({message: error});
        console.log(error);
    }
}