import Link from "next/link"
import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import styles from "./Header.module.scss"

import ICO_Arrival from "./iconography/ICO_Arrival"
import XLink from "./XLink"

interface HeaderProps {
  invert?: boolean
}

export default function Header({ invert }: HeaderProps) {
  return (
    <header
      className={`${styles.section} usection ${invert ? ` ${styles.invert}` : ""}`}
      // data-theme="dark"
    >
      <div className={`${styles.container} ucontainer umx`}>
        <div className={`${styles.groupA}`}>
          {/* <ICO_Arrival /> */}
                    <XLink
            href="/"
            target="_blank"
            rel="noopener"
            style="secondary"
          >
            Arrival
          </XLink>
        </div>
        {/* <div className={`${styles.groupB}`}><ICO_Arrival /></div> */}
        {/* <div className={`${styles.groupC}`}>
          Arriving Q1 2026
        </div> */}
        <div className={`${styles.groupD}`}>
          <XLink
            href="https://research.arrival.works/"
            target="_blank"
            rel="noopener"
          >
            Research<sup>↗</sup>
          </XLink>

          <XLink href="mailto:mail@arrival.works">Office</XLink>
        </div>
      </div>
    </header>
  )
}
