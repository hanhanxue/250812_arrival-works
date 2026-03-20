import Image from "next/image"
import styles from "./page.module.scss"
import MontrealInfo from "@/components/MontrealInfo"
import MuxVideo from "@/components/MuxVideo"

export default function Home() {
  return (
    <main>
      <section className={`${styles.section} usection`}>
        <div className={`${styles.fullContainer}`}>

          
          <div className={`${styles.assetFrame}`} style={{ position: "relative", aspectRatio: 3/2 }}>
            <MuxVideo playbackId="VT9w4VCOxq02jNl1QT8Fd7eZUcAUjtKE48twHMoYfnS00" />
          </div>

          <div className={`${styles.assetFrame}`} style={{ position: "relative", aspectRatio: 2 }}>
            <MuxVideo playbackId="w9F00qGcm00m3mMTQ4VfXxitBUPnlmZrhyldW2EU47Ipo" />
          </div>

          <div className={`${styles.assetFrame}`} style={{ position: "relative", aspectRatio: 2 }}>
            <MuxVideo playbackId="016dHL9Rg007eilEYWL0027bPwhPlXXKk01880200014Uk56dU" />
          </div>


        </div>
      </section>


    </main>
  )
}
