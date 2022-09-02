import { output } from "./awaiting.mjs";
export function outputPlusValue(value) { return output + value }

console.log(outputPlusValue(100));
setTimeout(() => console.log(outputPlusValue(100)), 1000);