import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import style from "./css/Login.module.scss";
import { auth } from "../config/firebase";
import { useHistory } from "react-router";
import Dialog from "../components/Dialog/Dialog";
import { AnimatePresence } from "framer-motion";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const history = useHistory();

  const signupHandler = async (e) => {
    e.preventDefault();

    const { emailsu, passwordsu } = e.target.elements;

    if (
      emailsu.value.trim().length === 0 ||
      passwordsu.value.trim().length === 0
    ) {
      return;
    }

    setErr(null);
    setLoading(true);
    await auth
      .createUserWithEmailAndPassword(emailsu.value, passwordsu.value)
      .then((res) => {
        console.log(res);
        setLoading(false);
        history.replace("./login");
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  };

  return (
    <div className={style.loginContainer}>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {err && <Dialog errText={err} setErr={setErr} />}
      </AnimatePresence>
      <div className={style.icon}>
        <FaUserPlus />
      </div>
      <div className={style.form}>
        <form onSubmit={signupHandler}>
          <div className={style.email}>
            <label htmlFor="emailsu">Enter Email ID</label>
            <br />
            <input
              type="email"
              name="emailsu"
              id="emailsu"
              placeholder="Enter Email"
            />
          </div>
          <div className={style.password}>
            <label htmlFor="passwordsu">Enter Password</label>
            <br />
            <input
              type="password"
              name="passwordsu"
              id="passwordsu"
              placeholder="Enter Password"
            />
          </div>
          <button type="submits">
            {loading ? "Please Wait..." : "Signup Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
