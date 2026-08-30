import React from 'react';
import { useState } from 'react';
function Events(){

        const clickme=()=>{
            alert("i was clicked");
        }

        const HandlerKeyDown=(event)=>{
                if(event.key==="Enter"){
                    alert("Enter key was pressed");}
                }
        const[isToggleOn,setIsToggle]=useState(true);
        const setIsToggleHandler=()=>{
            setIsToggle(!isToggleOn);
        }
        return(
            <div>
                <button onClick={clickme}>Click me</button>
                <input type="text" onKeyDown={HandlerKeyDown} />
                <p>The toggle is {isToggleOn ? 'ON' : 'OFF'}</p>
                <button onClick={setIsToggleHandler}>Stats</button>
            </div>    
        );}


export default Events;
