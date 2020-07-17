import { Context } from "https://deno.land/x/abc@v1/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Book } from '../models/bookModel.ts';

// Create Array
let books: Book[] = [
    { id: '1', title: 'Book 1', author: 'Bill Gates', pages: 500 },
    { id: '2', title: 'Book 2', author: 'Steve Jobs', pages: 1200 },
    { id: '3', title: 'Book 3', author: 'Elon Musk', pages: 774 }
];

// Get All Books
export const get_all_books = (ctx: Context) => {
    
    return ctx.json(books, 200); // 200 http status code
};

// Get Single Book
export const get_book = (ctx: Context) => {
    
    const { id } = ctx.params;
    const book = books.find((b: Book) => b.id === id);

    if(book) {
        return ctx.json(book, 200);
    } return ctx.string('No book with that id', 404);
};

// Create a New Book
export const create_book = async (ctx: Context) => {

    const { title, author, pages } = await ctx.body();

    const id = v4.generate();
    const book = { id, title, author, pages };
    books.push(book);

    return ctx.json(book, 201);
};

// Delete a Book
export const delete_book = (ctx: Context) => {

    const { id } = ctx.params;
    const book = books.find((b: Book) => b.id === id);

    if(book) {
        books = books.filter((b: Book) => b.id !== id);
        return ctx.json(book, 200);
    } return ctx.string('No book with that id', 404);
};