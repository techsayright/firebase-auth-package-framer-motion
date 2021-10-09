import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import Dialog from "../components/Dialog/Dialog";
import { auth } from "../config/firebase";
import style from "./css/Login.module.scss";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const loginHandler = async (e) => {
    e.preventDefault();

    const { emailLg, passwordLg } = e.target.elements;

    if (
      emailLg.value.trim().length === 0 ||
      passwordLg.value.trim().length === 0
    ) {
      return;
    }

    setErr(null);
    setLoading(true);
    await auth
      .signInWithEmailAndPassword(emailLg.value, passwordLg.value)
      .then((res) => {
        console.log(res.user.uid);
        setLoading(false);
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
        <FaUserAlt />
      </div>
      <div className={style.form}>
        <form onSubmit={loginHandler}>
          <div className={style.email}>
            <label htmlFor="emailLg">Email ID</label>
            <br />
            <input
              type="email"
              name="emailLg"
              id="emailLg"
              placeholder="Enter Email"
            />
          </div>
          <div className={style.password}>
            <label htmlFor="passwordLg">Password</label>
            <br />
            <input
              type="password"
              name="passwordLg"
              id="passwordLg"
              placeholder="Enter Password"
            />
          </div>

          <button type="submit">{loading ? "Loging..." : "Login Now"}</button>
        </form>
      </div>
    </div>
  );
}
