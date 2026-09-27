import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const patients = await prisma.patient.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(patients);
}

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; fullName?: string };

  if (!body.email?.trim() || !body.fullName?.trim()) {
    return NextResponse.json(
      { error: "email y fullName son obligatorios" },
      { status: 400 },
    );
  }

  const patient = await prisma.patient.create({
    data: {
      email: body.email.trim(),
      fullName: body.fullName.trim(),
    },
  });

  return NextResponse.json(patient, { status: 201 });
}
