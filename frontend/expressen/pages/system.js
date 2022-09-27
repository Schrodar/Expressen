import styles from '../styles/MaskinSystem.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

function System({ item }) {

  const router = useRouter()

  const [toggle, setToggle] = useState(false)

  return (
    <div className={toggle ? styles.rightItem : styles.redigering} onClick={() => setToggle(!toggle)}>
      <div>{item.attributes.name}</div>
      <div>Tagg</div>
      <div>Kommentarer</div>
      {toggle && <div className={styles.redigering}>test</div>}
    </div>
  )
}

export default System