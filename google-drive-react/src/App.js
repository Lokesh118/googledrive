import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import * as React from 'react'
import { auth, provider } from './firebase';
import styled from 'styled-components';
import { useState } from 'react';
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  height: 200px;
`
const AuthWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 200px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  img {
    width: 20px;
  }
  button {
    width: 100%;
    background: darkmagenta;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top:20px
  }
`

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
      auth.signInWithPopup(provider).then(({user}) => setUser(user)).catch(err => alert(err))
  }
  return (
      <>
      {user ? (
        <>
          <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar />
            <Data />
          </div>  
        </>
      ) : (
          <>
            {/* <Login /> */}
            {/* <LoginWrapper>
              <Login />
            </LoginWrapper> */}
            <LoginWrapper>
              <SignUp />
            </LoginWrapper>
            <AuthWrapper>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="gdrive" />
              <button onClick={signIn}>Authenticate Using Google Account</button>
            </AuthWrapper>
          </>
      )
      }
          
      </>
  );
}

export default App;
