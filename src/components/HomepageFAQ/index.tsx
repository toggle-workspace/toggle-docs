import { useState } from "react";
import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Toggle Brain?",
    answer:
      "Toggle Brain is the internal knowledge hub for Toggle Solutions. It holds every playbook, prompt, client brief, creative template, and strategic document the team uses. Everything is synced automatically from the toggle-brain repository on every push to main.",
  },
  {
    question: "How does content stay up to date?",
    answer:
      "Content syncs automatically. Every push to the main branch of toggle-brain triggers a GitHub Actions workflow that sparse-checks out the latest content and rsyncs it into this site. Cloudflare Pages then deploys the update. You never need to manually publish anything.",
  },
  {
    question: "Where do I go to edit or add content?",
    answer:
      "All content lives in toggle-brain at ~/Desktop/toggle-brain. Edit files there and push to main. The sync runs within minutes and the docs site updates automatically. Never edit the docs/ folder in this repo directly — it gets overwritten on every sync.",
  },
  {
    question: "What content zones are available?",
    answer:
      "Toggle Brain covers seven zones: Knowledge Base (services, pricing, voice, case studies, team, verticals), Playbooks (step-by-step runbooks), Generators (slash-command recipes), Prompts (prompt library), Templates (client work shells), Clients (per-client briefs and reports), and Cockpit (daily focus, journal, decisions, todos).",
  },
  {
    question: "Who can access Toggle Brain?",
    answer:
      "Access is restricted to Toggle Solutions team members via Cloudflare Access. Login requires a Google account under the @toggle.solutions domain. If you need access and don't have a toggle.solutions email, contact the team lead.",
  },
  {
    question: "What do I do if content is missing or out of date?",
    answer:
      "Check toggle-brain first — the file may not exist there yet, or may not be in one of the seven synced zones. If the file exists in toggle-brain but isn't showing here, check the sync workflow logs in the toggle-docs GitHub Actions tab for errors.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}): ReactNode {
  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{item.question}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HomepageFAQ(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.inner}>
          <Heading as="h2" className={styles.heading}>
            FAQ
          </Heading>
          <div className={styles.list}>
            {faqs.map((item, idx) => (
              <FAQAccordionItem
                key={idx}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
