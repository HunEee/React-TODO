import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}){

    //(1)함수를 정의해서 전달 -> 이 방식보다는 태그안에다가 () => incrementMethod(by) 를 사용
    // function incrementCounterFunction(){
    //     incrementMethod(by);
    // }

    // function decrementCounterFunction(){
    //      decrementMethod(by)
    //  }
    
    return(
        <div className="Counter">
            <div>
                 <button className="countButton" 
                         onClick={() => incrementMethod(by)}>+{by}</button>
                <button className="countButton" 
                        onClick={() => decrementMethod(by)}>-{by}</button>
            </div>
        </div>
    )
}

//prop 타입의 기본 타입을 결정
CounterButton.propTypes ={
    by: PropTypes.number
}

//prop 기본 값을 결정
CounterButton.defaultProps ={
    by: 1
}