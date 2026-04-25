import styles from "./Project.module.scss"
import MuxVideo from "../MuxVideo"
import Image from "next/image"

const Project = () => {
  return (
    <section className={`${styles.section} usection `}>
      <div className={`${styles.container} ucontainer umx `}>

    {/* <div className={`${styles.projectHeader} title1`}>
<span>Visual Language Refresh</span>
<span>PhysicsX<sup>↗</sup></span>
    </div> */}

                    <div className={`${styles.assetFrame}`}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <Image
              src="https://assets.hanhanxue.com/260425_Chip.jpg"
              fill={true}
              alt=""
              priority={true}
              sizes="calc(100vw - 32px)"
            />
          </div>
        </div>


        <div className={`${styles.assetFrame} `}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <MuxVideo playbackId="t7FuvjuWRscxl01elA1wsPKppaLqBF5AJTvOI6nNwAF4" />
          </div>
        </div>

                <div className={`${styles.assetFrame}`}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <Image
              src="https://assets.hanhanxue.com/260410_Wheelv4.jpg"
              fill={true}
              alt=""
              priority={true}
              sizes="calc(100vw - 32px)"
            />
          </div>
        </div>

                <div className={`${styles.assetFrame} `}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <MuxVideo playbackId="uAS4pfuEL5POjq9KvALwYgfQWJunOXTs4iVX02Y02TGJg" />
          </div>
        </div>

                <div className={`${styles.assetFrame} `}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <MuxVideo playbackId="fpKglAf4slzlCssHOV01sHgQ2yesaYyivSjBRCUX9rD4" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
