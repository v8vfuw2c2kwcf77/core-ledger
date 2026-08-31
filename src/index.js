export function coreLedger(input, opts = {}) {
  const sep = opts.sep ?? ",";
  return String(input)
    .split(sep)
    .map((part) => part.trim())
    .filter(Boolean);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const sample = process.argv.slice(2).join(" ") || "alpha, beta, ,gamma";
  console.log(coreLedger(sample));
}
