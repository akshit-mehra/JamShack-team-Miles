import React, { useRef, useState, useContext } from 'react';
import './ChatComp.css'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import appContext from "../../context/AppContext";


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


function ChatComp() {


  const context=useContext(appContext);
  const {chatProductId, chatConvId}=context;
  const [user] = useAuthState(auth);

  return (
    <div className="ChatApp">
      <header>
        <h1 >Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom productId={chatProductId} convId={chatConvId}/> : <SignIn />}
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
      <button className="sign-in chatbutton" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will recieve a  ban </p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out chatbutton" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function  ChatRoom(props) {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query =  messagesRef.where('convId', '==' , props.convId);
  const correctquerry = query.where('productId', '==', props.productId);
  const sortedQuery = correctquerry.orderBy('createdAt', 'asc').limit(100);


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
    <main className="mainChat">

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="chatform" onSubmit={sendMessage}>

      <input className="chatInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type your message here" />

      <button type="submit" id="sub-button" className="chatbutton" disabled={!formValue}>✈</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img id="profileimg" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default ChatComp;