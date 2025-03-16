import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

let randomNum = null;
let maxLOfArr = null;

const listsOfPassangersSits = [
        
    {id: 156,name: "Place1",PlaceID: 1915,},
    {id: 237,name: "Place2",PlaceID: 1920,},
    {id: 397,name: "Place3",PlaceID: 1925,},
    {id: 425,name: "Place4",PlaceID: 1930,},
    {id: 158,name: "Place5",PlaceID: 1935,},
    {id: 249,name: "Place6",PlaceID: 1940,},
    {id: 321,name: "Place7",PlaceID: 1945,},
    {id: 430,name: "Place8",PlaceID: 1950,},
];

maxLOfArr = listsOfPassangersSits.length;
function UpdateTheLastRecord(){
    
    function setRandomNumber(){
        randomNum = Math.floor(Math.random() * 5);
        
    }
    
    const [myRow, setMyRow] = useState(listsOfPassangersSits);
    
    
        function UpdateRandomRows(){
            let countTheRecord = 0;
            const countAndUpdate = myRow.map(actualRow => {
                countTheRecord = countTheRecord + 1;
                //console.log(countTheRecord);
                if(countTheRecord === maxLOfArr){
                    console.log("Found end of array");
                if(!isNaN(actualRow.PlaceID)){              
                    //if(actualRow.PlaceID != 0){    
                    setRandomNumber();
                    console.log("Place is enable");
                    
                    return {...actualRow, PlaceID : ''}
                }
                
            }
            return actualRow;
        });
        //maxLOfArr--;
        maxLOfArr =  maxLOfArr - randomNum; 
        if(maxLOfArr < 0)
        {
            maxLOfArr = listsOfPassangersSits.length;
        }
        
        setMyRow(countAndUpdate);
        console.log(maxLOfArr);
        
}
return(
        <div>
            <button onClick={UpdateRandomRows}>Update Row</button>
            <ul>
            {
                myRow.map((row, index) => (
                    <li key={index}>
                        <span> Name : {row.name}</span>
                        <span> PlaceID : {row.PlaceID}</span>
                    </li>
                    
                ))
            }
            </ul>
        </div>
    )
}

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<UpdateTheLastRecord />)
