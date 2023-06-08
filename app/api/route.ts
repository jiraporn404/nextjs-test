/*import postgres from "postgres";
import { NextResponse } from 'next/server';

const sql = postgres({ ssl: true });

export async function GET() {

    const data = await sql`SELECT * FROM test`;
    return NextResponse.json(data);
}*/
import { Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { users } from '../db/schema';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/drizzle';
//import { db } from '../../drizzle';

//const pool = new Pool({ connectionString: 'postgres://jiraporn404:sTGxZPAu50QB@ep-dawn-sound-199422-pooler.us-east-2.aws.neon.tech/neondb' });

export async function GET() {
    //const db = drizzle(pool)
    const result = await db.select().from(users);
    return NextResponse.json({ data: result });
}
export async function POST(request: NextRequest) {
    //const db = drizzle(pool)
    try {
        const req = await request.json();
        const result = await db
            .insert(users)
            .values({
                fullName: req.fullname,
                phone: req.phone,
            }).returning();
        console.error(result);
        return NextResponse.json({ message: 'Inserting data:', data: result });
    } catch (error) {
        console.error('Error inserting data:', error);
        return NextResponse.error();
    }
}