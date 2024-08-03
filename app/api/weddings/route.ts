import { getWeddings } from "db/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getWeddings();
    return NextResponse.json({
      ...data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error,
      },
      { status: 500 }
    );
  }
}

// export async function POST() {
//   const data = await createNewWedding();
//   return NextResponse.json({
//     message: "Wedding created successfully",
//     data,
//   });
// }
