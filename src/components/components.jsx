
import React, { useRef, useState } from 'react';
import './Chatcomp.css'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVsHQsx09KjgWIIN5ZIScquRHY484_EV0",
  authDomain: "firstapp-c9c91.firebaseapp.com",
  projectId: "firstapp-c9c91",
  storageBucket: "firstapp-c9c91.appspot.com",
  messagingSenderId: "1095336336332",
  appId: "1:1095336336332:web:730fb55710f71b8aae5b69",
  measurementId: "G-QT60SRJ8LY"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function ChatComp(props) {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Khoj Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom productId={props.productId} convId={props.convId}/> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function  ChatRoom(props) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query =  messagesRef.where('convId', '==' , props.convId);
  const correctquerry = query.where('productId', '==', props.productId).limit(25);
  const sortedQuery = correctquerry.orderBy('createdAt', 'asc');


  console.log(query);

  const [messages] = useCollectionData(sortedQuery, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  console.log(messages);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      convId: props.convId,
      productId: props.productId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type your message here" />

      <button type="submit" disabled={!formValue}>✈</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default ChatComp;