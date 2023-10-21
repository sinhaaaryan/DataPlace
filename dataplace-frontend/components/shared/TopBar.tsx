"use client"

import { ModeToggle } from "@/components/ui/mode-toggle";
import { ConnectToTerraButton } from "@tryterra/terra-ui";
import axios from "axios";
import { Axis3dIcon, Link } from "lucide-react";
import Image from "next/image";
import { ThemeProvider } from "../theme-provider";
import { useSearchParams } from 'next/navigation'
import useTerra from "@/hook/useTerra";
import { useContext } from "react";
import TerraContext from "@/context/terra-context";


const TopBar = () => {


  const searchParams: URLSearchParams = useSearchParams()

  // const terra = useTerra();


  async function handleClick() {

    await axios.get("http://localhost:3000/api/testt").then((res) => {
      console.log(res);
      // terra
      //   .getActivity({
      //     userId: searchParams.get("user_id")||"",
      //     startDate: new Date("2022-01-01"),
      //     endDate: new Date("2023-05-31"),
      //     toWebhook: false,
      //     withSamples: false,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   });

    })}

    return (
      <nav className='bg-black flex justify-between'>
        {/* <Link href='/' className='flex items-center gap-4'>
        <Image src='/public/vercel.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>DataPlace</p>
      </Link> */
        }
        <p>DataPlace</p>



        <div className="flex">
          <ConnectToTerraButton onClick={async () => {
            const url = (await axios.get("http://localhost:3000/api/generateWidgetSession")).data.url
            window.location = url
          }} />

          {/* button to test the method
         */}
          <button onClick={handleClick}>
            Click me
          </button>

          <ModeToggle />
        </div>
      </nav>
    )
  }

  export default TopBar;