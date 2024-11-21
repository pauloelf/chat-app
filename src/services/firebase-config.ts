import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxnRoERcJWmyf810gFhvSpSKTtFkulSxY",
  authDomain: "chat-app-c407e.firebaseapp.com",
  projectId: "chat-app-c407e",
  storageBucket: "chat-app-c407e.firebasestorage.app",
  messagingSenderId: "78831069041",
  appId: "1:78831069041:web:c090ec59660cc6f6d1b8d0"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
  app,
  auth,
  db
}