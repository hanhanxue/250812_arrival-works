
import styles from "./Footer.module.scss"
import ICOArrivalWorks from "./ICOArrivalWorks"

const Footer = () => {
  return (
    <footer className={`${styles.footer} usection usection-spacer-lg`}
    data-theme="dark">
        <div className={`${styles.container} ucontainer umx`}>



            <div className={`${styles.rowAColumn}`}>
                <ICOArrivalWorks width={40} height={20}/>
            </div>
                        {/* <div className={`${styles.rowAColumn} subtitle-1` }>
                <p>Arrival is an office for design and innovation.</p>
            </div> */}
      {/* <p className={`${styles.copyright}`}>
        © 2024 Arrival Works. All rights reserved.
      </p> */}

          {/* <div className={`${styles.rowBColumn} caption-1` }>
                ©2026 Arrival Works Inc. All rights reserved.
            </div> */}


        </div>

    </footer>
  )
}

export default Footer