import type { ReactNode } from "react";
import Card from "@site/src/components/Card";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const cards = [
  {
    title: "11 Steps From Campaign Brief to Live",
    description:
      "The checklist every paid launch runs through on Meta, Google, TikTok, and LinkedIn. Covers brief, media plan, creative QA, client approval, tracking validation, and three post-launch checks.",
    to: "/playbooks/launch-paid-campaign",
  },
  {
    title: "First 48 Hours After a Client Signs",
    description:
      "Account lead's guide for moving a countersigned quote into an active client folder. Covers slug setup, CLIENT.md, style-pack, kickoff meeting, access requests, and calendar blocks through the 90-day review.",
    to: "/playbooks/onboard-new-client",
  },
  {
    title: "How Toggle Positions Itself to the Market",
    description:
      "The source of truth for Toggle's identity, services, and positioning lines. Use this before any sales call, pitch, or briefing where you need to explain what Toggle does and why it works.",
    to: "/brain/positioning/agency-profile",
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Featured
        </Heading>
        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
