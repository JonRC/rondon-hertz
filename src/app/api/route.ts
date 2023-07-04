import { appendFile, appendFileSync } from "fs";
import { NextResponse } from "next/server";
import {parse} from 'querystring'

export async function GET(request: Request) {


  console.log({
    query: parse(request.url.split('?')[1]),
  })

  const query = parse(request.url.split('?')[1])

  appendFileSync('log.txt', query.temperature as string + '\n')
  

  return NextResponse.json({response: 'Javascript >>>>>>>>>>> Java'})
}
