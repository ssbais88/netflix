import Dashboard from "@/app/models/dashboard";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  mongoose.connect(process.env.MONGO_URL || "mongodb://0.0.0.0:27017/netflix");
  const body = await req.json();
  const createDashboard = await Dashboard.create(body);
  return Response.json(createDashboard);
}

export async function GET() {
  mongoose.connect(process.env.MONGO_URL || "mongodb://0.0.0.0:27017/netflix");
  return Response.json(await Dashboard.find());
}
