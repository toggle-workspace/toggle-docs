import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export type CardProps = {
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
  label?: string;
  date?: string;
  author?: string;
};

export default function Card({
  title,
  description,
  to,
  icon,
  label,
  date,
  author,
}: CardProps): ReactNode {
  const hasMeta = label || date || author;

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        {hasMeta && (
          <p className={styles.cardMeta}>
            {label && <span className={styles.cardLabel}>{label}</span>}
            {date && <span>{date}</span>}
            {author && <span>by {author}</span>}
          </p>
        )}
        <p className={styles.cardDescription}>{description}</p>
        <Link className={styles.cardCta} to={to}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
