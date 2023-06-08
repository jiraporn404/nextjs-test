import { NextResponse } from "next/server";
import postgres from "postgres";

const sql = postgres({ ssl: true });

export async function POST(req, res) {
    const { email, firstname, lastname, password } = await req.json();
    try {
        await sql`
            INSERT INTO username 
            (email, firstname, lastname, password)
            VALUES 
            (${email}, ${firstname}, ${lastname}, ${password})`
        return NextResponse.json({ message: 'User inserted successfully' });
    } catch (error) {
        console.error("Error inserting user:", error);
        return NextResponse.json({ message: 'Internal server error' });
    }
}

export async function GET(req, res) {
    return new Response("hello world");
}
