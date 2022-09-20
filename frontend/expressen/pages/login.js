import {FaUser} from 'react-Icons/fa'
import {useState, useEffect, useContext } from 'react'
import styles from '../styles/AuthForm.module.css'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <h1>
                <FaUser /> Log In
            </h1>
            <form className={styles.forum} onSubmit={handelSubmit}>
                <div className={styles.unit}>
                    <div className={styles.labels}>
                        <label  htmlFor="email">Email address:</label>
                    </div>
                    <input
                    className={styles.inputs}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>

                <div className={styles.unit}>
                    <div className={styles.labels} >   
                        <label htmlFor="password">Password:</label>
                    </div>
                    <input
                    className={styles.inputs}
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                    />
                </div>
                <input
                className={styles.btn}
                type="submit" 
                value='Login' 
                />
            </form>
        </div>
    </div>
  )
}

export default Login