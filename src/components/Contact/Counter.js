import React, {useState} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
function Counter() {
    const [count, setCount] = useState(20);
    const increase = (e)=> {
        setCount(count+1)   
    }

    const decrease = (e)=> {
        setCount(count-1)   
    }

    return (
        <div className="counter">
          <Fab color="primary" aria-label="add" onClick={increase}>
            <AddIcon />
          </Fab>
          <h2> {count} </h2> 
          <Fab color="secondary" aria-label="add" onClick={decrease}>
            <RemoveIcon />
          </Fab>
        </div>
    )
}

export default Counter
