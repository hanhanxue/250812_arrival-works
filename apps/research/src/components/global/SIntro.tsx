import XLink from "./XLink";

import styles from "./SIntro.module.scss";

export default function SIntro() {
  return (
    <section className={`${styles.section} usection`}>
      <div className={`${styles.container} ucontainer umx usection-spacer-lg`}>
        <div className={`${styles.intro}`}>
          {/* <p>
            A space dedicated to research, exploration, and the open exchange of
            process knowledge.
            <span className={`${styles.curation}`}>
              {" "}
              Curated by{" "}
              <XLink
              style="secondary"
                href="https://www.arrival.works/"
                target="_blank"
                rel="noopener"
              >
                Arrival<sup>↗</sup>
              </XLink>
              , a creative office for advanced industry.
            </span>
          </p> */}
                    <p>
            A space dedicated to research, exploration, and the open exchange of
            process knowledge for designers. Curated by Arrival, a creative office for advanced industry.
          </p>
        </div>
      </div>
    </section>
  );
}
