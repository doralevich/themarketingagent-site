// The four audience pages. Same shape, different argument.
//
// Split by WHO IS CARRYING THE PUBLISHING. Industry changes the vocabulary and is configured at
// setup; a manufacturer and a DTC brand have the same problem, which is that consistent output
// requires somebody with a clear week and nobody has one. What actually changes the job is
// whether marketing is your fifth priority, your entire job, one lane inside a team, or several
// brands at once.
//
// That last one is different in kind rather than degree. An agency agent holds more than one
// brand voice and more than one banned-words list, and the failure everybody fears is that the
// clients start sounding like each other. So that page argues about separation rather than
// about volume.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-founders",
    label: "For Founders",
    eyebrow: "For Founders",
    title: "Marketing Is the Thing You Do If the Week Allows It.",
    intro:
      "It never allows it. The Marketing Agent writes the newsletter, the posts and the pages in your brand's voice, so publishing stops depending on how the week went.",
    metaTitle: "AI Marketing Agent for Founders | Publish Without the Week Allowing It",
    metaDescription:
      "A private AI agent for founders doing their own marketing. Writes the newsletter, social posts and landing pages in your brand's voice, on schedule, with the words your brand never uses written down.",
    keywords: [
      "AI marketing for founders",
      "founder marketing automation",
      "AI newsletter writing",
      "small business content marketing AI",
      "brand voice AI",
    ],
    problem: {
      heading: "The Channel That Works Is the One You Neglect",
      body: [
        "You know which thing drives the business. It is usually the newsletter, or the one channel where people actually reply. It also happens to be the thing that takes a clear two hours, which is why it goes out when there is a quiet Sunday.",
        "So marketing arrives in bursts. Six weeks of nothing, then a flurry because somebody noticed, then nothing again. Audiences respond to consistency more than they respond to any individual piece, and burst marketing gets neither.",
      ],
    },
    benefits: [
      {
        title: "The Newsletter Goes Out",
        body: "Weekly, in the brand's voice, drafted for you to edit in twenty minutes rather than write in two hours.",
      },
      {
        title: "The Brand's Voice, Not Yours",
        body: "A blunt founder can run a warm, careful brand. We capture those separately, so the copy sounds like the company rather than like your Slack messages.",
      },
      {
        title: "It Knows What You Never Say",
        body: "You write down the words and claims that are off limits once. That list prevents more off-brand copy than any style guide.",
      },
      {
        title: "Effort Where It Works",
        body: "You tell it which channel drives the business and which is a duty you resent. It stops spreading you evenly across both.",
      },
      {
        title: "One Thing Becomes Five",
        body: "The talk you gave becomes posts, an email and an article, so the effort you already spent stops being spent once.",
      },
      {
        title: "You Still Press Publish",
        body: "Draft only, draft and schedule, or publish within a brief. You choose, and starting cautious costs nothing.",
      },
    ],
    closing: {
      heading: "Consistent Beats Brilliant",
      body: "Nothing here is going to have an idea you would not have had. It is going to make sure the ideas you already have get published on a schedule your week cannot break.",
    },
  },
  {
    slug: "for-solo-marketers",
    label: "For Solo Marketers",
    eyebrow: "For Solo Marketers",
    title: "You Are the Whole Marketing Department.",
    intro:
      "Strategy, copy, design, email, social, reporting, and whatever the sales team needs by Thursday. The Marketing Agent takes the production so the judgment gets your day.",
    metaTitle: "AI for Solo Marketers | One-Person Marketing Team Support",
    metaDescription:
      "A private AI agent for one-person marketing teams. Drafts the newsletter, social, ads and landing pages in your brand voice, repurposes what you already made, and keeps the calendar full.",
    keywords: [
      "solo marketer AI",
      "one person marketing team",
      "AI content production",
      "marketing team of one tools",
      "content repurposing AI",
    ],
    problem: {
      heading: "Everything Is Urgent and Nothing Is Owned",
      body: [
        "The week gets set by whoever asked last. Sales needs a one-pager, the founder saw a competitor post, the newsletter is due, and the campaign you actually planned slides again.",
        "What suffers is never the loud request. It is the compounding work: the content calendar, the repurposing, the SEO piece that would still be earning traffic in a year. That work has no deadline and no advocate, so it never happens.",
      ],
    },
    benefits: [
      {
        title: "Production Stops Being the Bottleneck",
        body: "Drafts for every channel arrive written. Your day goes to deciding what is worth saying rather than to typing it.",
      },
      {
        title: "The Calendar Fills Itself",
        body: "A planned schedule with drafts against it, instead of a calendar that documents what you failed to publish.",
      },
      {
        title: "Repurposing Actually Happens",
        body: "The thing you spent a week on becomes the ten pieces it should have become, which is the highest-return work nobody has time for.",
      },
      {
        title: "Ad Variants Without the Afternoon",
        body: "The twelve versions a test needs, on brief and on brand, instead of the three you managed.",
      },
      {
        title: "Consistency Without a Style Guide",
        body: "Your banned words and your brand voice applied to everything, so the copy holds together even when you are rushing.",
      },
      {
        title: "The Urgent Requests Get Absorbed",
        body: "The one-pager sales needs by Thursday is drafted, so it stops eating the campaign you planned.",
      },
    ],
    closing: {
      heading: "Ship Like a Team of Four",
      body: "The gap between a one-person department and a real one is almost entirely production volume. That is the part of the gap that can be closed without hiring.",
    },
  },
  {
    slug: "for-marketing-teams",
    label: "For Marketing Teams",
    eyebrow: "For Marketing Teams",
    title: "The Backlog Is Requests, Not Ideas.",
    intro:
      "The team is not short of things to say. It is short of hours to write them. The Marketing Agent takes the drafting so the roadmap stops queueing behind the inbox.",
    metaTitle: "AI for Marketing Teams | Content Production at Volume",
    metaDescription:
      "A private AI agent for marketing teams. Drafts across every channel in one consistent brand voice, absorbs ad-hoc requests, and repurposes campaigns, so planned work stops queueing behind urgent asks.",
    keywords: [
      "AI for marketing teams",
      "content production automation",
      "brand consistency AI",
      "marketing operations AI",
      "campaign content AI",
    ],
    problem: {
      heading: "Ad-Hoc Requests Eat the Roadmap",
      body: [
        "Every quarter starts with a plan and ends with a list of things somebody urgently needed. None of the requests were unreasonable and together they consumed the quarter.",
        "The second problem is drift. Four people writing means four voices, and the difference shows up as a brand that feels slightly different depending on which channel you found it on. Style guides do not fix this, because nobody reads a style guide while rushing.",
      ],
    },
    benefits: [
      {
        title: "Requests Come Back Drafted",
        body: "The one-pager, the announcement, the deck copy. Absorbed as drafts rather than as somebody's afternoon.",
      },
      {
        title: "One Voice Across Everyone",
        body: "The same brand voice and the same banned words applied whoever is writing, which is what a style guide was supposed to do.",
      },
      {
        title: "Planned Work Survives the Quarter",
        body: "When the urgent asks stop consuming days, the roadmap stops being aspirational.",
      },
      {
        title: "Campaigns Fully Deployed",
        body: "Every asset a campaign actually needs across every channel, rather than the three somebody had time to make.",
      },
      {
        title: "New People Ramp Faster",
        body: "They write against drafts that already sound right instead of learning the voice by having work sent back.",
      },
      {
        title: "Approval Is Still Yours",
        body: "You set what may publish and what must be read first, per channel, and it is enforced rather than remembered.",
      },
    ],
    closing: {
      heading: "More Output, Same Team, One Voice",
      body: "The constraint on a marketing team is rarely ideas or budget. It is how many hours exist to turn a decision into finished copy.",
    },
  },
  {
    slug: "for-agencies",
    label: "For Agencies",
    eyebrow: "For Agencies",
    title: "Six Clients, Six Voices, and No Room to Blend Them.",
    intro:
      "Your risk is not volume, it is sameness. The Marketing Agent holds each client's voice, rules and banned words separately, so scaling output does not cost you distinctiveness.",
    metaTitle: "AI for Marketing Agencies | Multiple Brand Voices, Kept Separate",
    metaDescription:
      "A private AI agent for marketing agencies. Holds each client's brand voice, claims rules and banned words separately, drafts across channels at volume, and never lets one client's copy sound like another's.",
    keywords: [
      "AI for marketing agencies",
      "agency content production",
      "multi-brand AI copywriting",
      "white label marketing AI",
      "agency scaling tools",
    ],
    problem: {
      heading: "Scale Is Where Agencies Start Sounding the Same",
      body: [
        "Every agency can produce more by adding juniors and templates, and every agency that does discovers the same thing: the clients start reading like each other. The distinctiveness you sold in the pitch quietly leaves in month four.",
        "The other constraint is the retainer maths. What you can charge is bounded by what you can produce, and what you can produce is bounded by hours spent on drafting rather than on the thinking clients are actually paying for.",
      ],
    },
    benefits: [
      {
        title: "Voices That Stay Separate",
        body: "Each client's voice, positioning and banned words held on their own. One client's copy never drifts into another's register.",
      },
      {
        title: "Each Client's Rules Enforced",
        body: "The regulated one gets its compliance rules, the one that never names customers gets that, every time, without a junior having to remember.",
      },
      {
        title: "More Retainer per Person",
        body: "The drafting hours come back, and drafting hours are the ones bounding how many accounts a strategist can carry.",
      },
      {
        title: "Campaigns Fully Built",
        body: "Every variant and every channel a campaign should have, rather than the subset that fitted the fee.",
      },
      {
        title: "Consistent Junior Output",
        body: "Newer people ship work that already sounds like the client, so review is editing rather than rewriting.",
      },
      {
        title: "Nothing Reaches a Client Unread",
        body: "Client-facing anything is on the approval line by default. Your relationship and your name on it.",
      },
    ],
    closing: {
      heading: "Scale the Output, Keep the Distinctiveness",
      body: "Agencies do not lose accounts because they produced too little. They lose them when the work stops feeling made for that client, and that is the thing worth protecting while you grow.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
