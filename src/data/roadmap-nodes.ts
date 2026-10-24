import { RoadmapNodeData, StageInfo } from '../types/roadmap';

export const STAGES: StageInfo[] = [
  {
    id: 1,
    title: 'Stage 1: The Fresh Criminal',
    budgetRange: '$0 - $50k',
    description: 'Quick start, free weapon challenge bonuses ($775k+), and zero-cost early setup.',
    accentColor: '#3b82f6', // blue
  },
  {
    id: 2,
    title: 'Stage 2: Solo Hustler & VIP',
    budgetRange: '$50k - $1.5M',
    description: 'VIP wave rotation, Cluckin Bell Raid ($500k solo), and first high-end heist room.',
    accentColor: '#06b6d4', // cyan
  },
  {
    id: 3,
    title: 'Stage 3: First Heavy Hitters',
    budgetRange: '$1.5M - $2.5M',
    description: 'Acid Lab Brickade 6x6 solo business and Kosatka Submarine (Cayo Perico solo kingpin).',
    accentColor: '#10b981', // emerald
  },
  {
    id: 4,
    title: 'Stage 4: Active Operations Empire',
    budgetRange: '$2.5M - $5M',
    description: 'The Agency (Payphone Hits & Dr. Dre), Auto Shop contracts, and Salvage Yard Chop Shop.',
    accentColor: '#eab308', // gold
  },
  {
    id: 5,
    title: 'Stage 5: Passive Syndicate & Safes',
    budgetRange: '$5M - $10M',
    description: 'Nightclub passive hub, 5 wall safes automated, Bunker manufacturing, and Master Control.',
    accentColor: '#a855f7', // purple
  },
  {
    id: 6,
    title: 'Stage 6: Master Endgame Routines',
    budgetRange: '$10M+ Endgame',
    description: 'The 48-minute Golden Vault Circuit, Diamond Casino heists, and weaponized fleet.',
    accentColor: '#f43f5e', // rose
  },
];

