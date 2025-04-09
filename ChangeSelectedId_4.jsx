import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

const textStyles = {
		
		paragraph : {
			  color : 'darkbrown',
			  fontStyle : 'regular',
			  fontSize: '15px',
			  fontWeight: '400',
			  margin : '0 auto',
			  fontFamily : 'Verdana',
		},
		
		info : {
			  color : 'darkbrown',
			  fontStyle : 'regular',
			  fontSize: '14px',
			  fontWeight: '400',
			  margin : '0 auto',
			  padding : '0 auto',
			  align: 'center',
			  fontFamily : 'Verdana',
			 
		},
		
		data : {
			fontWeight: '700',
			fontSize: '1.0em',
			color: 'turquoise',
		},
		
		clickMe : {
			  display: 'flex',
			  alignItems: 'center',
			  justifyContent: 'spaceBetween',
			  gap: '10px',
			  minHeight: '40px',
			  padding: '0 10px',
			  borderRadius: '4px',
			  zIndex:'1',
			  backgroundColor: '#242a35',
			  border: 'solid 1px #e8e8e8d',
			  transition: 'all 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
			  fontSize : '12px',
			  fontFamily : 'Verdana',
			  color : 'white'
			 
		}
}

let LOfArr = null;
let amountOfFreePlaces = 0;

const listsOfPassangersSits = [
    {id: 1,name: "Place1",PlaceID: 1915,},
    {id: 2,name: "Place2",PlaceID: 1920,},
    {id: 3,name: "Place3",PlaceID: 1925,},
    {id: 4,name: "Place4",PlaceID: 1930,},
];

LOfArr = listsOfPassangersSits.length;

function ChangeTheOtherRecord(){

    const [place, setActPLace] = useState(listsOfPassangersSits);
	const [information, setRightInformation] = useState('');
    
    function UpdateActualPlaces(position){
        
        const updateFormula = place.map(record => {
            if(record.id === LOfArr){

                return {...record, PlaceID : ' '}
            }

            return record;
        });
        LOfArr--;
        setActPLace(updateFormula);
        
        amountOfFreePlaces++;
        
        if(amountOfFreePlaces >= 2)
                {
					setRightInformation("We find 2 free places");
                }
    }
    
    
    return(
        <div>
            <button onClick={UpdateActualPlaces} style={textStyles.clickMe}>Update Record</button>
			
			<p style={textStyles.info}>{information}</p>
            <ul>
            {
                place.map((itm, index) => (
                    <li key={index} style={textStyles.data}>
                        <p> Name : {itm.name} PlaceID : {itm.PlaceID} Wolne miejsca : {amountOfFreePlaces}</p>
                        
                    </li>
                 
                ))
            }
            </ul>
            
        </div>
    )

    
}

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<ChangeTheOtherRecord />)
