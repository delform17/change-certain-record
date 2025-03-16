import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState,useEffect } from "react";

let countTheRecord = 0;
let maxLOfArr = null;

const listsOfPassangersSits = [
        
    {id: 1,name: "Place1",PlaceID: 1915,},
    {id: 2,name: "Place2",PlaceID: 1920,},
    {id: 3,name: "Place3",PlaceID: 1925,},
    {id: 4,name: "Place4",PlaceID: 1930,},
    {id: 5,name: "Place5",PlaceID: 1935,},
    {id: 6,name: "Place6",PlaceID: 1940,},
    {id: 7,name: "Place7",PlaceID: 1945,},
    {id: 8,name: "Place8",PlaceID: 1950,},
];

maxLOfArr = listsOfPassangersSits.length;

function UpdateState() {
    
    const [myRow, setMyRow] = useState(listsOfPassangersSits);

    function setRandomNumber(){
        randomNum = Math.floor(Math.random() * 5);
        
    }

    function countTheNumber(){
        const countAndUpdate = myRow.map(actualRow => {
                
            //console.log(countTheRecord);
            
            if(actualRow.id === countTheRecord){              
                //if(actualRow.PlaceID != 0){    
                setRandomNumber();
                console.log("Place is enable");
                
                return {...actualRow, PlaceID : ' '}
            }
            
        
        return actualRow;
    });
    
    //maxLOfArr--;
    maxLOfArr =  maxLOfArr - randomNum; 
    
    setMyRow(countAndUpdate);
    console.log(countTheRecord);
    countTheRecord = countTheRecord + 1;
    }
  
    useEffect(() => {
      // create a interval and get the id
      const myInterval = setInterval(() => {
        //setMytime((prevTime) => prevTime + 1);
        countTheNumber();
      }, 1000);
      // clear out the interval using the id when unmounting the component
      return () => clearInterval(myInterval);
    }, [myRow]);
  
    return <div>
    
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
  }

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<UpdateState />)
