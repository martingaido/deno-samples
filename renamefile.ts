/* Run:  Run: deno run --allow-write renamefile.ts */

await Deno.rename('file_x.txt', 'file_y.txt');
await Deno.remove('file_y.txt');