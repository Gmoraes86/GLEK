import { startFirebase } from './firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

export const Authentication = () => {
    startFirebase()
  
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("token", token)
      // The signed-in user info.
      const user = result.user;
      console.log("user", user)
      return {
        token,
        user
      };
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      
      return false
    });
  
  }