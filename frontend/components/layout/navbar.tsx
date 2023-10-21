"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import UserDropdown from "./user-dropdown";
import { ConnectToTerraButton } from '@tryterra/terra-ui'
import axios from "axios";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function NavBar() {
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const searchParams = useSearchParams()
  const scrolled = useScroll(50);

  const [isSignedIn, setIsSignedIn] = useState(false);
  // Use the useLocalStorage hook to store and retrieve the user_id
  const [user_id, setUser_id] = useLocalStorage<String | null>('user_id', null);
  const [reference_id, setReference_id] = useLocalStorage<String | null>('reference_id', null);



  const handleConnectToTerra = async () => {
    try {
      // Make an API request to get the URL
      await axios.get("http://localhost:3000/api/generateWidgetSession").then((response) => {
        const url = response.data.url;
        const user_id = new URL(url).searchParams.get("user_id");
        const reference_id = new URL(url).searchParams.get("reference_id");
        setUser_id(user_id);
        setReference_id(reference_id);
        console.log("in handleclick", user_id);
        window.location.href = url;
      });
      ;
      // Set the state to true
      setIsSignedIn(true);
    } catch (error) {
      console.error("Error connecting to Terra:", error);
    }
  };

  const handleRetrieveUserId = () => {

    // Retrieve the user_id from url
    const user_id = searchParams.get('user_id');
    const reference_id = searchParams.get('reference_id');

    setUser_id(user_id);
    setReference_id(reference_id);
  }


  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>DataPlace</p>
          </Link>
          <div>
            <ConnectToTerraButton onClick={handleConnectToTerra} />
          </div>
          {/* if it's signed show the button
           */}
          {/* {isSignedIn && ( */}
            <button
              onClick={handleRetrieveUserId}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Retrieve User ID
            </button>
            {/* )} */}
        </div>
      </div>
    </>
  );
}
