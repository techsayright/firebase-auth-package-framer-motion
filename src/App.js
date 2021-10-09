import React, { useCallback, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import { auth } from "./config/firebase";
import Home from "./Pages/Home";

function App() {
  const history = useHistory();

  //login karyu hase to user return karse even we reload it
  const authListener = useCallback(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        if(history.location.pathname=== '/authenticate/login' || history.location.pathname=== '/authenticate'){
          history.replace('/')
        }
      } else {
        history.replace('/authenticate')
      }
    });
  },[history])

  useEffect(() => {
    authListener();
  }, [authListener]);

  return (
    <React.Fragment>
      
      <Switch>
        <Route exact path= '/'><Redirect to='/home'/></Route>
        <Route path="/home" component={Home} />
        <Route path="/authenticate" component={LoginSignup} />
        <Route path='*' render={()=> <h1 style={{textAlign:'center', fontSize: '4rem'}}>Page Not found !!</h1>}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
