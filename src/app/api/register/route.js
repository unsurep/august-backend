import { NextResponse } from "next/server"

export async function GET(){
    return new NextResponse(JSON.stringify({msg:' this is api register page'}))

}

// , {status:200}