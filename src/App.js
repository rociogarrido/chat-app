import "./App.css";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAU7dYQmQ-IDxOCH9ii12_Xcl7anNHvcSI",
  authDomain: "chat-app-28c36.firebaseapp.com",
  projectId: "chat-app-28c36",
  storageBucket: "chat-app-28c36.appspot.com",
  messagingSenderId: "847767015991",
  appId: "1:847767015991:web:4e14be9d47dad562c925b2",
  measurementId: "G-W9D3B7TKNE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign out
      </button>
    )
  );
}

function ChatRoom() {
  // reference a firestore collection
  const messagesRef = firestore.collection("messages");
  // query documents in a collection and limit to a max of 25
  const query = messagesRef.orderBy("createdAt").limit(25);
  // listen to data with a hook
  const [messages] = useCollectionData(query, { idField: "id" });
  // reacts to changes in realtime
  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  );
}
function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="avatar"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
