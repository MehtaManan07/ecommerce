import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB7E7coek0EiJm9yCzw9x5SlX1_sqYoWa0",
    authDomain: "ecommerce-ae1d1.firebaseapp.com",
    databaseURL: "https://ecommerce-ae1d1.firebaseio.com",
    projectId: "ecommerce-ae1d1",
    storageBucket: "ecommerce-ae1d1.appspot.com",
    messagingSenderId: "827264267496",
    appId: "1:827264267496:web:d33b476f8408c145ae855d",
    measurementId: "G-Y9BNH62S8W"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  console.log('snapshot', snapshot)

  if(!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user:', error.message)
    }
  }

  return userRef

  // console.log(firestore.doc('users/wrdf2313efdd'))

}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const loginWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
