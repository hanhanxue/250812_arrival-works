import Link from "next/link";
import { SITE_NAME, NAVIGATION } from "@/lib/constants";
import styles from "./Header.module.scss";

import ICO_Arrival from "./iconography/ICO_Arrival";

export default function Header() {
  return (
    <header className={`
    ${styles.section} usection`}>
      <div className={`${styles.container} ucontainer umx`}>
     
          <div className={`${styles.groupA}`}>
            {/* <ICO_Arrival /> */}
            Arrival</div>
          {/* <div className={`${styles.groupB}`}><ICO_Arrival /></div> */}
          <div className={`${styles.groupC}`}>Creative office for advanced industry</div>
          <div className={`${styles.groupD}`}>
            <span className={`${styles.link}`}>Research<sup>↗</sup></span>
            <span className={`${styles.link}`}>Contact</span>
          </div>
   
       
      </div>
    </header>
  );
}
