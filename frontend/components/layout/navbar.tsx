"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { ConnectToTerraButton } from '@tryterra/terra-ui'
import axios from "axios";
import useLocalStorage from "@/lib/hooks/use-local-storage";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  // Use the useLocalStorage hook to store and retrieve the user_id
  const [user_id, setUser_id] = useLocalStorage<String | null>('user_id', null);

  const handleConnectToTerra = async () => {
    try {
      // Make an API request to get the URL
      await axios.get("http://localhost:3000/api/generateWidgetSession").then((response) => {
        const url = response.data.url;
        const user_id = new URL(url).searchParams.get("user_id");
        setUser_id(user_id);
        console.log("in handleclick", user_id);
        window.location.href = url;
      });
      ;








    } catch (error) {
      console.error("Error connecting to Terra:", error);
    }
  };

  return (
    <>
      <SignInModal />
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
        </div>
      </div>
    </>
  );
}