export const ROADMAP_NODES: RoadmapNodeData[] = [
  // STAGE 1
  {
    id: 'starter-tutorial',
    title: 'Criminal Registration & Basics',
    subtitle: 'Account setup, initial contact jobs, convenience stores',
    stage: 1,
    stageTitle: 'The Fresh Criminal',
    category: 'milestone',
    payout: '$15k - $30k',
    cost: '$0',
    timeEstimate: '30 mins',
    soloFriendly: true,
    tags: ['Tutorial', 'Zero Cost', 'Essential'],
    summary: 'Complete the introductory missions, claim free starter vehicles, and learn basic mechanics.',
    details: {
      prerequisites: ['None (New character)'],
      steps: [
        'Complete the game tutorial or skip if already familiar with controls.',
        'Steal a reliable 4-door street car (e.g., Karin Sultan or Zion), take it to Los Santos Customs and install a free tracker and insurance.',
        'Deposit all cash into your Maze Bank account via the in-game phone browser (www.mazebank.com) so other players cannot steal it upon death.',
        'Join the Rockstar Social Club for a free Elegy RH8 sports car.'
      ],
      proTips: [
        'Never carry unbanked cash on hand; players can kill and take up to $10k.',
        'Snacks and body armor from Ammu-Nation & convenience stores are essential for survival.'
      ],
      redditLinks: [
        { title: 'Quick Start Guide for Complete Newbies (r/gtaonline)', url: 'https://www.reddit.com/r/gtaonline/comments/3yn8c1/how_to_gta_online_new_faqs_contribution/' }
      ]
    }
  },
  {
    id: 'treasure-hunts',
    title: 'Revolver Challenges & Stone Hatchet',
    subtitle: 'Free $775,000 startup cash through 3 mini-quests',
    stage: 1,
    stageTitle: 'The Fresh Criminal',
    category: 'active_mission',
    payout: '$775,000 Free Cash',
    cost: '$0',
    timeEstimate: '45 mins',
    soloFriendly: true,
    hourlyEquiv: '$1.0M/hr',
    tags: ['Free Cash', 'Headshots', 'Solo', 'High Priority'],
    summary: 'The single fastest legal way to jump from broke to nearly $1 Million in under an hour.',
    details: {
      prerequisites: ['Level 1+'],
      steps: [
        'Double-Action Revolver: Wait for the email with a treasure photo, find 3 clues, claim the chest in Sandy Shores. Get 50 headshots with it on NPCs to receive $250,000.',
        'Navy Revolver (Los Santos Slasher): Investigate 5 slasher clues around the map, defeat the Slasher when he attacks you, get 50 kills with the Navy Revolver for $275,000.',
        'Stone Hatchet (Maude Bounties): Wait for Maude’s text, capture/kill 5 bail targets, retrieve the hatchet. Activate its rampage ability and get 25 kills for $250,000.'
      ],
      proTips: [
        'Farm the 50 headshots and 25 kills on harmless NPCs at Vespucci Beach or Del Perro Pier to avoid police response.',
        'Combine this cash to immediately unlock VIP status or buy your first high-end apartment!'
      ],
      redditLinks: [
        { title: 'Broke to Millionaire in GTA Online (r/gtaonline)', url: 'https://www.reddit.com/r/gtaonline/comments/4rpuf8/for_newpoor_players_ive_made_a_guide_to_make_you/' }
      ]
    }
  },
  {
    id: 'flight-school',
    title: 'San Andreas Flight School',
    subtitle: 'LSIA flight tests for $250,000 + max Flying skill',
    stage: 1,
    stageTitle: 'The Fresh Criminal',
    category: 'milestone',
    payout: '$232,000 - $250,000',
    cost: '$0',
    timeEstimate: '35 mins',
    soloFriendly: true,
    tags: ['Skill Max', 'Solo', 'Solo Solo'],
    summary: 'Earn gold medals in flight lessons at Los Santos International Airport for instant cash and stats.',
    details: {
      steps: [
        'Head to the flight school marker at LSIA (stairs near terminal).',
        'Complete 10 flight tests (Takeoff, Landing, Helicopter Course, Formation Flying).',
        'Gold medals reward ~$25,000 each plus a first-completion bonus.'
      ],
      proTips: [
        'Maxing your Flying skill eliminates cockpit turbulence and camera shake forever.',
        'Use keyboard numpad or a controller for smoother rudder control.'
      ]
    }
  },
  {
    id: 'dax-first-dose',
    title: 'First Dose Storyline (Dax & The Fooliganz)',
    subtitle: '6 contact missions unlocking the free Brickade 6x6',
    stage: 1,
    stageTitle: 'The Fresh Criminal',
    category: 'active_mission',
    payout: '$500,000+ & Free Vehicle',
    cost: '$0',
    timeEstimate: '50 mins',
    soloFriendly: true,
    tags: ['Drug Wars', 'Free Brickade', 'Acid Lab Seed'],
    summary: 'Play through Dax’s First Dose missions to claim the MTL Brickade 6x6 truck and seed your Acid Lab.',
    details: {
      steps: [
        'Head to the yellow "D" marker at Liquor Ace in Sandy Shores.',
        'Complete missions 1 through 6 with Dax.',
        'Mission 6 rewards you with the MTL Brickade 6x6 truck and $250,000 first-time completion bonus.',
        'Deliver the Brickade to The Freakshop in Los Santos.'
      ],
      proTips: [
        'Play on Hard difficulty if you have an Armored Kuruma or heavy body armor for 1.5x RP and cash.',
        'This lays the foundation for the best solo business in the game (Acid Lab) in Stage 3!'
      ]
    }
  },

  // STAGE 2
  {
    id: 'unlock-vip',
    title: 'Unlock VIP Status ($50k Milestone)',
    subtitle: 'Register as SecuroServ VIP with zero property purchase',
    stage: 2,
    stageTitle: 'Solo Hustler & VIP',
    category: 'milestone',
    payout: 'Unlocks VIP Work',
    cost: '$50,000 bank threshold ($0 spent)',
    timeEstimate: 'Instant',
    soloFriendly: true,
    tags: ['SecuroServ', 'Essential Milestone'],
    summary: 'Once your bank balance hits $50,000, you can register as a VIP through the Interaction Menu.',
    details: {
      prerequisites: ['Minimum $50,000 balance in Maze Bank'],
      steps: [
        'Open Interaction Menu (M on PC / Touchpad on PS / View on Xbox).',
        'Select SecuroServ → Register as VIP.',
        'VIP status lasts for 4 hours of gameplay and can be renewed indefinitely.'
      ],
      proTips: [
        'VIP does NOT deduct the $50,000! It only checks that you have it as collateral.',
        'Allows you to spawn free Buzzard helicopters or fast vehicles near your character.'
      ]
    }
  },
  {
    id: 'vip-wave',
    title: 'The VIP "Wave" Money Routine',
    subtitle: 'Sightseer + Headhunter continuous money rotation',
    stage: 2,
    stageTitle: 'Solo Hustler & VIP',
    category: 'active_mission',
    payout: '$20,000 - $25,000 / 5 mins',
    cost: '$0',
    timeEstimate: 'Ongoing Loop',
    soloFriendly: true,
    hourlyEquiv: '$250k - $300k/hr',
    tags: ['VIP Work', 'Classic Meta', 'Cooldown Filler'],
    summary: 'The legendary method developed by r/gtaonline to chain VIP missions without waiting for cooldowns.',
    details: {
      steps: [
        'Step 1: Launch Sightseer (Hack 3 packages around the map, takes 3-4 mins, pays $22,500).',
        'Step 2: Headhunter begins immediately while Sightseer is on cooldown (eliminate 4 targets, pays $21,000).',
        'Step 3: Call Franklin for Payphone Hit or do Hostile Takeover at LSIA while Headhunter cools down.',
        'Repeat in invite-only session without player griefing.'
      ],
      proTips: [
        'Use an Armored Kuruma or Buzzard/Sparrow to complete Headhunter without taking damage.',
        'In Sightseer, memorize the hacking minigames (IP address search and number slide).'
      ],
      redditLinks: [
        { title: 'VIP Wave Method for Continuous Money Grinding (r/gtaonline)', url: 'https://www.reddit.com/r/RedditDads/comments/52bt6t/vip_work_the_wave_method/' }
      ]
    }
  },
  {
    id: 'daily-stash-house',
    title: 'Daily Stash Houses & G’s Cache',
    subtitle: 'Instant $30k cash or $75k in 100% free business supplies',
    stage: 2,
    stageTitle: 'Solo Hustler & VIP',
    category: 'active_mission',
    payout: '$30,000 or $75,000 supply value',
    cost: '$0',
    timeEstimate: '2 mins',
    soloFriendly: true,
    hourlyEquiv: '$600k+/hr rate',
    tags: ['Daily Reset', 'Free Supplies', 'Fast'],
    summary: 'Raid a purple house icon on the map once every 24 hours real time to fill business supplies for free.',
    details: {
      steps: [
        'Locate the purple Stash House icon on your map.',
        'Enter through the basement door, eliminate 4-5 cartel goons with shotgun.',
        'Find the yellow sticky note containing the 3-digit safe combination.',
        'Loot the safe and exit the area.'
      ],
      proTips: [
        'If you own an Acid Lab or Bunker, the safe will ALWAYS refill a full bar of production supplies for $0, saving $60k-$75k!',
        'Also pick up G’s Cache (purple crate icon) nearby for $25k cash + full armor and snacks.'
      ]
    }
  },
  {
    id: 'cluckin-bell',
    title: 'The Cluckin’ Bell Farm Raid',
    subtitle: 'Vincent’s heist with $500,000 flat solo payout and $0 cost',
    stage: 2,
    stageTitle: 'Solo Hustler & VIP',
    category: 'heist',
    payout: '$500,000 (+$250k first time)',
    cost: '$0',
    timeEstimate: '45 mins',
    soloFriendly: true,
    hourlyEquiv: '$650k/hr',
    tags: ['Solo Heist', 'No Property Needed', 'High Yield'],
    summary: 'The best starter heist in modern GTA Online: zero buy-in fee, fully soloable, 48-minute cooldown.',
    details: {
      prerequisites: ['Answer Vincent’s call at the "V" icon (Vespucci Police Station)'],
      steps: [
        'Setup 1 (Slush Fund): Loot 2 cartel money laundering businesses ($0 cost).',
        'Setup 2 (Breaking & Entering): Steal keycard and hacking device from train.',
        'Setup 3 (Concealed Weapons): Choose Weapons & Gear (Military grade recommended).',
        'Setup 4 (Hit and Run): Steal getaway vehicle (Bravado Gauntlet Interceptor or truck).',
        'Setup 5 (Disorganized Crime): Sabotage factory delivery trucks.',
        'Finale (Scene of the Crime): Infiltrate farm, steal cocaine cartel money, escape via train tracks!'
      ],
      proTips: [
        'Escape along the western train tracks on foot or car to avoid police helicopters and road spikes.',
        'First completion awards an extra $250,000 career progress bonus!'
      ]
    }
  },
  {
    id: 'high-end-apt',
    title: 'First High-End Apartment',
    subtitle: 'Del Perro Heights $200k (Heist Room & Armored Kuruma)',
    stage: 2,
    stageTitle: 'Solo Hustler & VIP',
    category: 'milestone',
    payout: 'Unlocks OG Heists',
    cost: '$200,000',
    timeEstimate: 'Instant',
    soloFriendly: true,
    tags: ['Apartment', 'Kuruma Trade Price'],
    summary: 'Unlocks the Heist Planning Room to run The Fleeca Job and unlock trade price on the Armored Kuruma.',
    details: {
      steps: [
        'Visit Dynasty 8 Real Estate website on your phone.',
        'Purchase Del Perro Heights Apt 7 or Apt 20 for $200,000.',
        'Host The Fleeca Job with 1 friend or random player.',
        'Unlocks the Karin Armored Kuruma (impervious to NPC bullets in PvE missions).'
      ],
      proTips: [
        'The Armored Kuruma is the ultimate beginner mission grinding vehicle in GTA Online.'
      ]
    }
  },

  // STAGE 3
  {
    id: 'acid-lab',
    title: 'Acid Lab Setup & Equipment Upgrade',
    subtitle: 'Top solo business: $335,000 - $502,000 per single-bike sale',
    stage: 3,
    stageTitle: 'First Heavy Hitters',
    category: 'business',
    payout: '$335,000 - $502,000',
    cost: '$750,000 installation + upgrade',
    timeEstimate: '6-8 min sales',
    soloFriendly: true,
    hourlyEquiv: '$450k/hr passive rate',
    tags: ['Solo Friendly', 'Fast Sales', 'High Demand Bonus'],
    summary: 'Convert your Brickade 6x6 into the mobile Acid Lab inside The Freakshop and unlock the speed upgrade.',
    details: {
      prerequisites: ['MTL Brickade 6x6 from First Dose missions'],
      steps: [
        'Pay Mutt $750,000 inside The Freakshop to install the lab equipment.',
        'Call Dax → Request Work (Complete 10 Fooligan Jobs to unlock the Equipment Upgrade).',
        'Install Equipment Upgrade for $250,000 to maximize production speed and value.',
        'Interact with the chemistry table daily to activate the Boost Production speed boost.'
      ],
      proTips: [
        'Acid deliveries ALWAYS use 1 single motorcycle (Manchez Scout C) which can bunny-hop obstacles.',
        'Sell in full public lobbies for up to +50% High Demand bonus ($502,500 total payout)!'
      ]
    }
  },
  {
    id: 'kosatka-sub',
    title: 'Kosatka Submarine Purchase',
    subtitle: 'Gateway to Cayo Perico ($2.2M investment)',
    stage: 3,
    stageTitle: 'First Heavy Hitters',
    category: 'milestone',
    payout: 'Unlocks Cayo Perico',
    cost: '$2,200,000 (Base submarine)',
    timeEstimate: 'Instant',
    soloFriendly: true,
    tags: ['Pavel', 'Submarine', 'Heist Kingpin'],
    summary: 'Purchase the Kosatka from Warstock Cache & Carry to unlock the highest-paying solo heist.',
    details: {
      steps: [
        'Visit Music Locker nightclub beneath The Diamond Casino and meet Miguel Madrazo.',
        'Open Warstock Cache & Carry on phone and buy base Kosatka for $2.2M (no upgrades needed yet).',
        'Register as CEO/VIP and head to Kosatka planning screen with Pavel.'
      ],
      proTips: [
        'Do not buy the sonar or missiles yet. Save up for the Sparrow helicopter upgrade later ($1.8M).'
      ]
    }
  },
  {
    id: 'cayo-perico-solo',
    title: 'Cayo Perico Solo Speedrun',
    subtitle: 'The solo heist kingpin: $1.0M - $1.4M in ~60 mins',
    stage: 3,
    stageTitle: 'First Heavy Hitters',
    category: 'heist',
    payout: '$1,000,000 - $1,400,000',
    cost: '$25,000 setup fee',
    timeEstimate: '50 - 65 mins',
    soloFriendly: true,
    hourlyEquiv: '$1.1M - $1.3M/hr',
    tags: ['Kingpin Heist', 'Solo', 'Pink Diamond'],
    summary: 'Scout primary target, run 5 quick prep missions, and execute silent compound infiltration.',
    details: {
      steps: [
        'Scouting: Fly Velum to island, scout communications tower camera feed for primary loot (Pink Diamond, Bearer Bonds, Ruby Necklace).',
        'Preps (5 total): Kosatka or Longfin approach, Conspirator/Crackshot weapons with suppressors, Cutting Torch, Fingerprint Cloner, Plasma Cutter/Safe Codes.',
        'Finale: Infiltrate via Drainage Pipe, stealth-kill guards with headshots, crack primary safe, loot secondary cocaine/weed at airstrip or docks, swim south to escape.'
      ],
      proTips: [
        'Solo cooldown is 2.4 hours (144 mins). If played with a friend, cooldown is only 48 minutes!',
        'Always set up the heist within 48 minutes of Pavel’s notification to lock in Hard Mode (+10% payout).'
      ]
    }
  },

  // STAGE 4
  {
    id: 'celebrity-agency',
    title: 'Celebrity Solutions Agency',
    subtitle: 'Dr. Dre Contract, Payphone Hits, and $250k Wall Safe',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'business',
    payout: 'Multiple Streams',
    cost: '$2,010,000 (Little Seoul or Hawick)',
    timeEstimate: 'Instant unlock',
    soloFriendly: true,
    tags: ['The Contract', 'Franklin', 'Wall Safe', 'Imani Tech'],
    summary: 'Partner with Franklin Clinton to handle high-profile celebrity contracts and unlock Imani Tech.',
    details: {
      steps: [
        'Purchase Little Seoul or Hawick Agency on Dynasty 8 Executive.',
        'Watch opening cutscene with Franklin & Chop.',
        'Access main office computer to launch Security Contracts and Dr. Dre VIP storyline.'
      ],
      proTips: [
        'Includes armory with discounted ammo/armor and the vehicle workshop for missile jammer tech.'
      ]
    }
  },
  {
    id: 'payphone-hits',
    title: 'Franklin’s Payphone Hits',
    subtitle: '$45,000 for 4 minutes of work (10m cooldown)',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'active_mission',
    payout: '$45,000 ($15k base + $30k bonus)',
    cost: '$0',
    timeEstimate: '3 - 5 mins',
    soloFriendly: true,
    hourlyEquiv: '$540k/hr',
    tags: ['Fast Solo', 'Assassination', 'Top Cooldown Filler'],
    summary: 'Call Franklin from your mobile phone anywhere in the map to trigger an assassination mission.',
    details: {
      steps: [
        'Open phone contacts → Call Franklin → Request Payphone Hit.',
        'Drive to ringing payphone icon.',
        'Read the assassination bonus requirement (e.g. run target over with bulldozer, drop shipping container).',
        'Execute target according to bonus criteria for the full $45,000.'
      ],
      proTips: [
        '10-minute cooldown begins the moment the hit finishes. Chain this between safe runs!'
      ]
    }
  },
  {
    id: 'agency-safe-boost',
    title: 'Agency 201 Security Contracts',
    subtitle: 'Permanently scale Agency Wall Safe to $20,000/day',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'passive_vault',
    payout: 'Up to $20,000 / 48 mins',
    cost: '$0',
    timeEstimate: '4-5 min per mission',
    soloFriendly: true,
    tags: ['Wall Safe', 'Permanent', 'Zero Decay'],
    summary: 'Every 5 Security Contracts permanently raises daily Agency safe income by $500/day up to $20,000/day at 201 contracts.',
    details: {
      steps: [
        'Sit at Agency computer or call Franklin → Request Security Contract.',
        'Pick the fastest types: Liquidize Assets, Recover Valuables, Rescue Operation.',
        'Avoid Vehicle Recovery unless it is at Humane Labs.',
        'Once 201 contracts are done, the $20,000/day tick never decays!'
      ],
      proTips: [
        'Wall safe holds up to $250,000 before capping out (~10 hours of gameplay).'
      ]
    }
  },
  {
    id: 'dr-dre-contract',
    title: 'Dr. Dre VIP Finale (The Contract)',
    subtitle: '$1,000,000 flat solo payout through 3 studio investigations',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'active_mission',
    payout: '$1,000,000',
    cost: '$0',
    timeEstimate: '90 mins total',
    soloFriendly: true,
    hourlyEquiv: '$650k/hr',
    tags: ['Solo Heist', 'No Bag RNG', 'Storyline'],
    summary: 'Recover Dr. Dre’s stolen unreleased tracks from Nightlife, High Society, and South Central suspects.',
    details: {
      steps: [
        'Complete the 3 investigation tracks (Nightlife Leak, High Society Leak, South Central Leak).',
        'Studio Time mission at Record A Studios.',
        'Don’t Fuck With Dre finale at LSIA hangar ($1,000,000 reward).'
      ],
      proTips: [
        'Can be replayed infinitely with no cool-off penalty. Reliable alternative when Cayo is on cooldown!'
      ]
    }
  },
  {
    id: 'auto-shop',
    title: 'Auto Shop Tuners & Union Depository',
    subtitle: 'Client vehicle customization + $270k Union Depository contract',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'business',
    payout: '$270,000 per contract',
    cost: '$1,700,000 (Burton or Strawberry)',
    timeEstimate: '20 mins',
    soloFriendly: true,
    hourlyEquiv: '$700k/hr',
    tags: ['Tuners', 'Mini Heists', 'Car Delivery'],
    summary: 'Run high-octane mini heists and customize customer cars for $20k-$30k profit.',
    details: {
      steps: [
        'Check the job board upstairs in the Auto Shop office.',
        'Pick Union Depository Contract whenever available (2 easy preps + vault raid).',
        'Staff or player delivers customer cars whenever Sessanta alerts you.'
      ],
      proTips: [
        'Unlocks all vehicle paint and performance upgrades regardless of your character level!'
      ]
    }
  },
  {
    id: 'salvage-yard',
    title: 'Salvage Yard & Tow Truck Service',
    subtitle: 'Lock in $24,000/day passive safe + 3 weekly vehicle robberies',
    stage: 4,
    stageTitle: 'Active Operations Empire',
    category: 'passive_vault',
    payout: '$24,000/day + $35k scrap per car',
    cost: '$2,670,000 with Tow Truck',
    timeEstimate: '2-3 min tow runs',
    soloFriendly: true,
    tags: ['Chop Shop', 'Wall Safe', 'Weekly Robberies'],
    summary: 'Tow cars to maximize the Salvage Yard wall safe to $24k/day and run 3 weekly car heists ($250k-$400k each).',
    details: {
      steps: [
        'Buy Salvage Yard (Strawberry or Murrieta Heights) with Tow Truck upgrade.',
        'Tow 2 cars to max daily safe rate to $24,000/day ($1,000/hr in-game).',
        'Each towed car also breaks down into $30,000 - $40,000 salvage parts scrap revenue.',
        'Run the 3 weekly computer robberies on the heist board for ~$900k weekly total.'
      ],
      proTips: [
        'Towing takes ~2 minutes. Running 1 tow every 2 in-game days preserves top safe yield!'
      ]
    }
  },

  // STAGE 5
  {
    id: 'nightclub-empire',
    title: 'Nightclub Empire (The Passive King)',
    subtitle: '$250k Wall Safe + Automated Warehouse Goods',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'passive_vault',
    payout: '$50,000 / 48 mins ($250k cap)',
    cost: '$1,400,000 - $3,000,000 with upgrades',
    timeEstimate: '100% Passive',
    soloFriendly: true,
    hourlyEquiv: '$62k/hr pure passive',
    tags: ['Cash Cow', 'Wall Safe', 'Passive Warehouse'],
    summary: 'The centerpiece of passive wealth in GTA Online: $50k/day wall safe and background warehouse stock.',
    details: {
      steps: [
        'Buy Nightclub in West Vinewood or Downtown Vinewood.',
        'Purchase the Equipment Upgrade ($1.4M) and Staff Upgrade ($475k).',
        'Keep Popularity above 95% to generate $50,000 into the office wall safe every 48 minutes.',
        'Hire 5 warehouse technicians and assign them to: South American Imports, Pharmaceutical Research, Cash Creation, Sporting Goods, Cargo & Shipments.'
      ],
      proTips: [
        'Never let the safe sit above $200k; safe caps at $250k and all overflow is permanently lost!'
      ]
    }
  },
  {
    id: 'nightclub-safe-hack',
    title: '10-Second Nightclub Bouncer Trick',
    subtitle: 'Passive mode trick to avoid driving intoxicated VIPs',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'protip',
    payout: '+25% Popularity in 10s',
    cost: '$0',
    timeEstimate: '10 seconds',
    soloFriendly: true,
    tags: ['Speed Trick', 'Glitch-free', 'Essential'],
    summary: 'Forces the game to always give the bouncer toss cutscene instead of the tedious 6-minute VIP drive.',
    details: {
      steps: [
        'Open Interaction Menu → Enable Passive Mode BEFORE entering your Nightclub door.',
        'Walk through the front door into the club.',
        'Marcel will text you about an unruly clubber. Walk up to the red blip on your minimap.',
        'Press the interact button to throw the troublemaker out of the club.',
        'Instantly gives +25% Popularity and $10,000 cash in 8 seconds!'
      ],
      proTips: [
        'If you forget to go passive, you can switch resident DJs from the basement terminal for $10,000 to restore 10% pop instantly.'
      ]
    }
  },
  {
    id: 'bunker-gunrunning',
    title: 'Chumash Bunker Gunrunning',
    subtitle: 'Weapons manufacturing + $50k Ammu-Nation contract deliveries',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'business',
    payout: '$210,000 per single-vehicle sale',
    cost: '$1,650,000 (Chumash Bunker)',
    timeEstimate: '5 min deliveries',
    soloFriendly: true,
    tags: ['Passive Stock', 'Ammu-Nation Truck', 'Solo Sale Rule'],
    summary: 'Manufacture weapons passively and deliver excess weapon parts trucks for quick cash.',
    details: {
      steps: [
        'Buy Chumash Bunker (best location, right next to the western highway into Los Santos).',
        'Buy Equipment & Staff upgrades.',
        'Set staff to 100% Manufacturing.',
        'Solo Rule: Buy 1 supply batch ($75k) → Sell 1 batch ($210k in Los Santos) = Guaranteed single delivery vehicle!'
      ],
      proTips: [
        'Deliver the Duneloader truck with excess weapon parts to Ammu-Nation every 48 mins for $50,000 quick cash.'
      ]
    }
  },
  {
    id: 'mc-feeder-trio',
    title: 'The MC "Feeder" Trio (Coke, Meth, Cash)',
    subtitle: 'Buy strictly to feed technicians into Nightclub Warehouse',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'business',
    payout: 'Feeds Nightclub Hub',
    cost: '$3,000,000 total',
    timeEstimate: 'Zero maintenance',
    soloFriendly: true,
    tags: ['Nightclub Synergy', 'Do Not Upgrade', 'Zero Raid'],
    summary: 'Own Cocaine Lockup, Meth Lab, and Counterfeit Cash to funnel passive goods into the Nightclub.',
    details: {
      steps: [
        'Buy cheap Biker Clubhouse in Sandy Shores or Great Chaparral.',
        'Purchase Cocaine Lockup (Alamo Sea), Methamphetamine Lab (Grand Senora), Counterfeit Cash (Grand Senora).',
        'Complete the initial setup mission for each to make them active.',
        'CRITICAL: Do NOT buy upgrades for MC businesses and do NOT resupply them! Leave them active with 0 supplies.'
      ],
      proTips: [
        'As long as the business is not shut down, your Nightclub technicians will accrue stock forever without raids or maintenance fees!'
      ]
    }
  },
  {
    id: 'arcade-mct',
    title: 'Arcade & Master Control Terminal',
    subtitle: '$5,000/day 1-game trick safe + remote global empire manager',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'passive_vault',
    payout: '$5,000 / 48 mins (100% passive)',
    cost: '$1,800,000 (Videogeddon or Eight-Bit)',
    timeEstimate: 'Zero upkeep',
    soloFriendly: true,
    tags: ['MCT', 'Diamond Casino Hub', 'Safe Hack'],
    summary: 'Collect $5,000/day permanent safe revenue and manage all your businesses from one chair.',
    details: {
      steps: [
        'Purchase Videogeddon (La Mesa) or Eight-Bit (Vinewood) Arcade.',
        'THE 1-GAME TRICK: Buy the single cheapest arcade game (e.g. Monkey’s Paradise for $90k). Go to the management screen and place that one machine onto every empty slot across the floor. You immediately get the maximum $5,000/day safe rate!',
        'Purchase the Master Control Terminal (MCT) upgrade to resupply Bunker and buy stock without traveling across the map.'
      ],
      proTips: [
        'Wall safe caps at $100,000. It never decays even if you never visit!'
      ]
    }
  },
  {
    id: 'bail-enforcement',
    title: 'Bail Enforcement Office (Bottom Dollar)',
    subtitle: 'Dispatch 2 agents on bounties + collect accumulated safe cash',
    stage: 5,
    stageTitle: 'Passive Syndicate & Safes',
    category: 'passive_vault',
    payout: '$7,500 - $12,000 per staff cycle',
    cost: '$1,650,000 - $2,500,000 with staff',
    timeEstimate: '10 sec dispatch',
    soloFriendly: true,
    tags: ['Bottom Dollar', 'Wall Safe', 'Staff Agents'],
    summary: 'Send staff agents hunting for bail jumpers and collect their bounties directly in your office safe.',
    details: {
      steps: [
        'Buy Bail Office (Davis or Del Perro) with both Staff upgrades.',
        'Whenever you visit, walk to the 2 agents and press interact to dispatch them.',
        'They return after 48 minutes with $7,500 - $10,000 deposited in your office safe.'
      ],
      proTips: [
        'Safe holds up to $100,000.'
      ]
    }
  },

  // STAGE 6
  {
    id: 'vault-circuit-loop',
    title: 'The Golden 48-Minute Vault Sweep Circuit',
    subtitle: 'The master freemode sequence: collect $151,500 in 8 mins',
    stage: 6,
    stageTitle: 'Master Endgame Routines',
    category: 'active_mission',
    payout: '~$106k passive + $45k Payphone Hit',
    cost: '$0',
    timeEstimate: '6 - 8 mins',
    soloFriendly: true,
    hourlyEquiv: '$1.1M+/hr rate',
    tags: ['Endgame Routine', 'Vault Run', 'Meta Blueprint'],
    summary: 'The ultimate coordinated sweep across all 5 wall safes executed once every 48-minute in-game day.',
    details: {
      steps: [
        'Stop 1 (Agency): Empty desk safe ($20k). As you step outside, call Franklin → Request Payphone Hit ($45k).',
        'Stop 2 (Nightclub): Turn on Passive Mode, enter door, eject troublemaker in 10s (+25% pop). Empty safe ($50k).',
        'Stop 3 (Salvage Yard): Empty safe ($24k). Hook 1 Tow Truck car (takes 2 mins) to preserve $24k/day tick + $35k scrap.',
        'Stop 4 (Arcade): Empty safe ($5k). Check MCT to buy Bunker supplies in 1 click.',
        'Stop 5 (Bail Office): Empty safe (~$7.5k). Dispatch both staff agents.',
        'Bonus: Raid daily Stash House if icon is present for free supplies.'
      ],
      proTips: [
        'Session-Hop Fast Travel: Set spawn point to property → Find New Invite-Only Session → Spawn inside in 10s!'
      ]
    }
  },
  {
    id: 'diamond-casino-heist',
    title: 'The Diamond Casino Heist',
    subtitle: 'Top 2-player heist: $1.6M - $2.4M take with Big Con / Silent',
    stage: 6,
    stageTitle: 'Master Endgame Routines',
    category: 'heist',
    payout: '$1,600,000 - $2,400,000 (2P split)',
    cost: '$25,000 setup fee',
    timeEstimate: '75 mins (preps + finale)',
    soloFriendly: false,
    hourlyEquiv: '$800k - $1.0M/hr',
    tags: ['2 Players', 'Diamonds', 'Gruppe Sechs'],
    summary: 'Alternate between The Big Con (Gruppe Sechs entry) and Silent & Sneaky to rob the casino vault.',
    details: {
      steps: [
        'Approach 1: The Big Con with Gruppe Sechs disguise (walk directly into the vault without firing a single shot).',
        'Approach 2: Silent & Sneaky with EMP and infiltration suits.',
        'Always hire Avi Schwartzman or Paige Harris as Hacker for maximum vault looting time.',
        'Never choose the Aggressive approach unless completing awards.'
      ],
      proTips: [
        'Exit disguise: High Roller outfits or Noose gear allows you to walk through the casino staff lobby in plain clothes!'
      ]
    }
  },
  {
    id: 'cayo-hard-mode',
    title: 'Cayo Perico Hard-Mode Window Lock',
    subtitle: 'Activate within 48 mins of cooldown for +10% primary payout',
    stage: 6,
    stageTitle: 'Master Endgame Routines',
    category: 'protip',
    payout: '+10% Value (+$100k - $140k)',
    cost: '$25,000 setup',
    timeEstimate: 'Instant alert',
    soloFriendly: true,
    tags: ['Hard Mode', 'Timer Alert', 'Max Value'],
    summary: 'Pay the setup fee as soon as Pavel texts you to permanently lock in Hard Mode difficulty.',
    details: {
      steps: [
        'After completing Cayo Perico solo, wait for the 144-minute cooldown.',
        'Pavel will text: "El Rubio has cleared the mess and is counting his money again..."',
        'You have exactly 1 in-game day (48 real-life minutes) to register the heist.',
        'Paying the $25,000 fee within this window permanently locks in Hard Mode.'
      ],
      proTips: [
        'Hard Mode increases Pink Diamond to $1,430,000 and adds +$100,000 to the Elite Challenge!'
      ]
    }
  },
  {
    id: 'endgame-fleet',
    title: 'Essential Weaponized Fleet',
    subtitle: 'Oppressor Mk II, Sparrow, Raiju, and Armored Kuruma',
    stage: 6,
    stageTitle: 'Master Endgame Routines',
    category: 'milestone',
    payout: 'Infinite time saved',
    cost: 'Endgame goal',
    timeEstimate: 'Ongoing collection',
    soloFriendly: true,
    tags: ['Fleet', 'Fast Travel', 'Defense'],
    summary: 'The top 5 essential vehicles that cut mission grind times in half across the entire game.',
    details: {
      steps: [
        '1. Sparrow (Kosatka moon pool): Spawns instantly right beside you via Interaction Menu with unlimited missiles.',
        '2. Oppressor Mk II: Pinpoint landing on rooftops, tight alleys, and rapid transit across Los Santos.',
        '3. F-160 Raiju: VTOL stealth jet for instant coast-to-coast flights and evading griefers in stealth mode.',
        '4. Armored Kuruma: 100% bulletproof NPC shield for contact missions and Headhunter.',
        '5. Toreador: Submarine car with infinite missiles, boost, and no special blip on radar.'
      ],
      proTips: [
        'The Sparrow can be called through Kosatka Services with zero cooldown even if your personal vehicle is active!'
      ]
    }
  }
];

