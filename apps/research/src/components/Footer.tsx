import styles from "./Footer.module.scss";

import XLink from "./XLink";
import {URL} from "../lib/constants"

export default function Footer() {
  return (
    <footer className={`${styles.footer} usection usection-spacer-lg`}>
      <div className={`${styles.container} umx`}>




        <div className={`${styles.flexTop}`}>
          <div className={styles.group}>
            <div className={`${styles.subtitle} `}>Credits</div>
            <div className={`${styles.list}`}>
              <ul>

                <li>
                  Development,{" "}
                  <XLink
                    href={URL.HANHANXUE}
                    target="_blank"
                    rel="noopener"
                  >
                    Han Han Xue<sup>↗</sup>
                  </XLink>
                </li>
                <li>
                  Hosting,{" "}
                  <XLink
                    href={URL.VERCEL}
                    target="_blank"
                    rel="noopener"
                  >
                    Vercel<sup>↗</sup>
                  </XLink>
                </li>
                <li>
                  Analytics,{" "}
                  <XLink
                    href={URL.PLAUSIBLE}
                    target="_blank"
                    rel="noopener"
                  >
                    Plausible<sup>↗</sup>
                  </XLink>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.group}>
            <div className={`${styles.subtitle} `}>Connect</div>
            <div className={`${styles.list}`}>
              <ul>
                <li>mail@arrival.works</li>
                <li>
                                      <XLink
                    href={URL.GITHUB}
                    target="_blank"
                    rel="noopener"
                  >
                    Github<sup>↗</sup>
                  </XLink>
                </li>
                <li>
                                      <XLink
                    href={URL.INSTAGRAM}
                    target="_blank"
                    rel="noopener"
                  >
                    Instagram<sup>↗</sup>
                  </XLink>
                </li>
                                <li>
                                      <XLink
                    href={URL.YOUTUBE}
                    target="_blank"
                    rel="noopener"
                  >
                    YouTube<sup>↗</sup>
                  </XLink>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className={styles.group}>
            <div className={`${styles.subtitle} `}>Press</div>
            <div className={`${styles.list}`}>
              <ul>
                <li>research-arrival-2026.zip</li>

              </ul>
            </div>
          </div> */}
        </div>

        <div className={`${styles.flexBottom} 
        usection-spacer-lg
        `}>
            ©Arrival Research Center
            </div>


      </div>
    </footer>
  );
}
