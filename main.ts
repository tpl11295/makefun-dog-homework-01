import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework entry — one line, under 200 characters,
// in which a dog explains why the homework got eaten.
// Judge brief: funniest line head to head.
// Chosen line: the dog's voice is deadpan, the homework is "the most
// boring treat" — a complaint about the homework itself, not an excuse.
const LINE =
  "I ate it because you left it on the floor by my bowl and, frankly, it was the most boring treat you've ever served me.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
