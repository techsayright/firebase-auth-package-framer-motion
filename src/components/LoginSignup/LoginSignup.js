import React from "react";
import styles from "./LoginSignup.module.scss";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../../Pages/css/all.css'

export default function LoginSignup() {
  return (
    <div className={styles.container}>
      <div className={styles.LoginSignup}>
        <div className={styles.header}>
          <div>
            <NavLink activeClassName={styles.active} to="/authenticate/login">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName={styles.active} to="/authenticate/signup">
              SignUp
            </NavLink>
          </div>
        </div>
        <TransitionGroup className={styles.payload}>
          <CSSTransition timeout={{enter: 800 , exit: 400}} classNames="fade" >
            <Switch>
              <Route exact path="/authenticate">
                <Redirect to="/authenticate/login" />
              </Route>
              <Route path="/authenticate/login" component={Login} />
              <Route path="/authenticate/signup" component={Signup} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
