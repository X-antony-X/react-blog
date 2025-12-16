import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC2ls3VKfYEnvXem0u08cAguL1fJn5gF6o",
  authDomain: "react-blog-a3b4a.firebaseapp.com",
  projectId: "react-blog-a3b4a",
  storageBucket: "react-blog-a3b4a.firebasestorage.app",
  messagingSenderId: "682091481448",
  appId: "1:682091481448:web:8811cf2c86657cc4cd2edd"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
