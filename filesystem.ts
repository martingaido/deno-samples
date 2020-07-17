/* Run: deno run --allow-read --allow-write --unstable filesystem.ts */

// Read a JSON File
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson('names.json');
console.log(jsonObj);

// Write a JSON File
const articles = [
    { title: 'The First Article', author: 'Steve Jobs', year: 2000 },
    { title: 'The Second Article', author: 'Bill Gates', year: 2010 },
    { title: 'The Last Article', author: 'Elon Musk', year: 2050 }
];

await writeJson('articles.json', articles, { spaces: 2 });
console.log('JSON File Created!')
