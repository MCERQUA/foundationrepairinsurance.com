export type ServiceDetail = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  hero: string
  image: string
  intro: string[]
  whatItCovers: { h: string; p: string }[]
  scenarios: string[]
  whyMatters: string[]
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'general-liability': {
    slug: 'general-liability',
    title: 'General Liability Insurance',
    metaTitle: 'General Liability Insurance for Foundation Repair Contractors',
    metaDescription: 'General liability insurance for foundation repair contractors — protection against soil movement, settlement, and structural damage claims. Licensed in all 50 states.',
    hero: 'The bedrock of your protection',
    image: '/images/general-liability.jpg',
    intro: [
      'General liability (GL) is the single most important policy a foundation repair contractor carries. It responds when your work causes property damage or bodily injury to a third party — and in foundation work, those claims are both common and expensive.',
      'Almost every client, general contractor, and property manager will demand proof of general liability before you start a job. But not all GL policies are built for the realities of piering, underpinning, and structural repair. We make sure yours is.',
    ],
    whatItCovers: [
      { h: 'Property Damage Liability', p: 'Covers damage your work causes to a client’s property or an adjacent structure — cracked driveways, shifted retaining walls, or damaged utilities during excavation.' },
      { h: 'Bodily Injury Liability', p: 'Pays for third-party injuries that occur because of your operations, including the legal defense costs that come with them.' },
      { h: 'Completed Operations', p: 'Responds to damage that surfaces after a job is finished — critical in foundation work, where settlement claims often arrive months or years later.' },
      { h: 'Products & Materials', p: 'Covers liability tied to the piers, anchors, and materials you install when they are alleged to have caused damage.' },
    ],
    scenarios: [
      'A repaired foundation settles months later and the homeowner alleges your work caused new damage.',
      'Excavation for underpinning cracks a neighbor’s driveway and they file a third-party claim.',
      'A passerby is injured near your open work site and pursues a bodily-injury claim.',
    ],
    whyMatters: [
      'Required by virtually every contract you’ll sign.',
      'Soil-movement and settlement claims are the most frequent — and most costly — in the trade.',
      'Defense costs alone can exhaust an underbuilt policy; we size limits to your real exposure.',
    ],
  },
  'professional-liability': {
    slug: 'professional-liability',
    title: 'Professional Liability (E&O)',
    metaTitle: 'Professional Liability (E&O) Insurance for Foundation Contractors',
    metaDescription: 'Errors & omissions insurance for foundation repair contractors. Covers faulty design recommendations, failed repair methods, and professional judgment claims general liability excludes.',
    hero: 'Protection for your professional judgment',
    image: '/images/inspection.jpg',
    intro: [
      'Foundation contractors do more than install — you diagnose problems and recommend solutions. That professional judgment creates a distinct kind of risk that general liability does not cover: the risk that your recommendation is alleged to have failed.',
      'Professional liability, also called errors and omissions (E&O), fills this gap. As clients increasingly require E&O on contracts — especially commercial work — this coverage has moved from optional to essential.',
    ],
    whatItCovers: [
      { h: 'Faulty Design Recommendations', p: 'Responds when your recommended pier system, depth, or stabilization method is alleged to have been the wrong call.' },
      { h: 'Failed Repair Methods', p: 'Covers claims that the engineering approach you specified underperformed or failed under load.' },
      { h: 'Misdiagnosis Claims', p: 'Protects you if you are accused of incorrectly identifying the cause of settlement or structural movement.' },
      { h: 'Defense Costs', p: 'Pays the legal expenses of defending a professional-negligence claim, even one that ultimately has no merit.' },
    ],
    scenarios: [
      'You recommend helical piers to a set depth; the home settles again because the soil profile ran deeper than assessed.',
      'A client alleges your drainage recommendation failed to resolve the moisture problem.',
      'A commercial project owner claims your diagnostic report missed a structural cause.',
    ],
    whyMatters: [
      'General liability typically excludes professional-judgment claims — this is the coverage that responds.',
      'Foundation failures are high-value and attract attorneys.',
      'More commercial and municipal contracts now require E&O before award.',
    ],
  },
  'workers-comp': {
    slug: 'workers-comp',
    title: 'Workers’ Compensation',
    metaTitle: 'Workers’ Compensation Insurance for Foundation Repair Crews',
    metaDescription: 'Workers’ compensation for foundation repair contractors. Coverage for crews working underground, in confined spaces, and around heavy hydraulic equipment. All 50 states.',
    hero: 'Protect the crew that does the hard work',
    image: '/images/workers-comp.jpg',
    intro: [
      'Foundation repair is physically demanding and genuinely hazardous. Your crews work underground, in tight crawl spaces, and around heavy hydraulic equipment — conditions that produce more frequent and more severe injuries than lighter trades.',
      'Workers’ compensation is legally required in nearly every state once you have employees. It protects your people and shields your business from the lawsuits, fines, and stop-work orders that follow an uninsured injury.',
    ],
    whatItCovers: [
      { h: 'Medical Expenses', p: 'Pays for treatment when a crew member is injured on the job, from emergency care to rehabilitation.' },
      { h: 'Lost Wages', p: 'Replaces a portion of income while an injured worker recovers and cannot work.' },
      { h: 'Disability Benefits', p: 'Provides benefits for temporary or permanent disability resulting from a workplace injury.' },
      { h: 'Employer Liability', p: 'Defends your business against injury-related lawsuits brought by employees.' },
    ],
    scenarios: [
      'A worker is injured operating a hydraulic jack during a piering job.',
      'A crew member suffers a strain or fall while working in a confined crawl space.',
      'An excavation collapse injures a member of your team.',
    ],
    whyMatters: [
      'Legally required in nearly every state once you hire employees.',
      'Foundation work carries higher injury severity than most trades.',
      'Going without it exposes you to fines, lawsuits, and shutdowns.',
    ],
  },
  'commercial-auto': {
    slug: 'commercial-auto',
    title: 'Commercial Auto Insurance',
    metaTitle: 'Commercial Auto Insurance for Foundation Repair Contractors',
    metaDescription: 'Commercial auto insurance for foundation repair contractors. Fleet coverage for work trucks and trailers hauling piers, jacks, and excavation equipment. All 50 states.',
    hero: 'Coverage for your rolling job sites',
    image: '/images/commercial-building.jpg',
    intro: [
      'Your trucks and trailers are essential equipment — and a serious liability exposure. They haul piers, hydraulic jacks, and excavation gear to every job, and a single accident can mean injury claims, cargo loss, and downtime that stalls your schedule.',
      'Personal auto policies exclude business use. Commercial auto is the coverage that keeps your fleet — and your operation — protected on the road.',
    ],
    whatItCovers: [
      { h: 'Liability Coverage', p: 'Pays for injuries and property damage you cause in an accident while operating company vehicles.' },
      { h: 'Physical Damage', p: 'Covers collision and comprehensive damage to your trucks and trailers, including theft and weather.' },
      { h: 'Hauled Equipment', p: 'Protects the piers, jacks, and gear in transit when paired with the right cargo or inland-marine endorsement.' },
      { h: 'Hired & Non-Owned Auto', p: 'Extends coverage to rented vehicles and employees’ vehicles used for business.' },
    ],
    scenarios: [
      'A loaded equipment trailer is involved in a collision en route to a job.',
      'A company truck is stolen from a job site overnight.',
      'An employee causes an at-fault accident while driving for work.',
    ],
    whyMatters: [
      'Personal auto policies exclude business use — leaving a major gap.',
      'Foundation gear is heavy and valuable; transit risk is real.',
      'A single serious accident can generate claims that dwarf your premium.',
    ],
  },
  'equipment-tools': {
    slug: 'equipment-tools',
    title: 'Equipment & Tools Coverage',
    metaTitle: 'Equipment & Tools Insurance for Foundation Repair Contractors',
    metaDescription: 'Inland marine equipment and tools coverage for foundation repair contractors. Protect hydraulic piers, concrete drills, and excavation equipment from theft and damage.',
    hero: 'Keep your equipment working — and replaceable',
    image: '/images/equipment.jpg',
    intro: [
      'Foundation work depends on expensive, specialized equipment: hydraulic piers and jacks, concrete drills, and excavation machinery. When that gear is stolen, damaged, or lost, the cost is not just the replacement — it’s the jobs that stall while you wait.',
      'Equipment and tools coverage, written on an inland-marine form, protects your gear wherever it goes: on the job site, in transit, or in storage.',
    ],
    whatItCovers: [
      { h: 'Heavy Equipment', p: 'Covers hydraulic jacks, drilling rigs, and excavation equipment against theft, damage, and loss.' },
      { h: 'Small Tools', p: 'Protects the hand and power tools your crews rely on every day, often under a blanket limit.' },
      { h: 'In-Transit Coverage', p: 'Extends protection to equipment while it’s being hauled between job sites.' },
      { h: 'Rented & Borrowed Equipment', p: 'Covers your liability for equipment you rent or borrow to complete a job.' },
    ],
    scenarios: [
      'Hydraulic piering equipment is stolen from a job site overnight.',
      'A concrete drill is damaged beyond repair during a job.',
      'Rented excavation equipment is damaged while in your care.',
    ],
    whyMatters: [
      'Replacing specialized foundation equipment is expensive and slow.',
      'Downtime from lost gear directly costs you revenue.',
      'Standard property policies often exclude equipment away from your premises.',
    ],
  },
}
