"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import {Dialog, DialogTrigger} from "@radix-ui/react-dialog";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
const { ethers } = require("ethers");
const abi = require("../../abi.json")['abi'];





export default ({action = '/search'}) => {


    const [datas, setDatas] = useState([]);

    useEffect(() => {
    async function fetchDatas() {
        const publicKey = 111n;
        const N = 1909n;
        const marketplace = "0x71C95911E9a5D330f4D621842EC243EE1343292e";
        const provider = new ethers.JsonRpcProvider("http://localhost:8545");
        const buyerSigner = new ethers.Wallet("0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",provider);
    
        const instance = new ethers.Contract(marketplace, abi, buyerSigner);
    
        const orders = await instance.getOrders();
        
        var datas = []
                var response = [{"interval":["2023-08-22T00:00:00.000000+01:00","2023-08-23T00:00:00.000000+01:00"],"activity_seconds":23844,"inactivity_seconds":62256,"vigorous_intensity_seconds":60,"BMR_calories":1495,"net_activity_calories":716,"total_burned_calories":2211,"distance_meters":14075,"steps":19914,"avg_hr_bpm":88.8148148148,"max_hr_bpm":120,"min_hr_bpm":62,"resting_hr_bpm":57,"avg_saturation_percentage":96.8846153846,"activity_stress_duration_seconds":24060,"avg_stress_level":66,"high_stress_duration_seconds":9420,"low_stress_duration_seconds":6660,"max_stress_level":96,"medium_stress_duration_seconds":15180,"rest_stress_duration_seconds":60,"stress_duration_seconds":31260},{"interval":["2023-08-23T00:00:00.000000+01:00","2023-08-24T00:00:00.000000+01:00"],"activity_seconds":24663,"inactivity_seconds":61737,"vigorous_intensity_seconds":240,"BMR_calories":1495,"net_activity_calories":1134,"total_burned_calories":2629,"distance_meters":14617,"steps":20709,"avg_hr_bpm":84.2677916361,"max_hr_bpm":142,"min_hr_bpm":51,"resting_hr_bpm":54,"avg_saturation_percentage":92.3,"activity_stress_duration_seconds":33660,"avg_stress_level":37,"high_stress_duration_seconds":12120,"low_stress_duration_seconds":1140,"max_stress_level":97,"medium_stress_duration_seconds":6480,"rest_stress_duration_seconds":28200,"stress_duration_seconds":19740},{"interval":["2023-08-24T00:00:00.000000+01:00","2023-08-25T00:00:00.000000+01:00"],"activity_seconds":14203,"inactivity_seconds":72197,"vigorous_intensity_seconds":1020,"BMR_calories":1495,"net_activity_calories":780,"total_burned_calories":2275,"distance_meters":14143,"steps":18696,"avg_hr_bpm":91.1820448878,"max_hr_bpm":178,"min_hr_bpm":59,"resting_hr_bpm":58,"avg_saturation_percentage":92.7875,"activity_stress_duration_seconds":15420,"avg_stress_level":66,"high_stress_duration_seconds":11160,"low_stress_duration_seconds":6960,"max_stress_level":97,"medium_stress_duration_seconds":8700,"rest_stress_duration_seconds":300,"stress_duration_seconds":26820},{"interval":["2023-08-25T00:00:00.000000+01:00","2023-08-26T00:00:00.000000+01:00"],"activity_seconds":21439,"inactivity_seconds":64961,"vigorous_intensity_seconds":1140,"BMR_calories":1260,"net_activity_calories":928,"total_burned_calories":2423,"distance_meters":17176,"steps":22637,"avg_hr_bpm":78.5789839944,"max_hr_bpm":162,"min_hr_bpm":49,"resting_hr_bpm":51,"avg_saturation_percentage":92.9653379549,"activity_stress_duration_seconds":21060,"avg_stress_level":38,"high_stress_duration_seconds":9600,"low_stress_duration_seconds":6780,"max_stress_level":99,"medium_stress_duration_seconds":11100,"rest_stress_duration_seconds":28020,"stress_duration_seconds":27480},{"interval":["2023-08-26T00:00:00.000000+03:00","2023-08-27T00:00:00.000000+03:00"],"activity_seconds":360,"inactivity_seconds":15240,"vigorous_intensity_seconds":60,"BMR_calories":269,"net_activity_calories":240,"total_burned_calories":269,"distance_meters":8,"steps":12,"avg_hr_bpm":63.25,"max_hr_bpm":97,"min_hr_bpm":55,"resting_hr_bpm":57,"avg_saturation_percentage":93.1437007874,"activity_stress_duration_seconds":420,"avg_stress_level":19,"high_stress_duration_seconds":60,"low_stress_duration_seconds":2460,"max_stress_level":78,"medium_stress_duration_seconds":540,"rest_stress_duration_seconds":10200,"stress_duration_seconds":3060},{"interval":["2023-08-27T00:00:00.000000+03:00","2023-08-28T00:00:00.000000+03:00"],"activity_seconds":11899,"inactivity_seconds":74501,"vigorous_intensity_seconds":1080,"BMR_calories":840,"net_activity_calories":1495,"total_burned_calories":448,"distance_meters":1943,"steps":7413,"avg_hr_bpm":72.2126582278,"max_hr_bpm":179,"min_hr_bpm":47,"resting_hr_bpm":48,"avg_saturation_percentage":94.2,"activity_stress_duration_seconds":10680,"avg_stress_level":10680,"high_stress_duration_seconds":32,"low_stress_duration_seconds":7620,"max_stress_level":96,"medium_stress_duration_seconds":13260,"rest_stress_duration_seconds":27600,"stress_duration_seconds":26280}]

        for (let i = 0; i < orders.length; i++) {
            if (orders[i][9] != 0) {
                let encrypted = orders[i][6];
                console.log("encrypted", encrypted);
                let decrypted = await instance.decryptArray(encrypted.map(x => x * 1n), publicKey, N);

                console.log("decrypted", decrypted)



                datas.push([orders[i][4], orders[i][5], response])
            }
        }
        setDatas(datas);
    }
    fetchDatas();
    }, []);

    return (


        <>
            <div className="z-10 w-full max-w-xl px-5 xl:px-0">
                    <tbody>
                {datas.map((datas, index) => (
                <tr key={index}>
                    <td>Data type: {datas[1]} </td>

                    <td>Price: {ethers.formatEther(datas[0])}</td>

                    <td>Decrypted Purchased Data: {JSON.stringify(datas[2])}</td>
                    

                    {/* <td>{event.returnValues.someProperty}</td> Replace with your event's property */}
                </tr>
                ))}
            </tbody>

            </div>

        </>
    );
}

