import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>INTERNAL KNOWLEDGE HUB</p>
        <Heading as="h1" className={styles.title}>
          Everything Toggle knows, in one place.
        </Heading>
        <p className={styles.subtitle}>
          Playbooks, prompts, client briefs, and creative templates. Synced from
          Toggle Brain on every push to main.
        </p>
        <div className={styles.actions}>
          <Link
            className={styles.btnPrimary}
            to="/brain/case-studies/al-hidayah"
          >
            Explore the Brain
          </Link>
          <Link
            className={styles.btnOutline}
            to="/playbooks/onboard-new-client"
          >
            View Playbooks
          </Link>
        </div>
      </div>
    </section>
  );
}
