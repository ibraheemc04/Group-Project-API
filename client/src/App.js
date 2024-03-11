import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "193812421903-ujgmv0d4t6ss7td366vtt1hk7le0t2b6.apps.googleusercontent.com";
function App() {
useEffect(() => {
  function start() {
    gapi.client.init( {
      clientId: clientId,
      scope: " "
    })
  };
  gapi.load('client:auth2', start);
});
  return (
    <div className="App">
     <LoginButton />
     <LogoutButton />
    </div>
  );
}

export default App;
