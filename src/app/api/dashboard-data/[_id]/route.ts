import Dashboard from "@/app/models/dashboard";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, context: any) {
  const body = await req.json();
  const { params } = context;
  const updatedObj = await Dashboard.updateOne(
    { _id: params._id },
    { $set: body }
  );
  return NextResponse.json({ data: updatedObj });
}

export async function PUT(req: NextRequest, context: any) {
  const body = await req.json();
  console.log("Body ====> ", body);
  const { params } = context;
  const updatedObj = await Dashboard.updateOne(
    { _id: params._id },
    { $set: body }
  );
  return NextResponse.json({ data: updatedObj });
}
