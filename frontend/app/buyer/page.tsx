"use client"
import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import axios from "axios";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Home() {

  const handleButtonClick = async () => {
    // retrieve the user_id from local storage

    const user_id = localStorage.getItem('user_id')!.replace(/['"]+/g, '')
    
    console.log("button clicked");
    console.log("Before calling getData",user_id!.replace(/['"]+/g, ''));

    try {
      const response = await axios.get("http://localhost:3000/api/getData", {
        params: { user_id }, // Pass the user_id as a parameter to the API request
      });
  
      const data = response.data; // Access the data from the response
  
      console.log("Data from getData", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      {/* <a
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">
          Introducing Precedent
        </p>
      </a> */}
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Buyer Form
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Fill in details to place a buy order
      </p>
      <div
        className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >

       

        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="cName">Company Name</Label>
      <Input type="text" id="cName" placeholder="" />
      <Label htmlFor="dType">Data Type</Label>
      <Input type="text" id="dType" placeholder="Activity Data, Athlete Data" />
      <Label htmlFor="price">Price</Label>
      <Input type="number" id="price" placeholder="0.00" />
          <Label htmlFor="pKey">Public Key</Label>
          <Input type="number" id="pKey" placeholder="" />
          <Label htmlFor="nB">buyN</Label>
          <Input type="number" id="bN" placeholder="" />





          {/*Need to add submit functionality here*/}
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">
            Submit
          </button>

          {/*<div className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">*/}
          {/*  <Input type="submit" value="Submit"/>*/}
          {/*</div>*/}

    </div>


        {/* <a
          className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          href={DEPLOY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-4 w-4 group-hover:text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L20 20H4L12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Deploy to Vercel</p>
        </a> */}
        {/* <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="https://github.com/steven-tey/precedent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>
            <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
            <span className="font-semibold">{nFormatter(stars)}</span>
          </p>
        </a> */}
      </div>
    </div>
    {/* <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
      {features.map(({ title, description, demo, large }) => (
        <Card
          key={title}
          title={title}
          description={description}
          demo={
            title === "Beautiful, reusable components" ? (
              <ComponentGrid />
            ) : (
              demo
            )
          }
          large={large}
        />
      ))}
    </div> */}
  </>
);
}
