import { useState } from 'react';
import './Chat2.css';

function Chat2(){
    const [size, setsize] = useState('small')

    function changeSize()
    {
        if(size === "small")
        {
            setsize('middle');
        }
        else if(size === 'middle')
        {
            setsize('large');
        }
        else if(size === 'large')
        {
            setsize('small');
        }
    }

    return(
        <div>
            <input type='button' value='Size' onClick={changeSize}/>
            <div className={'circle ' + size}/>
        </div>
    )
}

export default Chat2;