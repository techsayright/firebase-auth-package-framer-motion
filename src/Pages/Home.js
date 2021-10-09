import React from 'react'
import { auth } from '../config/firebase'
import styles from '../Pages/css/Home.module.scss'

export default function Home() {
    const logoutHandler=()=>{
        auth.signOut();
    }
    return (
        <React.Fragment>
            <nav className={styles.home}>
                <div>Auth Package</div>
                <div><button onClick={logoutHandler}>Logout</button></div>
            </nav>
            <hr />
        </React.Fragment>
    )
}
