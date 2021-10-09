import firebase from "firebase/compat";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MESSAGE_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "./Base";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth= firebase.auth();
