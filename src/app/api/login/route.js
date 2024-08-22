import { NextResponse } from "next/server"


// USE THIS 
export async function GET(){
    return new NextResponse(JSON.stringify({msg:'this is api login page'}))

}

// export const GET=async ()=>{
//     return new NextResponse(JSON.stringify({msg: 'i am enjoying the class'}), {status:200})

// }