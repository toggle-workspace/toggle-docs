import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Everything Toggle knows, in one place.
          </Heading>
          <p className={styles.heroSubtitle}>
            Playbooks, prompts, client briefs, and creative templates. Synced
            from Toggle Brain on every push.
          </p>
          <div className={styles.heroActions}>
            <Link
              className="button button--primary button--lg"
              to="/brain/case-studies/al-hidayah"
            >
              Explore the Brain
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroImageWrap} />
    </section>
  );
}
