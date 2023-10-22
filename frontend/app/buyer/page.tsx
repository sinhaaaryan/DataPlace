"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import {Dialog, DialogTrigger} from "@radix-ui/react-dialog";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";





export default ({action = '/search'}) => {

  const [message, setMessage] = useState<boolean>(false);



  const onButtonClickHandler = () => {
   console.log("before",message)
    setMessage(true);

    console.log("after",message)
  };

  return (


    <>
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
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
              <Input type="number" id="nB" placeholder="" />




    <br/>

            <Link href="../transaction">
            <button>
                Submit
            </button>

            </Link>



          {/*<Dialog>*/}
          {/*  <DialogTrigger className=" bg-blue-500  ">Submit</DialogTrigger>*/}
          {/*  <DialogContent>*/}
          {/*    <DialogHeader>*/}
          {/*      <DialogTitle className="text-black">Thank you!</DialogTitle>*/}
          {/*      <DialogDescription>*/}
          {/*        Your transaction has been sent.*/}
          {/*      </DialogDescription>*/}
          {/*    </DialogHeader>*/}
          {/*  </DialogContent>*/}
          {/*</Dialog>*/}






    </div>

      </div>




    </div>

  </>
);
}




{/*<Label htmlFor="cName">Company Name</Label>*/}
{/*<Input type="text" id="cName" placeholder="" />*/}
{/*<Label htmlFor="dType">Data Type</Label>*/}
{/*<Input type="text" id="dType" placeholder="Activity Data, Athlete Data" />*/}
{/*<Label htmlFor="price">Price</Label>*/}
{/*<Input type="number" id="price" placeholder="0.00" />*/}
{/*    <Label htmlFor="pKey">Public Key</Label>*/}
{/*    <Input type="number" id="pKey" placeholder="" />*/}
{/*    <Label htmlFor="nB">buyN</Label>*/}
{/*    <Input type="number" id="nB" placeholder="" />*/}



{/*    <Link href="../transaction">*/}

{/*      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">*/}
{/*        Submit*/}
{/*      </button>*/}

{/*    </Link>*/}


{/*<form onSubmit={handleFormSubmit}>*/}
{/*  <label>*/}
{/*    Username:*/}
{/*    <input*/}
{/*        type="text"*/}
{/*        name="username"*/}
{/*        value={formData.username}*/}
{/*        onChange={handleInputChange}*/}
{/*    />*/}
{/*  </label>*/}
{/*  /!* other form fields *!/*/}
{/*  <button type="submit">Submit</button>*/}
{/*</form>*/}