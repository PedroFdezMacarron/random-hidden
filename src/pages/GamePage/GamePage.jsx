import { useState } from 'react';
import './GamePage.scss';




export default function GamePage({players}){ 
    
    
    const [value, setValue] = useState('');
    const [cardActual, setCont] = useState(0);
   
    let cards=[];

    players.forEach(player => {
        for (let index = 0; index < player.amount; index++) {                
            cards.push(player.title);       
        }            
    });

    // desordenamos el array de cartas para que sea aleatorio
    console.log(cards);
    let shuffledArray = [...cards];
    shuffledArray.sort((a, b) => 0.5 - Math.random());        
    console.log(shuffledArray);

    const getCard=(shuffledArray)=>{        
        if(cardActual<shuffledArray.length){            
            setValue(shuffledArray[cardActual]);
            console.log(shuffledArray[cardActual]);
            setCont(cardActual+1);
        }                     
    }

   // para empezar de nuevo inicializa el contador y el valor y vuelve a desordenar el array
    const reset=()=>{
        setCont(0);
        setValue('');
        shuffledArray.sort((a, b) => 0.5 - Math.random());   
    }

    return <div>
        <div className='card'>{value}</div>
        <div className='card'>{cardActual}</div>
        <button className="btn" onClick={()=>reset()} >reset</button>
        <button className="btn" onClick={()=>getCard(shuffledArray)} >show value</button>
    </div>
}

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }
  