# Random Fantasy Quest Generator

This is a tiny JavaScript project that generates slightly absurd fantasy quest prompts by randomly stitching together heroes, quests, locations, and obstacles. The goal is not epic coherence so much as playful contradiction: brave quests undertaken by the wrong people, in the wrong places, for reasons that may not survive even mild scrutiny.

Right now, the project lives entirely in JavaScript and outputs a single randomized quest sentence to the console. It’s intentionally minimal, serving as a foundation rather than a finished toy.

## How It Works

The generator works by combining a sentence “skeleton” with a set of word pools. The skeleton is an array made up of fixed strings and placeholder objects that describe what kind of word should go in that spot.

When `generateSentence()` runs, it walks through the skeleton from left to right. If it encounters a string, it adds it directly to the sentence. If it encounters a placeholder, it looks up the corresponding array in data, randomly selects one entry, and inserts it instead. Once every part of the skeleton has been processed, the completed sentence is returned.

There’s no memory, no state, and no interface. Each call is independent, and every sentence is a fresh roll of the dice.

## Running the Project

You can run this anywhere JavaScript runs.

If you’re using Node.js, drop the file into a directory and run:

```
node gen.js
```

If you’re experimenting in the browser, you can paste the code into a script tag or your dev tools console and call `generateSentence()` directly.

## Project Intent and Future Expansion

This is meant to be a playful starting point rather than a complete system. The next planned step is adding a small DOM-based interface so quests appear on the page instead of the console. That layer may introduce some intentionally mischievous behavior, such as buttons that don’t quite do what you expect, text that mutates, or UI elements that argue with the user.

Longer-term expansion ideas include adding more variations, nested modifiers, tone shifts, or rule-breaking logic that bends the generator’s own structure. None of that is here yet, by design.

## Why This Exists

Because fantasy generators don’t need to be serious to be useful, and small projects are a good place to let weird ideas breathe. This one is deliberately lightweight, readable, and easy to extend without committing to a big framework or architecture too early.

If nothing else, it reliably produces quests that probably shouldn’t be attempted, which feels appropriate.