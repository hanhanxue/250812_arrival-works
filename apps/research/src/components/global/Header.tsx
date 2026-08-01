"use client";

import Link from "next/link";
// import { SITE_NAME, NAVIGATION } from "@/lib/constants"
import ICO_Arrival from "../iconography/ICO_Arrival";

import styles from "./Header.module.scss";

import XLink from "./XLink";
import MenuButton from "./MenuButton";
import { useContext, useEffect, useState , useRef} from "react";

import { FooterInner } from "./Footer";
import {MediaContext} from "@/providers/MediaProvider"
import XToggle from "./XToggle";





interface HeaderProps {
  invert?: boolean;
}

export default function Header({ invert }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isMedia_lg} = useContext(MediaContext)

  const [isDarkMode, setIsDarkMode] = useState(() =>
  typeof document === "undefined"
    ? true   // server placeholder; never painted for a mismatched visitor (see mounted guard)
    : document.documentElement.getAttribute("data-theme") === "dark"
);
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);




  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
    // console.log("Menu toggled:", !isMenuOpen)
  };

    const closeMenu = () => {
    setIsMenuOpen(false)
  }


  // const toggleDarkMode = () => {
  //   setIsDarkMode((current) => !current);
  // }

//   const toggleDarkMode = () => {
//   setIsDarkMode((current) => {
//     const next = !current;
//     try {
//       localStorage.setItem("theme", next ? "dark" : "light");
//     } catch {}
//     return next;
//   });
// };

const toggleDarkMode = () => {
  const next = !isDarkMode;
  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {}
  setIsDarkMode(next);
};


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





const isFirstRun = useRef(true);

// state → DOM: apply the theme attribute (animated on real toggles)
useEffect(() => {
  const apply = () =>
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");

  if (isFirstRun.current) {
    isFirstRun.current = false;
    apply();
    return;
  }
  if (document.startViewTransition) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}, [isDarkMode]);

// follow live OS theme changes, but only for visitors who haven't pinned a choice
useEffect(() => {
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  // const onOsThemeChange = (e: MediaQueryListEvent) => {
  //   if (localStorage.getItem("theme") !== null) return;
  //   setIsDarkMode(e.matches);
  // };
  const onOsThemeChange = (e: MediaQueryListEvent) => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem("theme");
  } catch {}
  if (saved !== null) return;
  setIsDarkMode(e.matches);
};
  mq.addEventListener("change", onOsThemeChange);
  return () => mq.removeEventListener("change", onOsThemeChange);
}, []);




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
          <div className={`${styles.logoWrapper}`}> 
          <XLink href="/" target="_blank" rel="noopener" style="secondary">
            Arrival Research Center
          </XLink>
          {mounted && <XToggle onClick={toggleDarkMode} isOn={isDarkMode} />}
            </div>



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
