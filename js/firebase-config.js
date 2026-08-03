// =========================================================
// FILL THIS IN — see README.md "Set up live scoring" section
// =========================================================
// 1. Go to https://console.firebase.google.com, create a free project.
// 2. Build > Firestore Database > Create database > Start in test mode
//    (then lock it down using the rules in firestore.rules.txt — see README).
// 3. Project settings (gear icon) > General > "Your apps" > Add app > Web (</>).
// 4. Copy the firebaseConfig object it gives you and paste the values below.
//
// This config is safe to commit / make public — it just tells the browser
// which Firebase project to talk to. Firestore Security Rules (not this file)
// are what actually control who can read/write your data.

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Set to false once firebaseConfig above is filled in with real values.
export const FIREBASE_NOT_CONFIGURED = true;
