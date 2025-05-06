import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){

    // [0,f] -> state 초기값과 함수를 가진 배열
    // 함수는 state를 업데이트 하기위한 함수
    // const [firstElt,secondElt] = array
    const [count, setcount] = useState(0)

    function incrementCounterParentFunction(by){  
        setcount(count+by)
    }

    function decrementCounterParentFunction(by){
        setcount(count-by)
    }

    function resetCounter(){
        setcount(0)
    }

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <button className="resetButton" 
                        onClick={resetCounter}>Reset</button>
        </>
    )
}

