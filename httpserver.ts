/* Run: deno run --allow-net httpserver.ts */

import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3000 });
console.log('Listening for request on port 3000');

for await (const req of server) {
    
    console.log('--- Request Made --- @', new Date());

    const url = req.url;
    req.respond({ body: `Hello, you visited ${url}` });
}