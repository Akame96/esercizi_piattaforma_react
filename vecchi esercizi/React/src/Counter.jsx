import { useState} from "react"

import classes from './Counter.module.scss'

 function useCounter({ initialValue = 0 }){
     const [counter, setCounter] = useState(initialValue)
     function handleCaunterIncrement(){
        setCounter((c) => c + 1)
       }
       function handleCaunterDecrement(){
       setCounter((c) => c - 1)
       }
       function handleCounterReset(){
       setCounter(initialValue)
       }

       return {
        counter: counter,
        onIncrement: handleCaunterIncrement,
        onDecrement: handleCaunterDecrement,
        onReset: handleCounterReset
       }


    }

    export function HookCounter({ initialValue = 0 }){
    const [counter, setCounter] = useState(initialValue)


    return (
    <div>
     <h2 className={counter % 2 === 0 ? classes.evenBg : classes.oddBg} > I have counted to {counter} </h2>
     <button className={classes.button} onClick = {handleCaunterIncrement}>Increment</button>
     <button className={classes.button} onClick = {handleCaunterDecrement}>Decrement</button>
     <button className={classes.button} onClick = {handleCounterReset}> Reset </button>
    </div>
    )
}

export default useCounter;
