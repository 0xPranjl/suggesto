import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
  const [sugg,ssugg]=useState(false);
  const [code,scode]=useState();

  const firebaseConfig = {
    apiKey: "AIzaSyCat3fPZxlaDjwBusN31FCweniLvRXTHP4",
    authDomain: "anonsuggestion-e2f64.firebaseapp.com",
    projectId: "anonsuggestion-e2f64",
    storageBucket: "anonsuggestion-e2f64.appspot.com",
    messagingSenderId: "453276583422",
    appId: "1:453276583422:web:60226e065214517799ecaf",
    measurementId: "G-0G8HTFEFYD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <div className="App">
    <br></br>
    <br></br>
    <h1 style={{color:"purple"}}>Secret suggestion</h1>
    <br></br>
    {!sugg?<div>
    <h2>Enter the Last 3 digits of your mobile number to verify its you</h2>
    <input style={{marginTop:50, fontSize:30}} placeholder="###" onChange={(e)=>{
    scode(e.target.value);
    }} type="number" height="50px"></input>
    <br></br>
    <br></br>
    <Button variant="outline-success" onClick={()=>{
    if(code==269){
      ssugg(true);
    }
    else{
      alert("will open without correct answer try 999 times for breaking the code!! ")
    }
    }}>show suggestion</Button>
    </div>:<div style={{padding:50,fontFamily:"-moz-initial"}}>
     <h3>
     1) Jo pehla wala gaana tha woh bhul jaao. "kahani suno" song suni ho woh gaa do bahut mast lagta aaj sunday hai agar free ho toh yaa jab bhi free hona tab
      <br></br>
      <br></br>
      2)aur jo bhi gaana gaya karo woh upload kardiya karo and jo usme se mast wala part rehta hai na usko trim karke woh youtube shorts bana ke upload kardiya karo
      youtube shorts mein SEO shi rehta kaafi view milta apne aap.
     </h3>
  <br></br>
  {/* <h1>REPLY IN THE COMMENT SECTION😂😂</h1> */}
      
      </div>}
    </div>
  );
}

export default App;
