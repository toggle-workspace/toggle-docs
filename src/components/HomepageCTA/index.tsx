import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function HomepageCTA(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Edit the Brain</h2>
        <p className={styles.body}>
          All content in this hub originates from toggle-brain. Add playbooks,
          update client briefs, or push new prompts. The docs site syncs on
          every push to main.
        </p>
        <Link
          className={styles.cta}
          to="https://github.com/toggle-workspace/toggle-brain"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Repository
        </Link>
        <p className={styles.caption}>
          Requires access to the toggle-workspace GitHub organisation.
        </p>
      </div>
    </section>
  );
}
