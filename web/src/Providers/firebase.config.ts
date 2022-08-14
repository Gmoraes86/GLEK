import { getApps, initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCgJddvwtMafgAH8D7xX4PM1fCwRLLIFlA",
  authDomain: "glek-5678b.firebaseapp.com",
  projectId: "glek-5678b",
  storageBucket: "glek-5678b.appspot.com",
  messagingSenderId: "179039682616",
  appId: "1:179039682616:web:5f8e6f70be74e01ac426cd"
};

export const startFirebase = () => {
  const isRunning = !!(getApps().length);
  if (!isRunning) initializeApp(firebaseConfig);
  return isRunning;
}


