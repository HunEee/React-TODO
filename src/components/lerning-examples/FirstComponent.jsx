export default function FirstComponent(){
    return(
      <div className="FirstComponent">First Component</div>
    )
  
  }

// default는 하나만 export 가능
// 임포트시 아래와 같이 임포트해야함 -> 중괄호를 쳐줘야 제대로 임포트
// import {FifthComponent} from './components/lerning-examples/FirstComponent'
export function FifthComponent(){
    return(
        <div className="FifthComponent">Fifth Component</div>
    )

}