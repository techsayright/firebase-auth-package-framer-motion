import { motion } from "framer-motion";
import React from "react";
import reactDom from "react-dom";
import { BiError } from "react-icons/bi";
import styles from "../Dialog/Dialog.module.scss";

export default function Dialog({ errText, setErr }) {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <React.Fragment>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.overlay}
            onClick={() => setErr(null)}
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className={styles.Dialog}
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.errIcon}
            >
              <BiError />
            </motion.div>
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.main}
            >
              <h1>{errText}</h1>
            </motion.div>
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              className={styles.btn}
            >
              <button onClick={() => setErr(null)}>OK</button>
            </motion.div>
          </motion.div>
        </React.Fragment>,
        document.getElementById("error-dialog")
      )}
    </React.Fragment>
  );
}
