import Image from "next/image"
import styles from "./page.module.scss"
import MontrealInfo from "@/components/MontrealInfo"

export default function Home() {
  return (
    <main>
      <section className={`${styles.section} usection`}>
        {/* <div className={`${styles.container} ucontainer umx usection-spacing-lg`}> */}
          <div className={`${styles.fullContainer}`}>
            {/* <MontrealInfo /> */}



            {/* <div
              className={`${styles.imageContainer}`}
              style={{ aspectRatio: 1.5 }}
            >
              <Image
                src="/works/250918_init.jpg"
                fill={true}
                alt=""
                priority={true}
              />
            </div> */}


            <div className={`${styles.imageFrame}`}>
            <video autoPlay muted loop playsInline className={`${styles.video}  
                    `}
                style={{width:"100%"}}>         
                    {/* <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>          */}
                        <source src="https://assets.arrival.works/260314_LogoGlow_4x3_30FPS_ME.mp4" type="video/mp4"/>  
                        </video>
            </div>


                        <div className={`${styles.imageFrame}`}>
            <video autoPlay muted loop playsInline className={`${styles.video}  
                    `}
                style={{width:"100%"}}>         
                    {/* <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>          */}
                        <source src="https://assets.arrival.works/260314_LogoDotGrid_2x1_60FPS_2x.mp4" type="video/mp4"/>  
                        </video>
            </div>

                                    <div className={`${styles.imageFrame}`}>
            <video autoPlay muted loop playsInline className={`${styles.video}  
                    `}
                style={{width:"100%"}}>         
                    {/* <source src="/assets/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>          */}
                        <source src="https://assets.arrival.works/260317_3_LogoPerspectiveGrid_16x9_60FPS.mp4" type="video/mp4"/>  
                        </video>
            </div>

          </div>
        {/* </div> */}
      </section>

      {/* <section className={`${styles.section} usection` }> 
            <div className={`${styles.container} ucontainer umx usection-spacing-md`}>
              {/* <p className={`${styles.description}`}>
              Arrival is a design studio centered on new ideas and defining experiences, partnering with our generation’s leading brands and innovators to influence culture. Recent projects include work for PhysicsX, Orio, and Tessl.
              </p> 
              <p className={`${styles.description}`}>
              We live at a time when technology is accelerating at an unprecedented rate, changing the way we live and relate to the world around us.  
              {/* As a creative office for advanced industry, Arrival envisions how forward-thinking companies and institutions can thrive amidst exponential change. 
              Arrival is a creative office for advanced industry, imagining how forward-thinking companies can thrive through exponential change.

              Our approach challenges conventions, adopts emerging technologies, and has a lasting positive impact on ourselves and others.

              Working at the intersection of physical and digital, we design experiences for a brave new world.
              </p>
            </div>
          </section> 
          */}
    </main>
  )
}
