import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    // steps and setSteps are called hook
    
    const increaseSteps = () => {
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }
    useEffect( () => {
       console.log(steps)
    }, [steps])
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
           <h2>THis is my smart Watch</h2> 
           <p style={{backgroundColor: 'red'}}>Steps: {steps}</p>
           <button style={{backgroundColor: 'aqua'}} onClick={increaseSteps}>Increase</button>
           <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;