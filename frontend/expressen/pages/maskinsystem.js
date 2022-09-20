import styles from '../styles/MaskinSystem.module.css'

function MaskinSystem({data}) {

  console.log(data)
  const handelSerch = e => {
    e.preventDefault()
    console.log("time to Srech(inputs)")
  }

  return (
    <div className={styles.container}>
    <div className={styles.topNav}></div>
    <div className={styles.main}>
        
      <div className={styles.leftNav}>
        <div className={styles.mr2Bottum}>
          <form onSubmit={handelSerch}>
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
        {data.map((item)=> <div className={styles.filterItme}>item</div>)}
      </div>
      <div className={styles.rightResult}></div>
    </div>


    </div>
  )
    
}

export default MaskinSystem

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/backslag/hello')
    const data = await res.json()
  
    console.log(data)
    return {
    props: {
        data
    }
}
}