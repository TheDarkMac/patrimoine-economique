import { useState } from "react";
import { read } from "../index";
function Patrimoine(){
   
    const promise = fetch("../data.txt").then(data => data.json()).catch();
    const result = promise
    return <>
    {read}
    </>
}

export default Patrimoine;