import { useState } from "react";

function mystudy(){
    const[num,]=useState(0)
    return(
        <div>
            <h3>This is my react app!!</h3>
            <hr />
            <p>Num is {num}</p>

        </div>
    );
}