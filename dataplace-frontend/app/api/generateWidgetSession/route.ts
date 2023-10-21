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
    const resp = await terra.generateWidgetSession({
        referenceID: "HelloHarvard",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:3000",
        authFailureRedirectUrl: "http://localhost:3000"
    })
    return NextResponse.json({ url: resp.url }, { status: 200}); 
}