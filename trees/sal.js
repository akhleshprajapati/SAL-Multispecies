/* =====================================================================
   SAL · TREE DATA FILE — The Sal Tree
   Built from the Nature Classrooms "Sal Tree" poster (Shorea robusta).
   Poster callouts → residents:
   Flowers → Pollinators (thrips) · Leaves → leaf-eating caterpillars ·
   Trunk → Sal heartwood borer · Bark/canopy → other insects ·
   Canopy → forest birds · Branches → Indian palm squirrel
   Pure data only. Edit freely. Add  artImg:'photos/sal.jpg'  for a photo.
===================================================================== */
SAL.addTree({
  id: 'sal',
  english: 'Sal',
  scientific: 'Shorea robusta',
  glyph: '🌳',
  // artImg: 'photos/sal.jpg',   ← uncomment & add a photo for realism

  names: [
    { lang:'English',    values:['Sal','Sakhua','Shala Tree','Sal Tree'] },
    { lang:'Hindi',      values:['साल','साखू'] },
    { lang:'Bengali',    values:['শাল (Shal)'] },
    { lang:'Odia',       values:['ସାଳ (Sala)'] },
    { lang:'Sanskrit',   values:['शाल (Shala)'] },
    { lang:'Scientific', values:['Shorea robusta'] }
  ],

  intro: [
    'The Sal tree is a tall, strong tree of India — an important part of our forests. It rises with a straight, sturdy trunk into a dense, rounded canopy of simple, leathery, oval leaves with clear veins. In season it bears small, cream-yellow flowers in clusters, and later small nut-like fruits with five unequal winged sepals.',
    'A living Sal is a whole neighbourhood: tiny thrips and other insects pollinate its flowers; caterpillars of moths such as Caviria sericea and Lymantria mathura feed on its leaves; many beetles, flies and bugs are recorded on the living tree; the Sal heartwood borer beetle tunnels in its wood; and birds, squirrels and monkeys use its canopy. Sal trees grow among other forest plants and support a wider forest community.'
  ],

  stories: {
    scientific: [
      'Shorea robusta belongs to the Dipterocarpaceae family and is one of India’s great canopy trees, forming the sal forests of the Himalayan foothills, central and eastern India. Its leathery oval leaves with clear veins resist heat and drought; its small cream-yellow flowers grow in clusters and are pollinated by tiny thrips and other insects; and its small nut-like fruits carry five unequal winged sepals.',
      'Those wings matter: Sal is an important native tree of India, and its winged fruits are mainly dispersed by wind and water. The wood is resinous, hard and famously durable — which is why the Sal heartwood borer beetle (Hoplocerambyx spinicornis) is one of the few creatures that can live inside it, its larvae tunnelling through the heartwood of the living tree.'
    ],
    cultural: [
      'Sal leaves are traditionally stitched into dona and pattal — plates and cups — for weddings, feasts and festivals, and the tree’s resin (sal dammar) burns in incense and seals varnishes. In many forest communities the sal is sacred: groves are protected as abodes of deities, and festivals such as Sarhul honour the tree with flowers and song.',
      'Buddhist tradition places the birth of the Buddha in a sal grove at Lumbini and his passing between two sal trees at Kushinagar, giving the tree a place in pilgrimage and memory across Asia. Its durable timber has built temples, homes and bridges — the tree that shelters wildlife also shelters human life.'
    ],
    historical: [
      'For centuries sal forests shaped the economies of the regions that hold them: resin, leaves, seeds and timber moved from forest to market, and sal wood — hard, straight, termite-resistant — became the timber of empire, used for temple beams, bridges and the railway sleepers of British India.',
      'That same value made sal a focus of early forest management and survey: colonial forest records, timber manuals and entomological studies catalogued its pests (like the heartwood borer) and the hundreds of insects, birds and mammals living on it — the beginning of the ecological picture this archive continues.'
    ]
  },

  species: [
    { id:'pollinators', name:'Pollinators — Thrips & Tiny Insects', sci:'Thysanoptera & others', type:'Insect',
      part:'Flowers', pos:{x:42, y:22}, zoom:3, icon:'🐝', tint:'#f7f3d8',
      stories:{
        scientific:['Tiny thrips and other small insects visit the Sal’s clusters of cream-yellow flowers, transferring pollen as they feed. Sal blossoms are built for these small generalist pollinators rather than showy bees or birds — a quiet partnership that sets the forest’s seed crop.'],
        cultural:['The flowering of sal marks a turn in the forest year: bloom and fragrance coincide with spring festivals in many forest communities, and the season of flowers foretells the season of seeds and honey.'],
        historical:['Thrips-pollination in sal and its dipterocarp relatives was documented through twentieth-century forest research in India, revising older assumptions that such trees were wind-pollinated alone.']
      }},
    { id:'leaf-eaters', name:'Leaf-eating Insects', sci:'Caviria sericea, Lymantria mathura', type:'Insect',
      part:'Leaves', pos:{x:28, y:32}, zoom:3, icon:'🐛', tint:'#e4ecd6',
      stories:{
        scientific:['Caterpillars of moths such as Caviria sericea and Lymantria mathura feed on Sal leaves. In outbreak years they can strip whole crowns — yet the sal responds by refoliating, a reminder that a tree and its leaf-eaters are locked in an old, survivable argument.'],
        cultural:['Forest readers know leaf damage as a sign: nibbled, skeletonised or rolled leaves tell which insects are present — exactly what the poster’s “nature detective” activity invites children to observe on a living sal.'],
        historical:['Lymantria mathura and other sal defoliators appear throughout colonial-era forest entomology reports, among the first insect–tree relationships systematically recorded in Indian forests.']
      }},
    { id:'other-insects', name:'Other Insects', sci:'beetles, flies, bugs & more', type:'Insect',
      part:'Bark & canopy', pos:{x:33, y:44}, zoom:2.8, icon:'🪰', tint:'#e0e6ea',
      stories:{
        scientific:['Many beetles, flies, bugs and other insects are recorded on living Sal trees — from bark crevices to the sunlit canopy. This small fauna is the food base that draws warblers, babblers and woodpeckers to the crown.'],
        cultural:['The hum of a sal crown is part of forest soundscape lore: insect-rich trees are known to beekeepers and birders alike as places where the forest concentrates its life.'],
        historical:['Century-old survey lists from Indian forests catalogued hundreds of insect species associated with Shorea robusta, making sal one of the best-documented insect hosts in the country.']
      }},
    { id:'borer', name:'Sal Heartwood Borer', sci:'Hoplocerambyx spinicornis', type:'Beetle',
      part:'Trunk & wood', pos:{x:50, y:62}, zoom:2.8, icon:'🪲', tint:'#e8dcc8',
      stories:{
        scientific:['The Sal heartwood borer beetle tunnels in the wood: its larvae bore into the heartwood of living and felled sal, threading the very timber that is otherwise too hard and resinous for most creatures to breach.'],
        cultural:['Forest workers and carpenters read the borer’s signs — bore dust and round exit holes — in old beams, doors and sleepers; a hole-free sal beam is a mark of good timber and good luck.'],
        historical:['As sal became the sleeper-wood of British India’s railways, this longhorn beetle became one of the most studied timber pests of the empire, featured in early twentieth-century timber manuals.']
      }},
    { id:'forest-birds', name:'Forest Birds', sci:'e.g. Tephrodornis pondicerianus & others', type:'Bird',
      part:'Canopy & nests', pos:{x:66, y:26}, zoom:2.6, icon:'🐦', tint:'#dce8ef',
      stories:{
        scientific:['Birds perch and nest in sal trees — babblers, drongos, hornbills and more — gleaning the canopy’s insects and nesting in its forks. As the poster honestly notes, these are animals of sal forest habitat rather than species exclusive to this one tree.'],
        cultural:['The dawn chorus of a sal forest threads through folk song and proverb across central India; a nesting bird in the house-tree is widely welcomed as a blessing.'],
        historical:['Salim Ali’s surveys and later bird counts established sal forests as key habitats for Indian birdlife, and sal canopy studies remain a cornerstone of Indian ornithology.']
      }},
    { id:'palm-squirrel', name:'Indian Palm Squirrel', sci:'Funambulus palmarum', type:'Mammal',
      part:'Branches & canopy', pos:{x:62, y:48}, zoom:2.6, icon:'🐿️', tint:'#efe3d3',
      stories:{
        scientific:['Squirrels and monkeys use the forest canopy, and the striped palm squirrel is among its busiest residents — foraging flowers, buds and seeds, and nesting in holes and leaf-drays among the branches.'],
        cultural:['In Indian storytelling the little squirrel is beloved: in Ramayana tradition it is the squirrel who carries grains of sand to help build Rama’s bridge, honoured ever since for doing what it can with what it has.'],
        historical:['That legend, told for centuries and painted in folk art, makes the squirrel one of the oldest recorded “residents” in Indian cultural memory of the forest tree.']
      }}
  ],

  /* ---- painted illustration (light, grain, depth) ---- */
  art: `<svg class="tree" viewBox="0 0 600 900" preserveAspectRatio="xMidYMid meet" aria-label="Painted sal tree">
  <defs>
    <linearGradient id="lgSalTrunk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#5f4227"/><stop offset=".28" stop-color="#a97e4f"/>
      <stop offset=".5" stop-color="#c9a06a"/><stop offset=".75" stop-color="#8a6238"/><stop offset="1" stop-color="#4e3520"/>
    </linearGradient>
    <radialGradient id="rgSalCan" cx=".4" cy=".32" r=".85">
      <stop offset="0" stop-color="#79b25a"/><stop offset=".45" stop-color="#4c8a41"/>
      <stop offset=".75" stop-color="#356b30"/><stop offset="1" stop-color="#24471f"/>
    </radialGradient>
    <radialGradient id="rgSalGlow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#fff3c4" stop-opacity=".8"/><stop offset="1" stop-color="#fff3c4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lgSalWing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d8b184"/><stop offset="1" stop-color="#a97c4e"/>
    </linearGradient>
    <radialGradient id="rgSalFloret" cx=".4" cy=".35" r=".7">
      <stop offset="0" stop-color="#fffbe2"/><stop offset="1" stop-color="#e3cf8d"/>
    </radialGradient>
    <filter id="fSalBark" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.014 0.16" numOctaves="4" seed="6" result="n"/>
      <feDiffuseLighting in="n" lighting-color="#b08050" surfaceScale="2.6" diffuseConstant="1.05" result="l"><feDistantLight azimuth="235" elevation="58"/></feDiffuseLighting>
      <feComposite in="l" in2="SourceAlpha" operator="in"/>
    </filter>
    <filter id="fSalLeafN" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.11" numOctaves="3" seed="12" result="n"/>
      <feDiffuseLighting in="n" lighting-color="#5c9a44" surfaceScale="1.7" diffuseConstant="1" result="l"><feDistantLight azimuth="240" elevation="62"/></feDiffuseLighting>
      <feComposite in="l" in2="SourceAlpha" operator="in"/>
    </filter>
    <filter id="fSalSoft"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="fSalSoft1"><feGaussianBlur stdDeviation="1.4"/></filter>
    <g id="gSalLeaf">
      <path d="M0 0 C3 -8 12 -15 25 -13 C22 -3 11 3 0 0 Z"/>
      <path d="M1.5 -1 C9 -7 17 -10 23 -11" stroke="rgba(0,0,0,.25)" stroke-width=".9" fill="none"/>
      <path d="M2 -2.5 C9 -8 16 -11 22 -12" stroke="rgba(255,255,255,.22)" stroke-width=".7" fill="none"/>
    </g>
    <g id="gSalCluster">
      <use href="#gSalLeaf" transform="rotate(0) translate(3,0)"/><use href="#gSalLeaf" transform="rotate(45) translate(3,0)"/>
      <use href="#gSalLeaf" transform="rotate(90) translate(3,0)"/><use href="#gSalLeaf" transform="rotate(135) translate(3,0)"/>
      <use href="#gSalLeaf" transform="rotate(180) translate(3,0)"/><use href="#gSalLeaf" transform="rotate(225) translate(3,0)"/>
      <use href="#gSalLeaf" transform="rotate(270) translate(3,0)"/><use href="#gSalLeaf" transform="rotate(315) translate(3,0)"/>
      <use href="#gSalLeaf" transform="rotate(22) scale(.7)"/><use href="#gSalLeaf" transform="rotate(112) scale(.7)"/>
      <use href="#gSalLeaf" transform="rotate(202) scale(.7)"/><use href="#gSalLeaf" transform="rotate(292) scale(.7)"/>
    </g>
    <g id="gSalBlossom">
      <circle r="4" fill="url(#rgSalFloret)"/><circle cx="7" cy="-4" r="3.4" fill="url(#rgSalFloret)"/>
      <circle cx="-7" cy="-4" r="3.4" fill="url(#rgSalFloret)"/><circle cx="5" cy="6" r="3.4" fill="url(#rgSalFloret)"/>
      <circle cx="-5" cy="6" r="3.4" fill="url(#rgSalFloret)"/><circle cy="-9" r="3" fill="url(#rgSalFloret)"/>
      <circle r="1.5" fill="#e0b23f"/><circle cx="7" cy="-4" r="1.2" fill="#e0b23f"/><circle cx="-7" cy="-4" r="1.2" fill="#e0b23f"/>
    </g>
    <g id="gSalFruit">
      <ellipse cy="-10" rx="3.6" ry="10" fill="url(#lgSalWing)"/>
      <ellipse cy="-10" rx="3.6" ry="10" fill="url(#lgSalWing)" transform="rotate(72)"/>
      <ellipse cy="-10" rx="3.6" ry="10" fill="url(#lgSalWing)" transform="rotate(144)"/>
      <ellipse cy="-10" rx="3.6" ry="10" fill="url(#lgSalWing)" transform="rotate(216)"/>
      <ellipse cy="-10" rx="3.6" ry="10" fill="url(#lgSalWing)" transform="rotate(288)"/>
      <circle r="3.4" fill="#7a5a36"/><circle cx="-1" cy="-1" r="1.4" fill="#c9a06a"/>
    </g>
  </defs>
  <ellipse cx="300" cy="240" rx="270" ry="210" fill="url(#rgSalGlow)" opacity=".55"/>
  <ellipse cx="300" cy="852" rx="180" ry="22" fill="#e0d3ae"/>
  <ellipse cx="300" cy="846" rx="200" ry="26" fill="#6b5a3a" opacity=".3" filter="url(#fSalSoft)"/>
  <g stroke="#7d8f4e" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8">
    <path d="M168 846 q4 -16 2 -22"/><path d="M186 850 q6 -14 4 -20"/><path d="M204 848 q3 -12 1 -17"/>
    <path d="M420 846 q-4 -16 -2 -22"/><path d="M438 850 q-6 -14 -4 -20"/><path d="M402 848 q-3 -12 -1 -17"/>
  </g>
  <path d="M283 372 C281 480 279 620 272 760 C268 806 258 830 240 848 L360 848 C342 830 332 806 328 760 C321 620 319 480 317 372 Z" fill="url(#lgSalTrunk)"/>
  <path d="M283 372 C281 480 279 620 272 760 C268 806 258 830 240 848 L360 848 C342 830 332 806 328 760 C321 620 319 480 317 372 Z" filter="url(#fSalBark)" opacity=".55" style="mix-blend-mode:multiply"/>
  <path d="M285 380 C283 500 281 640 275 770" stroke="rgba(255,240,200,.4)" stroke-width="3" fill="none"/>
  <path d="M315 380 C317 500 319 640 325 770" stroke="rgba(40,26,14,.45)" stroke-width="4" fill="none"/>
  <path d="M240 848 C262 838 276 826 282 806" stroke="rgba(40,26,14,.35)" stroke-width="5" fill="none"/>
  <path d="M360 848 C338 838 324 826 318 806" stroke="rgba(40,26,14,.35)" stroke-width="5" fill="none"/>
  <g stroke="#6b4a2b" stroke-width="10" fill="none" stroke-linecap="round">
    <path d="M300 400 C282 356 244 328 204 310"/><path d="M300 400 C320 350 360 320 398 302"/><path d="M300 396 C300 350 300 320 300 288"/>
  </g>
  <ellipse cx="312" cy="268" rx="205" ry="158" fill="#1d3a19" opacity=".9" filter="url(#fSalSoft)"/>
  <ellipse cx="300" cy="252" rx="205" ry="158" fill="url(#rgSalCan)"/>
  <ellipse cx="206" cy="300" rx="118" ry="92" fill="url(#rgSalCan)"/>
  <ellipse cx="392" cy="298" rx="118" ry="92" fill="url(#rgSalCan)"/>
  <ellipse cx="300" cy="168" rx="128" ry="78" fill="url(#rgSalCan)"/>
  <g style="mix-blend-mode:overlay" opacity=".5" filter="url(#fSalLeafN)">
    <ellipse cx="300" cy="252" rx="205" ry="158" fill="#4c8a41"/>
    <ellipse cx="206" cy="300" rx="118" ry="92" fill="#4c8a41"/>
    <ellipse cx="392" cy="298" rx="118" ry="92" fill="#4c8a41"/>
  </g>
  <g fill="#24471f" opacity=".85" filter="url(#fSalSoft1)">
    <use href="#gSalCluster" transform="translate(250,382) scale(1.1) rotate(10)"/>
    <use href="#gSalCluster" transform="translate(322,392) scale(1.05) rotate(40)"/>
    <use href="#gSalCluster" transform="translate(392,362) rotate(70)"/>
    <use href="#gSalCluster" transform="translate(180,342) rotate(100)"/>
    <use href="#gSalCluster" transform="translate(300,330) scale(1.15) rotate(130)"/>
  </g>
  <g fill="#2f5d2c">
    <use href="#gSalCluster" transform="translate(505,252) scale(1.1) rotate(80)"/>
    <use href="#gSalCluster" transform="translate(493,306) scale(1.05) rotate(60)"/>
    <use href="#gSalCluster" transform="translate(457,354) scale(1.1) rotate(40)"/>
    <use href="#gSalCluster" transform="translate(403,389) rotate(20)"/>
    <use href="#gSalCluster" transform="translate(336,408) scale(1.05)"/>
    <use href="#gSalCluster" transform="translate(264,408) rotate(340)"/>
    <use href="#gSalCluster" transform="translate(210,389) scale(1.05) rotate(320)"/>
    <use href="#gSalCluster" transform="translate(157,354) rotate(300)"/>
    <use href="#gSalCluster" transform="translate(121,306) scale(1.1) rotate(280)"/>
  </g>
  <g fill="#3f7a34">
    <use href="#gSalCluster" transform="translate(95,252) scale(1.05) rotate(260)"/>
    <use href="#gSalCluster" transform="translate(121,198) rotate(240)"/>
    <use href="#gSalCluster" transform="translate(157,150) scale(1.05) rotate(220)"/>
    <use href="#gSalCluster" transform="translate(210,111) rotate(200)"/>
    <use href="#gSalCluster" transform="translate(264,92) scale(1.1) rotate(180)"/>
    <use href="#gSalCluster" transform="translate(336,92) rotate(160)"/>
    <use href="#gSalCluster" transform="translate(403,111) scale(1.05) rotate(140)"/>
    <use href="#gSalCluster" transform="translate(457,150) rotate(120)"/>
    <use href="#gSalCluster" transform="translate(493,198) scale(1.05) rotate(100)"/>
  </g>
  <g fill="#4c8a41">
    <use href="#gSalCluster" transform="translate(240,260) scale(1.05) rotate(15)"/>
    <use href="#gSalCluster" transform="translate(300,240) rotate(45)"/>
    <use href="#gSalCluster" transform="translate(360,260) scale(1.05) rotate(75)"/>
    <use href="#gSalCluster" transform="translate(210,300) rotate(105)"/>
    <use href="#gSalCluster" transform="translate(390,300) scale(1.05) rotate(135)"/>
    <use href="#gSalCluster" transform="translate(300,300) rotate(165)"/>
    <use href="#gSalCluster" transform="translate(260,210) scale(.95) rotate(195)"/>
    <use href="#gSalCluster" transform="translate(340,210) scale(.95) rotate(225)"/>
  </g>
  <g fill="#5c9a44">
    <use href="#gSalCluster" transform="translate(230,180) scale(.9) rotate(10)"/>
    <use href="#gSalCluster" transform="translate(280,150) scale(.85) rotate(40)"/>
    <use href="#gSalCluster" transform="translate(330,170) scale(.9) rotate(70)"/>
    <use href="#gSalCluster" transform="translate(200,220) scale(.85) rotate(100)"/>
    <use href="#gSalCluster" transform="translate(370,200) scale(.9) rotate(130)"/>
    <use href="#gSalCluster" transform="translate(250,240) scale(.8) rotate(160)"/>
    <use href="#gSalCluster" transform="translate(320,240) scale(.8) rotate(190)"/>
    <use href="#gSalCluster" transform="translate(390,240) scale(.85) rotate(220)"/>
  </g>
  <g fill="#7ab55c" opacity=".95">
    <use href="#gSalCluster" transform="translate(225,150) scale(.7) rotate(25)"/>
    <use href="#gSalCluster" transform="translate(275,120) scale(.65) rotate(55)"/>
    <use href="#gSalCluster" transform="translate(325,140) scale(.7) rotate(85)"/>
    <use href="#gSalCluster" transform="translate(195,195) scale(.6) rotate(115)"/>
    <use href="#gSalCluster" transform="translate(355,165) scale(.65) rotate(145)"/>
    <use href="#gSalCluster" transform="translate(245,195) scale(.6) rotate(175)"/>
  </g>
  <g fill="#9ccf7a" opacity=".9">
    <use href="#gSalCluster" transform="translate(250,105) scale(.45) rotate(20)"/>
    <use href="#gSalCluster" transform="translate(300,95) scale(.45) rotate(80)"/>
    <use href="#gSalCluster" transform="translate(210,130) scale(.45) rotate(140)"/>
    <use href="#gSalCluster" transform="translate(360,120) scale(.45) rotate(200)"/>
  </g>
  <ellipse cx="240" cy="170" rx="120" ry="80" fill="url(#rgSalGlow)" opacity=".5" style="mix-blend-mode:screen"/>
  <use href="#gSalBlossom" transform="translate(252,198)"/>
  <use href="#gSalBlossom" transform="translate(332,150) scale(.9)"/>
  <use href="#gSalBlossom" transform="translate(208,242) scale(.85)"/>
  <use href="#gSalBlossom" transform="translate(368,212) scale(.8)"/>
  <use href="#gSalFruit" transform="translate(430,322)"/>
  <use href="#gSalFruit" transform="translate(176,338) scale(.85)"/>
  <g transform="translate(252,198)" fill="#e8c84a">
    <ellipse cx="10" cy="2" rx="1.6" ry=".8"/><ellipse cx="-9" cy="6" rx="1.6" ry=".8"/><ellipse cx="4" cy="10" rx="1.6" ry=".8"/>
  </g>
  <g transform="translate(168,288)">
    <circle cx="-7" cy="1" r="4" fill="#7ba045"/><circle cx="0" cy="0" r="4.5" fill="#6b8f3a"/>
    <circle cx="7" cy="-1" r="4.2" fill="#7ba045"/><circle cx="14" cy="0" r="4" fill="#6b8f3a"/>
    <circle cx="20" cy="2" r="3.6" fill="#7ba045"/><circle cx="23" cy="0" r="2.6" fill="#4c6b2a"/>
  </g>
  <g transform="translate(198,396)">
    <ellipse cx="0" cy="0" rx="4.5" ry="3.2" fill="#3f8f5f"/>
    <ellipse cx="9" cy="4" rx="3" ry="2.2" fill="#5a6a72"/><ellipse cx="9" cy="2.4" rx="3.4" ry="1.4" fill="#cfd8dd" opacity=".8"/>
    <ellipse cx="-8" cy="5" rx="3" ry="2.2" fill="#8a4a3a"/>
  </g>
  <g transform="translate(300,558)">
    <path d="M-2 -14 q-10 -12 -14 -18 M2 -14 q10 -12 14 -18" stroke="#3a2a1c" stroke-width="1.6" fill="none"/>
    <ellipse cx="0" cy="0" rx="5.5" ry="11" fill="#3a2a1c"/><circle cx="0" cy="-12" r="3.4" fill="#4a3826"/>
    <path d="M-5 -4 l-6 -2 M-5 2 l-7 0 M-5 8 l-6 3 M5 -4 l6 -2 M5 2 l7 0 M5 8 l6 3" stroke="#3a2a1c" stroke-width="1.6"/>
    <circle cx="9" cy="16" r="1.4" fill="#d8c49a"/><circle cx="11" cy="22" r="1.2" fill="#d8c49a"/>
  </g>
  <g transform="translate(396,234)">
    <path d="M-11 -1 l-12 5 l12 1 z" fill="#6e4626"/>
    <ellipse cx="0" cy="0" rx="12" ry="8" fill="#8a5a3a"/>
    <circle cx="11" cy="-6" r="5.4" fill="#ece8de"/>
    <path d="M8 -7 l7 -1.6" stroke="#2a2620" stroke-width="2"/>
    <path d="M16 -6 l5 1.6 l-5 1.8 z" fill="#4a4038"/>
    <circle cx="12.6" cy="-7" r="1" fill="#20242a"/>
  </g>
  <g transform="translate(372,432)">
    <path d="M-9 -1 q-12 -6 -10 -18 q8 4 10 12 z" fill="#8a6b4a"/>
    <ellipse cx="0" cy="0" rx="10" ry="6.5" fill="#b08968"/>
    <g stroke="#5b412c" stroke-width="1.6" fill="none">
      <path d="M-3 -6 q0 6 0 12"/><path d="M1 -6 q0 6 0 12"/><path d="M5 -5 q0 5 0 10"/>
    </g>
    <circle cx="9" cy="-5" r="4.6" fill="#c09a76"/><path d="M7 -9 l1.6 -3 l2 2.4 z" fill="#b08968"/>
    <circle cx="10.6" cy="-6" r=".9" fill="#20242a"/>
  </g>
</svg>`
});