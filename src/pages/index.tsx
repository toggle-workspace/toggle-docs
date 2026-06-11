import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import HomepageHero from "@site/src/components/HomepageHero";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageFAQ from "@site/src/components/HomepageFAQ";
import HomepageCTA from "@site/src/components/HomepageCTA";

export default function Home(): ReactNode {
  return (
    <Layout
      title="Toggle Brain"
      description="Internal knowledge hub for Toggle Solutions"
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <HomepageFAQ />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
