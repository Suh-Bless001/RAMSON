import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql';

export async function POST(request){
    try {
        const {email,password} =await request.json();
        //checki if the user/intern is already in the system by Nmae and email
        const [rows] = await conn.query('SELECT * from intern where password=? && Email=?',[password,email]);
        if(rows.length>0){
            return NextResponse.json({ message: "Welcome!" }, { status: 200 });

        }else{
            return NextResponse.json({ message: "Invalid enteries.!" }, { status: 209 });
        }
    }catch(err){
        console.log(err);

    }
}
