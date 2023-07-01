import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { User } from "./entity";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

export const registerWithEmailAndPassword = async (formFields: User) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
      const user = res.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        user_name: formFields.username,
        authProvider: "local",
        email: formFields.email,
      });

      return user
    } catch (err) {
        if (err instanceof Error) {
            console.error(err);
        }
    }
};

export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user
    } catch (err) {
        if (err instanceof Error) {
            console.error(err);
        }
    }
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(user)
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }

    return true
  } catch (err) {
    if (err instanceof Error) {
        console.error(err)
    }
    return false
  }
};
