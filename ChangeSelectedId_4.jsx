import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

let LOfArr = null;
let amountOfFreePlaces = 0;

const listsOfPassangersSits = [
    {
        id: 1,
        name: "Place1",
        PlaceID: 1915,
    },
    {
        id: 2,
        name: "Place2",
        PlaceID: 1920,
    },
    {
        id: 3,
        name: "Place3",
        PlaceID: 1925,
    },
    {
        id: 4,
        name: "Place4",
        PlaceID: 1930,
    },
];

LOfArr = listsOfPassangersSits.length;

function ChangeTheOtherRecord(){

    const [place, setActPLace] = useState(listsOfPassangersSits);
    
    function UpdateActualPlaces(position){
        
        console.log(LOfArr);
        const updateFormula = place.map(record => {
            if(record.id === LOfArr){

                return {...record, PlaceID : ' '}
                
            }

            return record;
        });
        LOfArr--;
        setActPLace(updateFormula);
        console.log(LOfArr);
        amountOfFreePlaces++;
        console.log(amountOfFreePlaces);
        if(amountOfFreePlaces >= 2)
                {
                    console.log("We find 2 free places");
                }
    }
    
    
    return(
        <div>
            <button onClick={UpdateActualPlaces}>Update Record</button>
            <ul>
            {
                place.map((itm, index) => (
                    <li key={index}>
                        <p> Name : {itm.name}</p>
                        <p> PlaceID : {itm.PlaceID}</p>
                        <p> Wolne miejsca : {amountOfFreePlaces}</p>
                    </li>
                 
                ))
            }
            </ul>
            
        </div>
    )

    
}

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<ChangeTheOtherRecord />)