export const INITIAL_TIMERS = [
  {
    id: 'timer-day',
    label: 'GTA In-Game Day (Safe Tick)',
    durationSeconds: 48 * 60,
    remainingSeconds: 48 * 60,
    isRunning: true,
    category: 'game_clock' as const,
    description: '1 In-Game Day = 48 real minutes. Triggers wall safe revenue deposits.'
  },
  {
    id: 'timer-payphone',
    label: 'Franklin Payphone Hit',
    durationSeconds: 10 * 60,
    remainingSeconds: 10 * 60,
    isRunning: false,
    category: 'cooldown' as const,
    description: '10 min cooldown after completing a $45,000 hit.'
  },
  {
    id: 'timer-cayo-solo',
    label: 'Cayo Perico Solo Cooldown',
    durationSeconds: 144 * 60, // 2.4 hours
    remainingSeconds: 144 * 60,
    isRunning: false,
    category: 'cooldown' as const,
    description: '144 min solo cooldown before Hard Mode window opens.'
  },
  {
    id: 'timer-tow-salvage',
    label: 'Tow Truck Scrap Processing',
    durationSeconds: 48 * 60,
    remainingSeconds: 48 * 60,
    isRunning: false,
    category: 'passive' as const,
    description: '48 to 96 mins for staff to dismantle towed car for $35k scrap.'
  },
  {
    id: 'timer-agency-contract',
    label: 'Agency Security Contract',
    durationSeconds: 5 * 60,
    remainingSeconds: 5 * 60,
    isRunning: false,
    category: 'cooldown' as const,
    description: '5 min cooldown between Security Contracts.'
  }
];
