export type Post = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readingTime: string
  body: { type: 'p' | 'h2' | 'h3' | 'ul'; text?: string; items?: string[] }[]
}

export const posts: Post[] = [
  {
    slug: 'foundation-repair-insurance-requirements',
    title: 'Foundation Repair Insurance: What Every Contractor Must Have',
    description: 'A clear breakdown of the insurance coverage foundation repair contractors need to operate legally, win contracts, and protect their business from costly claims.',
    date: '2026-06-19',
    author: 'Josh Cotner',
    category: 'Insurance Guide',
    readingTime: '6 min read',
    body: [
      { type: 'p', text: 'Foundation repair is one of the highest-stakes trades in construction. A single piering or underpinning job can determine whether a home stays standing — and whether your business stays solvent if something goes wrong. That makes the right insurance program less of a formality and more of a core operating system. Here is what every foundation repair contractor should carry.' },
      { type: 'h2', text: 'General Liability: The Non-Negotiable Starting Point' },
      { type: 'p', text: 'General liability (GL) is the foundation of your coverage. It responds when your work causes third-party property damage or bodily injury. For foundation contractors, the most common GL claims involve soil movement, settlement after a repair, or damage to adjacent structures during excavation. Almost every general contractor, homeowner association, and commercial client will require proof of GL before you set foot on a job site — typically $1 million per occurrence and $2 million aggregate.' },
      { type: 'h2', text: 'Workers’ Compensation: Required and Critical' },
      { type: 'p', text: 'Foundation crews work underground, in confined crawl spaces, and around heavy hydraulic equipment. Injuries are more frequent and more severe than in lighter trades. Workers’ compensation is legally required in nearly every state once you have employees, and it covers medical costs and lost wages when a worker is hurt. Skipping it exposes you to lawsuits, fines, and stop-work orders.' },
      { type: 'h2', text: 'Professional Liability (Errors & Omissions)' },
      { type: 'p', text: 'Here is where foundation contractors differ from many trades: you make engineering and diagnostic judgments. When you recommend a specific pier depth, a drainage approach, or a stabilization method, you take on professional risk. If that recommendation is later alleged to have failed, general liability often will not respond — but professional liability will.' },
      { type: 'h2', text: 'The Coverage Most Contractors Forget' },
      { type: 'ul', items: [
        'Commercial Auto — for trucks and trailers hauling piers, jacks, and excavation gear.',
        'Equipment & Tools (Inland Marine) — to replace stolen or damaged hydraulic equipment fast.',
        'Contractor’s Pollution Liability — for soil or groundwater contamination from excavation.',
        'Umbrella / Excess — to add limits above GL and auto for catastrophic structural failures.',
      ] },
      { type: 'h2', text: 'Bottom Line' },
      { type: 'p', text: 'A complete foundation repair insurance program combines general liability, workers’ comp, professional liability, commercial auto, and equipment coverage — often with pollution and umbrella layers on top. Because foundation work is higher-risk than light trades, working with a specialist who understands the exposure is the difference between a policy that pays and one that fights you. Contractors Choice Agency can assemble the full stack in about 15 minutes.' },
    ],
  },
  {
    slug: 'liability-risks-foundation-contractors',
    title: 'The Hidden Liability Risks in Foundation Repair Work',
    description: 'Soil movement, latent structural defects, and adjacent-property damage create liability that surfaces years after the job. Here is how foundation contractors get exposed — and protected.',
    date: '2026-06-19',
    author: 'Josh Cotner',
    category: 'Risk Management',
    readingTime: '7 min read',
    body: [
      { type: 'p', text: 'The most dangerous liability in foundation repair is the kind you do not see coming. Unlike a roof leak that shows up next week, foundation claims often surface months or years after the crew has packed up. Understanding where this hidden exposure lives is the first step to insuring against it.' },
      { type: 'h2', text: '1. Soil Movement and Settlement' },
      { type: 'p', text: 'Soil is unpredictable. Expansive clay, poor compaction, and changing moisture can cause a repaired foundation to settle or shift after the work is complete. When that happens, the homeowner often points at the last contractor who touched the foundation — you. These claims are among the most expensive in the trade, and they are why your general liability and excess limits need to be structured carefully.' },
      { type: 'h2', text: '2. Adjacent-Property Damage' },
      { type: 'p', text: 'Excavation, drilling, and underpinning can disturb neighboring structures. Cracked driveways, shifted retaining walls, and damaged utilities on adjacent lots are common third-party claims. In dense urban work, a single job can put two or three properties at risk simultaneously.' },
      { type: 'h2', text: '3. Latent Structural Defects' },
      { type: 'p', text: 'A repair that looks perfect on completion can develop problems later — a pier that does not reach competent strata, or a stabilization system that underperforms under load. Because foundation failures are catastrophic and visible, these claims attract attorneys and large demands.' },
      { type: 'h2', text: '4. Professional Judgment Risk' },
      { type: 'p', text: 'Every time you diagnose a problem and recommend a solution, you are providing professional advice. If a court decides your recommendation was the wrong call, that is an errors-and-omissions exposure that general liability typically excludes.' },
      { type: 'h2', text: '5. Pollution and Environmental Exposure' },
      { type: 'p', text: 'Drilling fluids, disturbed contaminated soil, and groundwater intrusion can trigger environmental claims. Standard GL policies carry a pollution exclusion — leaving a gap that contractor’s pollution liability is designed to fill.' },
      { type: 'h2', text: 'Protecting Against the Unseen' },
      { type: 'p', text: 'The right insurance program anticipates claims that arrive long after the invoice is paid. That means adequate GL limits, an umbrella layer for catastrophic events, professional liability for your recommendations, and pollution coverage for environmental exposure. A generalist broker will rarely build all of this correctly. A specialist who understands foundation work will. That is exactly what we do at Contractors Choice Agency.' },
    ],
  },
  {
    slug: 'professional-liability-foundation-contractors',
    title: 'Why Foundation Repair Contractors Need Professional Liability Insurance',
    description: 'Foundation contractors do not just build — they diagnose and recommend. That professional judgment creates errors-and-omissions exposure general liability does not cover.',
    date: '2026-06-19',
    author: 'Josh Cotner',
    category: 'Insurance Guide',
    readingTime: '6 min read',
    body: [
      { type: 'p', text: 'Most contractors think of insurance as protection for physical accidents — someone gets hurt, something gets damaged. But foundation repair contractors carry a second, quieter kind of risk: the risk of being wrong. When your professional recommendation is alleged to have failed, you need professional liability insurance, also called errors and omissions (E&O).' },
      { type: 'h2', text: 'What Professional Liability Actually Covers' },
      { type: 'p', text: 'Professional liability responds to claims that your professional advice, design, or judgment caused a financial loss. For a foundation contractor, that includes recommending the wrong pier system, specifying an inadequate drainage plan, or misdiagnosing the cause of settlement. The damage in these cases is often economic rather than physical — exactly the type of claim general liability excludes.' },
      { type: 'h2', text: 'A Real-World Example' },
      { type: 'p', text: 'Imagine you inspect a settling home and recommend helical piers to a certain depth. The repair is installed flawlessly. Two years later the home settles again because the soil profile was deeper than anticipated. The homeowner sues, arguing your assessment was negligent. There is no bodily injury and no sudden property damage — so GL may decline. Professional liability is what defends you and pays the claim.' },
      { type: 'h2', text: 'Why Foundation Work Specifically Needs It' },
      { type: 'ul', items: [
        'You diagnose problems and recommend solutions — that is professional advice.',
        'Foundation failures are high-value, attracting attorneys and large demands.',
        'Soil behavior is uncertain, so outcomes can diverge from sound recommendations.',
        'Clients increasingly require E&O on contracts, especially commercial work.',
      ] },
      { type: 'h2', text: 'How Much Coverage Do You Need?' },
      { type: 'p', text: 'Limits depend on your project size and revenue. A residential operation might start at $1 million; commercial and structural-engineering-adjacent work often calls for more. The key is matching limits to your largest realistic exposure, not your average job.' },
      { type: 'h2', text: 'Get It Right the First Time' },
      { type: 'p', text: 'Professional liability is one of the most misunderstood coverages in the trade — and one of the most important for foundation contractors. Contractors Choice Agency builds E&O into a complete program alongside your general liability, workers’ comp, and equipment coverage, so the gaps are closed before a claim finds them.' },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
