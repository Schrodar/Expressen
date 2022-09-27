import styles from '../styles/MaskinSystem.module.css'
import Stylse from './system'
import { useRouter } from "next/router"
import System from './system'

function MaskinSystem({data}) {

  const router = useRouter()
  const handelSerch = e => {
    e.preventDefault()
    console.log("time to Srech(inputs)")
  }

  return (
    <div className={styles.container}>
    <div className={styles.topNav}>
      <div>
        båtens namn
      </div>
      <div>
        login
      </div>
    </div>
    <div className={styles.main}>
        
      <div className={styles.leftNav}>
        <div className={styles.mr2Bottum}>
          <form onSubmit={handelSerch}>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
        {data.taggar.map((item)=> <div key={item} className={styles.filterItme}><div className={styles.mark}></div><p>Tagg</p></div>)}
      </div>
      <div className={styles.rightResult}>
        {data.backslag.data.map((item)=> 
        <System
        item={item} 
        onClick={() => router.push("/system")} 
        key={item.id} 
        />)}
      </div>
    </div>
 

    </div>
  )
    
}

export default MaskinSystem

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/backslag/hello')
    const res2 = await fetch("http://localhost:1337/api/backslags")
    const backslag = await res2.json()
    const taggar = await res.json()
  
    return {
    props: {
        data: {
          backslag,
          taggar
        }
        
    }
  }
}

