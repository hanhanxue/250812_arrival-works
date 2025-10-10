import Image from "next/image";
import styles from "./page.module.scss";
import MontrealInfo from "@/components/MontrealInfo";

export default function Home() {
  return (
    <main>
      <section className={`${styles.section}`}> 
        <div className={`${styles.container} ucontainer umx usection-spacing-lg`}>

        <div className={`${styles.fullContainer}`}>
        <div className={`${styles.infoContainer}`}>
          <MontrealInfo />
        </div>
        <div className={`${styles.imageContainer}`} style={{aspectRatio: 1.5}}>
                            <Image
                            src="/works/250918_init.jpg"
                            fill={true}
                            alt=""
                            priority={true}
                            />  
                        </div>


        </div>



        </div>
          </section>
    </main>
  )
}
