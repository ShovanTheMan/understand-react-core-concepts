import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '10px'}}>
            <p>This is Dial component</p>
            <p>Your steps count: {props.steps} </p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;