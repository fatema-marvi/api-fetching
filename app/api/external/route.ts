
import { NextResponse } from "next/server";

const EXTERNAL_API_URL ="https://jsonplaceholder.typicode.com/posts"  //variable where we have data which is dynamic

//now to access get function for api
export async function GET() {
    try {
const response = await fetch (EXTERNAL_API_URL)

if(!response.ok){                 //ok is a method of response to check code is ok
    return NextResponse.json(
        { success:false,message:"Failed Fetch the data from the API"},
        { status:response.status}
    )
}
const data = await response.json()
return NextResponse.json({success:true,data})
    } catch (error:any) {
        return NextResponse.json(
            {
                success:false, 
                message: "get the errors",
                error:error.message
            }
        )

    }
    
}