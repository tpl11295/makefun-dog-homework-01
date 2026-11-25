import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "The Dog Ate My Homework".
// The dog does not apologise. It files a complaint: the homework was
// left on the floor by the bowl, and as treats go it was the most
// boring one ever served. Deadpan voice, the joke is the review,
// not the excuse — and the dog would do it again tomorrow.
const MAX_CHARS = 200;
const MESSAGE =
  "I ate it because you left it on the floor by my bowl and, frankly, it was the most boring treat you've ever served me.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
