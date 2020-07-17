/* Run: deno run --allow-net --allow-read restapi.ts */

import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";
import { get_all_books, get_book, create_book, delete_book } from './controllers/bookController.ts';

const app = new Application();

// Expose Static Files
app.static('/', './public');

// Define Routes
app.get('/', async (ctx: Context) => {

    await ctx.file('./public/index.html');
});

// Chained Routes
app
    .get('/books', get_all_books)
    .get('/books/:id', get_book)
    .post('/books', create_book)
    .delete('/books/:id', delete_book)

// Listen to port 8080
app.start({ port: 8080 });