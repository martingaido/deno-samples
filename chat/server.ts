/* Run: deno run --allow-read --allow-net server.ts */

import { serve } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";
import { chatConnection } from './ws/chatroom.ts';

const server = serve({ port: 8080 });
console.log('http://localhost:8080');

for await (const req of server) {

    // Define main route
    if(req.url === '/') {
        req.respond({
            status: 200,
            body: await Deno.open('./public/index.html')
        });
    }

    // Accept WebSocket Connection
    if(req.url === '/ws') {
        if(acceptable(req)) {
            acceptWebSocket({
                conn      : req.conn,
                bufReader : req.r,
                bufWriter : req.w,
                headers   : req.headers,
            })
            .then(chatConnection)
        }
    }
    
}