/* Run: deno run --allow-write writefile.ts */

const encoder = new TextEncoder();
const text = encoder.encode('Hello World!');

await Deno.writeFile('helloworld.txt', text);