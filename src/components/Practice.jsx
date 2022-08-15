import React from "react";
import dorothy from"../assets/Image/dorothy.jpeg";

function Practice(){
    return(
        <div className="flex justify-center items-center h-screen">
<div className="shadow-md">
<div className="h-60 overflow-hidden w-96">
    <img src={dorothy} alt="" />
</div>
<div className="p-5">
<div className="flex justify-between">
    <h3 className="font-bold">DELL</h3>
    <h6 className="font-bold">GHC 6000</h6>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>
</div>
    );
}

export default Practice;