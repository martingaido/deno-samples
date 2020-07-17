/* Run: deno run --allow-read readfile.ts */

/* Option a */
const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));

/* Option b */
const myTextFile = await Deno.readTextFile('readme.txt');
console.log(myTextFile);
