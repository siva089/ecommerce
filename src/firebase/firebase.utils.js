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
  
  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    // console.log(firestore.doc(`users/12131232131`));
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapshot =await userRef.get()
    console.log(snapshot);
   if(snapshot&&!snapshot.exists){
     const {displayName,email}=userAuth
     const createdDate=new Date();
     try {
       await userRef.set({
         displayName,
         email,
         createdDate,
         ...additionalData
       })
     } catch (error) {
       console.log("error creating user",error);
     }
   }
return userRef
  }


  const provider=new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({promt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase