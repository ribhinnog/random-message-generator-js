// components

const data = {
  hero: [
    "chicken who thinks it’s a knight",
    "mage who can’t remember any spells",
    "cowardly squire carrying a cursed sword",
    "dragon in disguise trying to pass as human",
    "baker who once read a book about heroism"
  ],
  quest: [
    "steal the crown of an invisible king",
    "befriend a dragon that hoards paperwork",
    "deliver a message that no one will ever read",
    "paint the town with a spell that doesn’t work",
    "stop a prophecy by arguing with it"
  ],
  location: [
    "an ancient forest where the trees whisper bad advice",
    "an underwater library guarded by bored mermaids",
    "the top of a mountain that moves every hour",
    "a borderland that shifts when observed",
    "a place that may not exist anymore"
  ],
  obstacle: [
    "a dragon who insists on giving life coaching",
    "a rival hero who forgot why they are competing",
    "an army of sentient rubber ducks",
    "the laws of physics taking a vacation",
    "a mysterious fog that causes everyone to forget their names"
  ]
};

// sentence structure

const skeleton = [
  "The ",
  { type: "hero" },
  " must ",
  { type: "quest" },
  " in ",
  { type: "location" },
  ", despite ",
  { type: "obstacle" },
  "."
];

// building the sentence

function generateSentence() {
  let result = ""; 
  // This will hold the full sentence as it’s being built piece by piece

  for (let i = 0; i < skeleton.length; i++) {
    // Loop over each element in the sentence "skeleton"

    const part = skeleton[i];
    // Grab the current piece of the skeleton

    if (typeof part === "string") {
      // If the piece is a string, it’s fixed text
      result += part;
      // Append it directly to the sentence
    } else {
      // Otherwise, the piece is an object describing a word category

      const pool = data[part.type];
      // Look up the array of possible words for this category

      const choice = pool[Math.floor(Math.random() * pool.length)];
      // Pick a random word from that array

      result += choice;
      // Append the chosen word to the sentence
    }
  }

  return result;
  // Return the fully assembled sentence
}

console.log(generateSentence());