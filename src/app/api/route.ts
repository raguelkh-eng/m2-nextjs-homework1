

// support with HTTP method
// GET, POST, PUT,PATCH, DELETE, UPDATE, OPTION, HEADER

import { NextRequest, NextResponse } from "next/server"
// NextResponse, NextRequest 

export function GET(req:NextRequest){
  
  const cookies = req.cookies.get('koko-secret');
  const person = {
    "name": "yaya",
    "age":18,
    "dob":"11-08-2005"
    }
  return NextResponse.json(cookies);
}


