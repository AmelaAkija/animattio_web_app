import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxGjb4Opd8sV7L1LdQzu6RSq1avCqJTpA",
  authDomain: "animattio-mobile-app.firebaseapp.com",
  projectId: "animattio-mobile-app",
  storageBucket: "animattio-mobile-app.appspot.com",
  messagingSenderId: "202556353541",
  appId: "1:202556353541:web:4c222878917b5bcebcc06c"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
