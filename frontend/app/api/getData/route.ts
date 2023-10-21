
import { NextRequest, NextResponse } from "next/server";
import { use, useContext } from "react";
import Terra from "terra-api";

// const terra = useContext(TerraContext);

const terra = new Terra(
  process.env.TERRA_DEV_ID ?? "",
  process.env.TERRA_API_KEY ?? "",
  process.env.TERRA_WEBHOOK_SECRET ?? ""
);
export async function GET(request: NextRequest) {

  const user_id: string = request.nextUrl.searchParams.get("user_id") ?? "";
  console.log(user_id);
  // terra
  //   .getAthlete({
  //     userId: user_id,
  //     toWebhook: false,
  //   })
  //   .then((res) => {
  //     console.log("ATHLETEEEE", res);
  //   });
  try {
    const activityResponse = await terra.getDaily({
      userId: user_id,
      startDate: new Date("2023-07-01"),
      endDate: new Date("2023-08-31"),
      toWebhook: false,
      withSamples: false,
    });

    // terra.get

    // const header = request.headers['terra-signature']
    // console.log("ACTIVITYYYY", activityResponse);
    // try{

    //   // Object.
    //   // activityResponse.data.forEach((activity) => {
    //   //   activity.active_durations_data.inactivity_seconds !== 0;
    //   // })
    // }
    // catch (error) {
    //   console.error("Error fetching activity:", error);
    //   return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 });
    // }
   

    return NextResponse.json({ activity: activityResponse }, { status: 200 });
  } catch (error) {
    console.error("Error fetching activity:", error);
    return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 });
  }
}