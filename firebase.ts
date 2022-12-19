// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDyiexjS2vHrtdI3fL00oU3UhdR-3ruuPM',
    authDomain: 'netflix-redesign-4c8e9.firebaseapp.com',
    projectId: 'netflix-redesign-4c8e9',
    storageBucket: 'netflix-redesign-4c8e9.appspot.com',
    messagingSenderId: '177017257077',
    appId: '1:177017257077:web:19aa6a044f26d5d0be4c3c',
    measurementId: 'G-G89T5W4K1W',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp() // check if init
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
