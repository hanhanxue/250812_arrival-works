"use client"

import Link from "next/link"
// import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import ICO_Arrival from "./iconography/ICO_Arrival"



import styles from "./Header.module.scss"


import XLink from "./XLink"
import MenuButton from "./MenuButton"
import { useState } from "react"


interface HeaderProps {
  invert?: boolean
}

export default function Header({ invert }: HeaderProps) {



  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
    // console.log("Menu toggled:", !isMenuOpen)
  }

  return (
    <header
      className={`${styles.section} usection ${invert ? ` ${styles.invert}` : ""}  
      subtitle-1`}

    >
      <div className={`${styles.container} ucontainer umx`}>
         
        <div className={`${styles.gridItem} ${styles.groupA}`}>
            
       
                    <XLink
            href="/"
            target="_blank"
            rel="noopener"
            style="secondary"
          >
            Arrival Research Center 
            {/* <span className={`circled-text`}>ARC</span> */}
          </XLink>
          <div className={`${styles.menuButtonWrapper}`}> 
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
             </div>


        </div>



        <div className={`${styles.gridItem} ${styles.groupB}`}>

          <XLink
            href="https://www.arrival.works/"
            target="_blank"
            rel="noopener"
          >
            Arrival<sup>↗</sup>
          </XLink>

          {/* <XLink href="mailto:mail@arrival.works">Office</XLink> */}
        </div>
      </div>
    </header>
  )
}
