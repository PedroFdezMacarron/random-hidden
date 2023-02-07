import './HomePage.scss'
import { useState } from 'react';
import GamePage from '../GamePage/GamePage';

export default function HomePage(){

    
    const [nombre, setNombre] = useState('');

    
    const [players, setPlayers] = useState([
        {title:'persona',amount:4,prob:0},
        {title:'turtle',amount:2,prob:0},
        
    ]);

    // le pasa el índice y las undiades que hay que sumar o restar
    const chgAmount=(index,units)=>{
        if(!(players[index].amount + 
            units<1)){
            let newPlayers=[...players];
        
            newPlayers[index].amount = newPlayers[index].amount + units ;
        
            setPlayers(newPlayers);      
            
        }
    }

    // le pasa el indice de lo que hay que eliminar del array
    const dltPlayer=(index,units)=>{
        let newPlayers=[...players];
        
        newPlayers.splice(index,1);
        
        setPlayers(newPlayers);      
    }
    const addPlayer=(index,units)=>{
        if(nombre){
            let newPlayers=[...players,{title:nombre,amount:1,prob:0 }];                       
            setPlayers(newPlayers);
            setNombre('');
        }
    }


    return (<div className='home'>
       
        <div className='players_list'>
                {players.map((item, index) => (
                <div className='players_list-item' key={index}>          
                    <div className='players_list-title'>{item.title}</div>
                    <button   className='forms__btn' onClick={()=>chgAmount(index,-1)}  >-</button>
                    <span className='players_list-amount'>{item.amount}</span>
                    <button className='forms__btn' onClick={()=>chgAmount(index,1)}  >+</button>
                    <button className='forms__btn' onClick={()=>dltPlayer(index)}  >X</button>
                </div>
                ))}
        </div>
        <div className='forms'>
            <input className='forms__name' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='add new value'/>
            <button className='forms__btn' onClick={()=>addPlayer()}  >Add new</button>
        </div>
        <div className='random__start'>
            <GamePage players={players} ></GamePage>
        </div>
    </div>
    )
}

