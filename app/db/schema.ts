import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('fullname'),
    phone: varchar('phone', { length: 256 }),
});

export const users2 = pgTable('users2', {
    id: serial('id').primaryKey(),
    fullName: text('fullname'),
    age: varchar('age', { length: 256 }),
});