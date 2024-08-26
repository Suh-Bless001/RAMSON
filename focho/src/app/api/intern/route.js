import { NextResponse } from "next/server";
import { conn } from '@/libs/mysql';
export async function POST(request){
    try {
        const {name,email,password,role} =await request.json();
        //checki if the user/intern is already in the system by Nmae and email
        const [rows] = await conn.query('SELECT * from intern where Name=? && Email=?',[name,email]);
        if(rows.length>0){
            return NextResponse.json({ message: "Intern already exist!" }, { status: 209 });

        }else{
            // const res= await conn.query("insert into intern(Name,Email,password,role) set ?",
        //     {name,email,password,role}
        // );
        const sql = 'INSERT INTO intern (Name, Email, password, role) VALUES (?, ?, ?, ?)';
        const values = [name, email, password, role];
        const [res] = await conn.query(sql, values);
        console.log(res);
        
          if(res.affectedRows>0){
              return NextResponse.json({ message: "Intern has been successfully entered!" }, { status: 200 });
          } else {
              return NextResponse.json({ message: "Please, try again." }, { status: 500 });
          }
               
        }


        
    } catch (error) {
        console.log(error);
        
    }
} 
export async function GET(){
    try {
        const res = await conn.query('SELECT * from intern ');
        return NextResponse.json(res);
        
    } catch (error) {
        return NextResponse.json(
            {message:error.message,},
            {status: 500,},
        );
    }
}