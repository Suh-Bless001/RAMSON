import { NextResponse } from "next/server";
export function GET(){
    return NextResponse.json("products list");
}
export function POST(){
    return NextResponse.json('create product');
}