/* =====================================================================
   SAL · TREE DATA FILE — The Fishtail Palm
   Pure data only. Edit freely.
   • names   : every name (search works on all)
   • species : residents. pos = {x%,y%} on the art; zoom = camera closeness
   • icon    : emoji placeholder — or use  img:"photos/x.jpg"  for a photo
   • artImg  : optional REAL photograph of the tree (path or URL);
               the painted art below stays as offline fallback
   • art     : painted illustration (SVG, viewBox 0 0 600 900)
===================================================================== */
SAL.addTree({
  id: 'fishtail-palm',
  english: 'Fishtail Palm',
  scientific: 'Caryota urens',
  glyph: '🌴',
  // artImg: 'photos/fishtail_palm.jpg',   ← uncomment & add a photo for realism

  names: [
    { lang:'English',    values:['Fishtail Palm','Kitul Palm','Toddy Palm','Wine Palm','Jaggery Palm'] },
    { lang:'Hindi',      values:['माडल','कीटल पाम'] },
    { lang:'Kannada',    values:['ಬೆಂಡೆ ಜಿಂಗು (Bende Jingu)'] },
    { lang:'Malayalam',  values:['ചൂണ്ടപ്പന (Choondapana)','കാട്ടുപന (Kattupana)'] },
    { lang:'Sinhala',    values:['කිතුල් (Kitul)'] },
    { lang:'Scientific', values:['Caryota urens'] }
  ],

  intro: [
    'Did you know the fishtail palm (Caryota urens) gets its name because its leaves resemble a fish’s tail? “Urens” means “stinging” — because tiny crystals in its fruit can irritate the skin! The tree can grow very tall, up to 20 metres, with a slender, ringed trunk.',
    'The fishtail palm is home to many wild animals: bats, palm civets, monkeys, butterflies, birds, insects, and epiphytes like orchids and ferns. An individual tree flowers only once in its lifetime — growing small white or yellow flowers in clusters that later turn into dark-red fruits.'
  ],

  stories: {
    scientific: [
      'Caryota urens belongs to the palm family Arecaceae. Its genus name, Caryota, refers to the nut-like fruit, while urens — “stinging” — warns of the calcium-oxalate crystals packed in the fruit’s flesh, which itch and burn on contact. The leaflets are bitten into jagged, fish-tail shapes, unique among palms.',
      'The tree is monocarpic: it grows for years without flowering, then sends down a single cascade of blossom from the crown, branch by branch, fruits once, and dies. Its slender ringed trunk can rise twenty metres, lifting its fruit-clusters into the canopy layer where flying fruit-eaters can reach them.'
    ],
    cultural: [
      'Across South Asia the fishtail palm is a working tree of village life. Its strong, light trunk was traditionally used to make tools for levelling paddy fields, and its enormous leaves were stitched into decorative mantaps and pandals for weddings and festivals.',
      'Where the palm is called kitul, its sap is the gift that sweetens the year: tapped from the flowering stem, it is boiled into kitul treacle and jaggery, or fermented into toddy. From Sri Lanka to the Western Ghats, the kitul tapper’s ladder leaning against a ringed trunk is a centuries-old image of harvest.'
    ],
    historical: [
      'The palm was formally named Caryota urens by Linnaeus in 1763, but its human history is far older. Palm sap, treacle and starch from the pith appear in centuries of South and Southeast Asian trade records, famine foods and forest economies.',
      'Colonial-era plant hunters carried descriptions of the “fishtail palm” back to European gardens, where its architectural fronds made it a conservatory favourite. Today, posters like the Nature Classrooms illustration bring the tree full circle — back into classrooms, as a teacher of ecology.'
    ]
  },

  species: [
    { id:'hornbill', name:'Malabar Grey Hornbill', sci:'Ocyceros griseus', type:'Bird',
      part:'Canopy & fruits', pos:{x:55, y:16.5}, zoom:2.6, icon:'🐦', tint:'#dce8ef',
      stories:{
        scientific:['The Malabar grey hornbill is endemic to the forests of the Western Ghats. With its large, curved bill it swallows fleshy fruits whole — including fishtail palm fruits — and carries the seeds far across the canopy, dropping them in its droppings as it travels. Few other birds can handle fruits this size, making the hornbill a keystone seed-sower.'],
        cultural:['In Western Ghats villages, the hornbill’s loud, cackling call is woven into forest lore as the voice of the fruiting season. When hornbills gather and call, people know which trees are ripening — the bird is a living fruit-calendar, and in some traditions a guardian spirit of the canopy.'],
        historical:['Hornbills and fruiting trees like palms have shaped each other over millions of years of co-evolution: big fruit, big bill, long-distance seed dispersal. Nineteenth-century naturalists described the Malabar grey hornbill from Ghats specimens, and its presence still marks old, healthy, fruiting forest.']
      }},
    { id:'fruitbat', name:'Fruit Bats', sci:'Cynopterus sphinx & Pteropus giganteus', type:'Mammal',
      part:'Fruit clusters', pos:{x:41, y:47.5}, zoom:2.8, icon:'🦇', tint:'#e6dcef',
      stories:{
        scientific:['These nighttime visitors use sharp teeth to cut into the palm’s hanging fruit clusters and enjoy a delicious snack. Short-nosed fruit bats (Cynopterus) even bite leaf veins to fold palm leaves into temporary “tents” for roosting. Guided by smell and sight rather than echolocation, they move seeds and pollen across kilometres of dark.'],
        cultural:['Bats are often feared or dismissed as bad omens, yet they are the palm grove’s night shift: the same trees they feed on give people jaggery, toddy, fruit and shade. In palm-rich landscapes, a grove full of bats is quietly understood as a grove that will keep fruiting.'],
        historical:['From early naturalists’ cabinets to Salim Ali’s field notebooks, Indian fruit bats have been documented — and persecuted — for centuries. Modern ecology has reversed the verdict: flying foxes and short-nosed bats are now recognised among the most important regenerators of tropical forest.']
      }},
    { id:'palmbob', name:'Palm Bob', sci:'Hasora spp. (Hesperiidae)', type:'Butterfly',
      part:'Leaves', pos:{x:25, y:28.7}, zoom:3, icon:'🦋', tint:'#e4ecd6',
      stories:{
        scientific:['Palm bobs are small, fast “skipper” butterflies. They lay their eggs on the fishtail palm, and when the eggs hatch the caterpillars feed on the leaves, stitching leaf shelters around themselves. The butterfly gets its name precisely because its caterpillars feed on palm trees.'],
        cultural:['In folk weather-lore, sudden flurries of small butterflies signal the turning of the season and the coming monsoon. A palm grove with palm bobs dancing through it is read by gardeners and elders as a living, well-fed grove.'],
        historical:['Colonial-era surveys such as “The Butterflies of India” catalogued these skippers and their larval food-plants, tying palm and butterfly together in the scientific record for over a century — an early example of documenting insect–host relationships.']
      }},
    { id:'epiphytes', name:'Epiphytes — Orchids & Ferns', sci:'various spp.', type:'Plant',
      part:'Trunk & branches', pos:{x:53, y:52.5}, zoom:2.8, icon:'🌿', tint:'#dcefe0',
      stories:{
        scientific:['Epiphytes are plants that grow on other host plants. They use the host plant for support but do not take any food or water resources from it — they drink rain and breathe humidity. On the fishtail palm, ferns and orchids turn the trunk into a hanging garden and a micro-habitat for insects.'],
        cultural:['Wild orchids and ferns gathered from palm and tree trunks have long decorated temples, garlands and festival thresholds across South India and Sri Lanka — the tree lending its body, once again, to celebration.'],
        historical:['Nineteenth-century “orchidmania” in Europe sent plant hunters into Asian forests, collecting epiphytic orchids straight off palm and tree trunks. Many herbarium specimens of these epiphytes list palms like Caryota as their host.']
      }},
    { id:'civet', name:'Palm Civet', sci:'Paradoxurus hermaphroditus', type:'Mammal',
      part:'Ground & fallen fruits', pos:{x:41.7, y:90}, zoom:2.6, icon:'🦝', tint:'#efe3d3',
      stories:{
        scientific:['The palm civet is a slender, nocturnal mammal that climbs the ringed trunk with ease to reach ripening fruit. It swallows fruits whole and disperses the seeds in its droppings, planting new palms far from the parent — one of the tree’s most effective gardeners.'],
        cultural:['In village folklore the civet is the clever night-wanderer of the grove, neither cat nor mouse, appearing in tales as a trickster and a quiet companion of palm-tappers’ huts. Its scent-glands historically gave “civet” to attars and perfumes.'],
        historical:['Civet musk travelled Indian Ocean trade routes for centuries, its name arriving via Arabic zabād. Meanwhile the civet went about its older trade unnoticed — seeding palm forests — and today it is famed again for its role in wild coffee and palm forest regeneration.']
      }}
  ],

  /* ---- painted illustration (light, grain, depth) ---- */
  art: `<svg class="tree" viewBox="0 0 600 900" preserveAspectRatio="xMidYMid meet" aria-label="Painted fishtail palm">
  <defs>
    <linearGradient id="lgFpTrunk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8f7a58"/><stop offset=".3" stop-color="#cdba95"/>
      <stop offset=".55" stop-color="#b39a72"/><stop offset="1" stop-color="#7a6547"/>
    </linearGradient>
    <pattern id="fpRingsP" width="28" height="26" patternUnits="userSpaceOnUse">
      <path d="M0 18 Q14 25 28 18" stroke="#8f7a58" fill="none" stroke-width="2.2" opacity=".6"/>
    </pattern>
    <filter id="fFpBark" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.2" numOctaves="3" seed="4" result="n"/>
      <feDiffuseLighting in="n" lighting-color="#c9b691" surfaceScale="1.8" diffuseConstant="1" result="l"><feDistantLight azimuth="235" elevation="60"/></feDiffuseLighting>
      <feComposite in="l" in2="SourceAlpha" operator="in"/>
    </filter>
    <filter id="fFpSoft"><feGaussianBlur stdDeviation="6"/></filter>
    <radialGradient id="rgFpGlow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#fff3c4" stop-opacity=".75"/><stop offset="1" stop-color="#fff3c4" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lgFpFrond" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2c5a26"/><stop offset=".6" stop-color="#3f7a34"/><stop offset="1" stop-color="#5c9a44"/>
    </linearGradient>
    <linearGradient id="lgFpFrondHi" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#3f7a34"/><stop offset="1" stop-color="#8bc36a"/>
    </linearGradient>
    <radialGradient id="rgFpBerry" cx=".35" cy=".3" r=".8">
      <stop offset="0" stop-color="#d4694b"/><stop offset=".55" stop-color="#8f3a2c"/><stop offset="1" stop-color="#5d1d18"/>
    </radialGradient>
    <linearGradient id="lgFpTassel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#d8cc7a"/><stop offset="1" stop-color="#9a8c44"/>
    </linearGradient>
    <g id="gFpFrond">
      <path d="M0 0 L16 -12 L24 -4 L38 -18 L46 -8 L62 -24 L70 -11 L88 -27 L96 -13 L116 -29 L124 -15 L144 -27 L150 -13 L170 -21 L176 -9 L194 -14 L200 -2 L182 2 L174 12 L154 7 L148 18 L128 11 L120 24 L100 15 L92 28 L74 17 L66 28 L50 15 L42 24 L28 11 L20 18 Z"/>
      <path d="M0 0 L16 -12 L24 -4 L38 -18 L46 -8 L62 -24 L70 -11 L88 -27 L96 -13 L116 -29 L124 -15 L144 -27 L150 -13 L170 -21 L176 -9 L194 -14 L200 -2 L182 2 L174 12 L154 7 L148 18 L128 11 L120 24 L100 15 L92 28 L74 17 L66 28 L50 15 L42 24 L28 11 L20 18 Z" transform="translate(10,-1) scale(.86)" fill="rgba(255,255,255,.13)"/>
      <path d="M2 0 Q100 -6 198 -2" stroke="rgba(20,40,16,.5)" fill="none" stroke-width="2.6"/>
      <path d="M2 -1.6 Q100 -7.6 198 -3.6" stroke="rgba(255,255,255,.18)" fill="none" stroke-width="1"/>
    </g>
  </defs>
  <ellipse cx="300" cy="230" rx="260" ry="200" fill="url(#rgFpGlow)" opacity=".5"/>
  <ellipse cx="300" cy="852" rx="160" ry="20" fill="#e0d3ae"/>
  <ellipse cx="300" cy="846" rx="150" ry="24" fill="#6b5a3a" opacity=".3" filter="url(#fFpSoft)"/>
  <g stroke="#7d8f4e" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8">
    <path d="M180 846 q4 -14 2 -20"/><path d="M196 850 q6 -12 4 -18"/>
    <path d="M410 846 q-4 -14 -2 -20"/><path d="M428 850 q-6 -12 -4 -18"/>
  </g>
  <path d="M287 320 C285 480 283 640 279 842 L321 842 C317 640 315 480 313 320 Z" fill="url(#lgFpTrunk)"/>
  <path d="M287 320 C285 480 283 640 279 842 L321 842 C317 640 315 480 313 320 Z" filter="url(#fFpBark)" opacity=".5" style="mix-blend-mode:multiply"/>
  <path d="M287 320 C285 480 283 640 279 842 L321 842 C317 640 315 480 313 320 Z" fill="url(#fpRingsP)" opacity=".55"/>
  <path d="M289 330 C287 480 285 640 282 830" stroke="rgba(255,244,210,.45)" stroke-width="3" fill="none"/>
  <path d="M311 330 C313 480 315 640 318 830" stroke="rgba(60,44,26,.4)" stroke-width="4" fill="none"/>
  <ellipse cx="310" cy="258" rx="200" ry="150" fill="#1d3a19" opacity=".85" filter="url(#fFpSoft)"/>
  <g transform="translate(300,318)">
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-155) scale(1.05)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-125) scale(1.1)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-95) scale(1.15)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-65) scale(1.15)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-35) scale(1.1)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(-8) scale(1.05)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(18)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(45) scale(.95)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(75) scale(.85)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(105) scale(.85)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(135) scale(.95)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrond)" transform="rotate(160)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrondHi)" transform="rotate(-90) scale(.7)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrondHi)" transform="rotate(-72) scale(.55)"/>
    <use href="#gFpFrond" fill="url(#lgFpFrondHi)" transform="rotate(-112) scale(.6)"/>
  </g>
  <ellipse cx="250" cy="180" rx="120" ry="80" fill="url(#rgFpGlow)" opacity=".45" style="mix-blend-mode:screen"/>
  <g transform="translate(246,372)">
    <path d="M0 0 q-6 14 -4 26" stroke="#6b4a2b" stroke-width="3" fill="none"/>
    <circle cx="-2" cy="26" r="4" fill="#7d8f45"/><circle cx="6" cy="30" r="4" fill="#8fa04c"/>
    <circle cx="-4" cy="34" r="5" fill="url(#rgFpBerry)"/><circle cx="4" cy="40" r="5" fill="url(#rgFpBerry)"/>
    <circle cx="-10" cy="44" r="5" fill="url(#rgFpBerry)"/><circle cx="2" cy="52" r="6" fill="url(#rgFpBerry)"/>
    <circle cx="-8" cy="58" r="5" fill="url(#rgFpBerry)"/><circle cx="6" cy="64" r="5" fill="url(#rgFpBerry)"/>
    <circle cx="-2" cy="72" r="6" fill="url(#rgFpBerry)"/><circle cx="8" cy="76" r="4" fill="url(#rgFpBerry)"/>
    <circle cx="-8" cy="82" r="4" fill="url(#rgFpBerry)"/><circle cx="0" cy="90" r="4" fill="url(#rgFpBerry)"/>
    <g fill="rgba(255,255,255,.35)">
      <circle cx="-5" cy="32" r="1.2"/><circle cx="1" cy="50" r="1.4"/><circle cx="-4" cy="70" r="1.4"/><circle cx="4" cy="62" r="1.1"/>
    </g>
  </g>
  <g transform="translate(352,388)">
    <path d="M0 0 q4 10 2 18" stroke="#6b4a2b" stroke-width="3" fill="none"/>
    <path d="M-6 18 C-10 60 -6 96 2 128 C10 96 14 60 10 18 Z" fill="url(#lgFpTassel)"/>
    <g stroke="#8a7c3a" stroke-width="1.4" fill="none" opacity=".8">
      <path d="M-4 30 q-8 40 -6 70"/><path d="M8 34 q8 44 6 74"/><path d="M2 40 q0 50 0 84"/>
    </g>
    <g fill="#f2ecbe">
      <circle cx="-5" cy="46" r="1.4"/><circle cx="6" cy="58" r="1.4"/><circle cx="0" cy="76" r="1.4"/>
      <circle cx="-3" cy="96" r="1.3"/><circle cx="4" cy="110" r="1.3"/>
    </g>
  </g>
  <g transform="translate(316,470)" stroke="#4c8a54" stroke-width="2.5" fill="none" stroke-linecap="round">
    <path d="M0 0 q10 -14 24 -16"/><path d="M0 2 q12 -6 26 -2"/><path d="M0 4 q8 6 20 10"/>
  </g>
  <circle cx="342" cy="454" r="3.6" fill="#d78fb0"/><circle cx="341" cy="453" r="1.2" fill="#f6dce8"/>
  <g transform="translate(330,148)">
    <ellipse cx="0" cy="0" rx="16" ry="9" fill="#6f7d84"/><circle cx="14" cy="-6" r="6" fill="#7b8a91"/>
    <path d="M19 -7 q14 2 18 6 q-10 4 -18 2 z" fill="#d98f2b"/>
    <path d="M-14 2 l-16 7 l15 2 z" fill="#5c6a70"/><circle cx="15.5" cy="-7.5" r="1.2" fill="#20242a"/>
  </g>
  <g transform="translate(246,428)" fill="#4a3340">
    <ellipse cx="0" cy="0" rx="6" ry="8"/>
    <path d="M-6 -2 q-16 -10 -26 -2 q10 2 12 8 q8 -2 14 -2 z"/>
    <path d="M6 -2 q16 -10 26 -2 q-10 2 -12 8 q-8 -2 -14 -2 z"/>
    <path d="M-3 -7 l-2 -5 l4 2 z"/><path d="M3 -7 l2 -5 l-4 2 z"/>
  </g>
  <g transform="translate(150,258)">
    <ellipse cx="-5" cy="0" rx="6" ry="8" fill="#8a6b4a" transform="rotate(-24 -5 0)"/>
    <ellipse cx="5" cy="0" rx="6" ry="8" fill="#9c7c57" transform="rotate(24 5 0)"/>
    <rect x="-1.2" y="-7" width="2.4" height="14" rx="1.2" fill="#4c3a26"/>
  </g>
  <g transform="translate(250,812)">
    <ellipse cx="0" cy="0" rx="18" ry="9" fill="#6b4a33"/>
    <circle cx="16" cy="-7" r="7" fill="#7a5740"/>
    <path d="M21 -7 l7 3 l-7 3 z" fill="#5b412c"/>
    <path d="M12 -12 l2 -5 l3 4 z"/><path d="M19 -12 l2 -5 l3 4 z" fill="#5b412c"/>
    <path d="M-16 -1 q-15 -9 -11 -23" stroke="#6b4a33" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <rect x="-12" y="7" width="3.5" height="9" rx="1.7" fill="#5b412c"/><rect x="8" y="7" width="3.5" height="9" rx="1.7" fill="#5b412c"/>
  </g>
</svg>`
});