import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero, Label } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { CAPABILITIES, PROCESS } from "@/lib/content";
import { breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "How It Works: Running in Fifteen Minutes, Better Every Week",
  description:
    "What The Marketing Agent does, how it gets configured around your audience, your brand voice and the words you never use, and what the first weeks look like.",
  path: "/how-it-works",
  keywords: [
    "how marketing AI works",
    "marketing AI setup",
    "marketing tool AI integration",
    "marketing automation onboarding",
  ],
});

const STACK = [
  {
    title: "Where You Publish",
    body: "Mailchimp, Klaviyo, Beehiiv, Substack, WordPress, Webflow, Buffer and the social platforms. It drafts into them, and publishes only as far as you allow.",
  },
  {
    title: "Your Brand Rules",
    body: "Your voice, your positioning, the claims you may not make and the words you never use. That last list is what actually keeps copy on brand.",
  },
  {
    title: "Your Ad and Analytics Stack",
    body: "Google Ads, Meta Ads Manager and your analytics. Variants get written against what is running, and reporting comes back as a summary rather than a dashboard nobody opens.",
  },
  {
    title: "Your Content Calendar",
    body: "A schedule with drafts against it rather than a record of what did not get published, weighted toward the channels that actually work for you.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("How It Works", "/how-it-works")) }}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="How It Works"
          title="Configured Around Your Brand, Not a Generic Tone"
        >
          <p className="max-w-2xl mx-auto">
            Every deployment starts with who you are talking to, how the brand sounds, what it never
            says, and how far it may publish without you. Here is what that looks like.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Six Jobs It Takes Off Your Team
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">The Timeline</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Running in Fifteen Minutes. Better Every Week.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Connects To</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                It Plugs Into the Stack You Already Run
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                We do the integration work. You do not migrate systems to accommodate
                the agent.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {STACK.map((s) => (
                <div key={s.title} className="bg-white rounded p-6 border-l-4 border-brand shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{s.title}</h3>
                  <p className="text-ink leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/what-is-an-agent" className="text-sm font-semibold text-brand hover:underline">
                What is an agent, exactly? &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
