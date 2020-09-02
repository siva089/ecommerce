import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const config= {
    apiKey: "AIzaSyDekLCvryrnaUKXMBqqJ2Y3GK3OfH5VNIQ",
    authDomain: "ecommerce-c1c83.firebaseapp.com",
    databaseURL: "https://ecommerce-c1c83.firebaseio.com",
    projectId: "ecommerce-c1c83",
    storageBucket: "ecommerce-c1c83.appspot.com",
    messagingSenderId: "628274121351",
    appId: "1:628274121351:web:2b770d4ac4c9d295474622"
  };

  firebase.initializeApp(config)

  export const auth=firebase.auth()
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({promt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase