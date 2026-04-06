import styles from "./Project.module.scss"
import MuxVideo from "../MuxVideo"

const Project = () => {
  return (
    <section className={`${styles.section} usection usection-spacer-lg`}>
      <div className={`${styles.container} ucontainer umx `}>

    {/* <div className={`${styles.projectHeader} title1`}>
<span>Visual Language Refresh</span>
<span>PhysicsX<sup>↗</sup></span>
    </div> */}


        <div className={`${styles.assetFrame} `}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <MuxVideo playbackId="XL7ai1W3mTLGHqbkl9M01c02Eb7gIYK14e3agVE00pmDMI" />
          </div>
        </div>

                <div className={`${styles.assetFrame} `}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <MuxVideo playbackId="XL7ai1W3mTLGHqbkl9M01c02Eb7gIYK14e3agVE00pmDMI" />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Project
