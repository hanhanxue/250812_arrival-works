import styles from "./Project.module.scss"
import MuxVideo from "../MuxVideo"
import Image from "next/image"

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
            <MuxVideo playbackId="tEWNBXKBwsQHyyYl7xxsd02LOQSnBGgXl7a6OkXRL013U" />
          </div>
        </div>

                <div className={`${styles.assetFrame}`}>
          <div style={{ position: "relative", aspectRatio: 1.5 }}>
            <Image
              src="https://assets.hanhanxue.com/260409_Wheelv2.jpg"
              fill={true}
              alt=""
              priority={true}
              sizes="calc(100vw - 32px)"
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Project