// const [message, setMessage] = useState<boolean>(false);
//
//
//
// const onButtonClickHandler = () => {
//     console.log("before",message)
//     setMessage(true);
//
//     console.log("after",message)
// };


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




// "use client"
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
//
//
// // eslint-disable-next-line react/display-name
// export default () => {
//
//
//
//
//     return (
//
//         <div>
//                 {/*<h1*/}
//                 {/*    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"*/}
//                 {/*    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}*/}
//                 {/*>*/}
//                 {/*    Thank you for your transaction!*/}
//
//                 {/*    <br/>*/}
//
//                 {/*    Your previous orders:*/}
//                 {/*</h1>*/}
//                 {/*<br/>*/}
//
//             <p>
//
//                 Hello test
//             </p>
//
//
//             {/*<tbody>*/}
//             {/*<tr>ciao</tr>*/}
//             {/*<td>ciao111</td>*/}
//             {/*<tr><tr></tr></tr>*/}
//             {/*</tbody>*/}
//
//             {/*<p>Hello Test ewyiagruiwabuirbawiurbawiurbwaiubr</p>*/}
//
//             <div>
//                 {/*<table>*/}
//                 {/*    <thead>fds*/}
//                 {/*    </thead>*/}
//                 {/*    <caption>Alien football stars</caption>*/}
//
//                 {/*    <tr>*/}
//                 {/*        <th scope="row">Mia Oolong</th>*/}
//                 {/*        <td>9</td>*/}
//                 {/*        <td>6,219</td>*/}
//                 {/*    </tr>*/}
//
//                 {/*</table>*/}
//
//             </div>
//
//         </div>
//
//
//
//     );
// }
//
//
//
//
// {/*<Label htmlFor="cName">Company Name</Label>*/}
// {/*<Input type="text" id="cName" placeholder="" />*/}
// {/*<Label htmlFor="dType">Data Type</Label>*/}
// {/*<Input type="text" id="dType" placeholder="Activity Data, Athlete Data" />*/}
// {/*<Label htmlFor="price">Price</Label>*/}
// {/*<Input type="number" id="price" placeholder="0.00" />*/}
// {/*    <Label htmlFor="pKey">Public Key</Label>*/}
// {/*    <Input type="number" id="pKey" placeholder="" />*/}
// {/*    <Label htmlFor="nB">buyN</Label>*/}
// {/*    <Input type="number" id="nB" placeholder="" />*/}
//
//
//
// {/*    <Link href="../transaction">*/}
//
// {/*      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 cursor-pointer">*/}
// {/*        Submit*/}
// {/*      </button>*/}
//
// {/*    </Link>*/}
//
//
// {/*<form onSubmit={handleFormSubmit}>*/}
// {/*  <label>*/}
// {/*    Username:*/}
// {/*    <input*/}
// {/*        type="text"*/}
// {/*        name="username"*/}
// {/*        value={formData.username}*/}
// {/*        onChange={handleInputChange}*/}
// {/*    />*/}
// {/*  </label>*/}
// {/*  /!* other form fields *!/*/}
// {/*  <button type="submit">Submit</button>*/}
// {/*</form>*/}