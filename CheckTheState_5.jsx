import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from "react";

let sentence
let selectedNumber

function CheckStateOfNumber(){

    const [specificNumber, setSpecificNumber] = useState(0);
    const [message, setSpecificMessage] = useState(false);

    function updateTheNumber(){
        sentence =  setInterval(() => {
            
            setSpecificNumber(Math.floor(Math.random() * 10));
            console.log(specificNumber);
        },2000)

        if(specificNumber % 2 === 0)
        {
            console.log("Even");
            setSpecificMessage(true);
        }else{
            setSpecificMessage(false);
        }
    }

    useEffect(() => {
        
        updateTheNumber();

        return () => clearInterval(sentence);
    },[specificNumber]);

    return(
        <div>
            <p>{"The rundom number :" +specificNumber}</p>
            <p>{"Even / noteven :" +message}</p>
        </div>
    )
}


const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<CheckStateOfNumber />)
