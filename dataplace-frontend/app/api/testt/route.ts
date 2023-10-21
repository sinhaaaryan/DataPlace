import { NextRequest, NextResponse } from "next/server";
import { useContext } from "react";
import Terra from "terra-api";
import TerraContext from "@/context/terra-context";

// const terra = useContext(TerraContext);

const terra = new Terra(
    process.env.TERRA_DEV_ID ?? "",
    process.env.TERRA_API_KEY ?? "",
    process.env.TERRA_WEBHOOK_SECRET ?? ""
);

export async function GET(request: NextRequest) {
  terra
  .getAthlete({
    userId: "a7444bbb-01d1-4fbf-ad44-e4cd90bdc16c",
    toWebhook: false,
  })
  .then((res) => {
    console.log("ATHLETEEEE",res);
  });

  const resp = terra
  .getActivity({
    userId: "a7444bbb-01d1-4fbf-ad44-e4cd90bdc16c",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-01-31"),
    toWebhook: false,
    withSamples: false,
  })
  .then((res) => {
    console.log("ACTIVITYYYY",res);
  });
    return NextResponse.json({ url: resp }, { status: 200}); 
}