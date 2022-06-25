// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOGxaFdxENf8GKhTIsMi5Ktt6O2XU6oM",
  authDomain: "fir-native-dff9a.firebaseapp.com",
  projectId: "fir-native-dff9a",
  storageBucket: "fir-native-dff9a.appspot.com",
  messagingSenderId: "339104302604",
  appId: "1:339104302604:web:496c7367be8e3aa110d029"
};

// Initialize Firebase
let app;


if(firebase.default.apps.length===0)
    app=firebase.default.initializeApp(firebaseConfig)
else
    app=firebase.default.app()

const auth = firebase.default.auth();
export { auth};