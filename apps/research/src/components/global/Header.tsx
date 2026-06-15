"use client";

import Link from "next/link";
// import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import ICO_Arrival from "../iconography/ICO_Arrival";

import styles from "./Header.module.scss";

import XLink from "./XLink";
import MenuButton from "./MenuButton";
import { useContext, useEffect, useState } from "react";

import { FooterInner } from "./Footer";
import {MediaContext} from "@/providers/MediaProvider"



interface HeaderProps {
  invert?: boolean;
}

export default function Header({ invert }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isMedia_lg} = useContext(MediaContext)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
    // console.log("Menu toggled:", !isMenuOpen)
  };

    const closeMenu = () => {
    setIsMenuOpen(false)
  }

    // close menu if window size goes from iphone screen to larger than phone screen
  useEffect(() => {
    if (isMedia_lg) {
      closeMenu()
    }
  }, [isMedia_lg])

    // add overflow hidden to body so that when menu is open there is no scroll bar
  // Set inside _utilities.scss:
    useEffect(() => {
    document.body.className = ""
    if (isMenuOpen) {
      document.body.classList.add("has-menu-open")
    }
  }, [isMenuOpen])

  return (
    <header
    data-nosnippet
      className={`
        ${styles.section} 
        ${isMenuOpen ? styles.isMenuOpen : ""}
        ${invert ? ` ${styles.invert}` : ""}  
        subtitle-1
        usection 
      `}
    >
      <div className={`${styles.container} umx ucontainer `}>





        <div className={`${styles.gridItem} ${styles.groupA}`}>
          <XLink href="/" target="_blank" rel="noopener" style="secondary">
            Arrival Research Center
          </XLink>


          <div className={`${styles.menuButtonWrapper}`}>
            <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        <nav className={`${styles.gridItem} ${styles.nav} ${styles.groupB}`}>
          <ul className={`${styles.mainLinks}`}>
            <li>          <XLink
            href="https://www.arrival.works/"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            Arrival<sup>↗</sup>
          </XLink></li>
          </ul>



     
        </nav>

                <div className={`${styles.groupC}  `}>
          <FooterInner />
        </div>
      </div>
    </header>
  );
}
