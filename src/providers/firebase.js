import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCowZ59Ms9TjrDru1Tz40e8fh2KtlHZlFo",
  authDomain: "goal-coach-953d0.firebaseapp.com",
  databaseURL: "https://goal-coach-953d0.firebaseio.com",
  projectId: "goal-coach-953d0",
  storageBucket: "",
  messagingSenderId: "41868907638"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
