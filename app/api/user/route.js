import { NextResponse } from "next/server";

export async function GET(req) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // const { searchParam } = new URL(req.url);
  // const mysearchparam = searchParam.get("mysearchparam");
  // console.log("--------->", mysearchparam);

  const data = await res.json();

  return NextResponse.json({ data });
}
