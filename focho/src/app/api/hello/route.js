// src/app/api/hello/route.js
import { NextResponse } from 'next/server';
import { conn } from '@/libs/mysql';

export async function GET(request,{params}) {
   const [rows] = await conn.query('SELECT * from intern where Name=? && Email=?',["focho ramsy","fochomukomr@gmail.com"]);
    console.log(rows);
  return NextResponse.json({ rows});
}
