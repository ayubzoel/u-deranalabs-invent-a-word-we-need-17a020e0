// Why this coinage: everyone has replayed a lost argument under running
// water and finally delivered the perfect reply — hours too late, to an
// audience of tiles. "shower" + "argument" blends into a word English could
// have grown on its own: sayable, spellable, memorable, and the gap is one
// every reader recognises at once. The definition lands in one reading.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "showergument (n.) The argument you finally win in the shower, hours after losing it in real life.";

// Self-check the competition gate before writing: 1 to 140 characters in
// Unicode code points, a single line, and not only white space.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry is ${codePoints} code points, must be 1-140`);
}
if (ENTRY.trim().length === 0 || /[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
