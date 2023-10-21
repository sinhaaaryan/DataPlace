"use client";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  // Use the useLocalStorage hook to retrieve the user_id
  // const [user_id] = useLocalStorage('user_id', null);

  const handleRetrieveUserId = () => {
    // if (user_id) {
    //   console.log('User ID:', user_id);
    // } else {
    //   console.log('User ID not found in local storage');
    // }
  }

  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://github.com/sinhaaaryan/DataPlace"
          target="_blank"
          rel="noopener noreferrer"
        >
          DataPlace Team @ HackHarvard
        </a>
      </p>
      <button
        onClick={handleRetrieveUserId}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Retrieve User ID
      </button>
    </div>
  );
}