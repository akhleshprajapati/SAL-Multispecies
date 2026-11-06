/* =====================================================================
   SAL · TREE DATA FILE — [TREE NAME]
   HOW TO USE:
   1) Copy this file as  trees/your_tree.js   (small letters, underscore)
   2) Fill in the fields below (delete any you don't need)
   3) In website.html, add:  <script src="trees/your_tree.js"></script>
   Done — it appears in Search, Explore and gets its own page.
===================================================================== */
SAL.addTree({
  id: 'your-tree',                 // unique, lowercase, hyphens ok
  english: 'Your Tree',            // main display name
  scientific: 'Genus species',
  glyph: '🌳',                     // emoji used in search & explore cards

  names: [
    { lang:'English',    values:['Your Tree'] },
    { lang:'Hindi',      values:['नाम'] },
    // add as many languages as you like:
    // { lang:'Tamil',   values:['பெயர்'] },
  ],

  intro: [
    'First paragraph shown at the top of the tree page.',
    'Optional second paragraph.'
  ],

  stories: {
    scientific: ['Paragraph 1 about botany, ecology, behaviour…'],
    cultural:   ['Paragraph 1 about festivals, uses, beliefs, crafts…'],
    historical: ['Paragraph 1 about trade, old records, origin of names…']
  },

  species: [
    { id:'resident-one', name:'Resident Name', sci:'Scientific name', type:'Bird',
      part:'Canopy',                 // where on the tree it lives
      pos:{x:50, y:20},              // marker position on the art (0–100, 0–100)
      zoom:2.5,                      // how close the camera zooms (2–3.5)
      icon:'🐦',                     // or  img:"photos/bird.jpg"
      tint:'#dce8ef',                // soft background colour for its portrait
      stories:{
        scientific:['Its science story…'],
        cultural:['Its cultural story…'],
        historical:['Its historical story…']
      }},
    // copy the block above for each extra resident
  ],

  /* Optional: paste an <svg class="tree" viewBox="0 0 600 900"> … </svg>
     illustration here (same coordinate box as the fishtail palm makes
     marker positioning easy). Delete this field for a generic tree. */
  // art: `<svg class="tree" viewBox="0 0 600 900"> … </svg>`
});