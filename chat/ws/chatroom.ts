import { WebSocket, isWebSocketCloseEvent } from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let sockets = new Map<string, WebSocket>();

interface BroadcastObj {
    name: string,
    mssg: string
}

// Broadcast events to all clients
const broadcastEvent = (obj: BroadcastObj) => {

    sockets.forEach((ws: WebSocket) => {
        ws.send(JSON.stringify(obj));
    });
}

const chatConnection = async (ws: WebSocket) => {
    
    console.log('--- New Socket Connection ---');

    // Add new ws connection to map
    const uid = v4.generate();
    sockets.set(uid, ws);

    // Debug 'sockets', disable in production
    console.log(sockets);

    for await (const event of ws) {

        console.log(event);

        // Delete Socket if connection closed
        if(isWebSocketCloseEvent(event)) {
            sockets.delete(uid);
        }

        // Create Event Object if 'event' is string
        if(typeof event === 'string') {
            let evObj = JSON.parse(event);
            broadcastEvent(evObj);
        }
    }
}

export { chatConnection };