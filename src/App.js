import './App.css';
import Counter from './components/counter/Counter';


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

// 프로퍼티 전달 방법 1
// {property1: 'value1', property2: 'value2'}
// function PlayingWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   console.log(properties.property2)
//   return(
//     <div>Props</div>
//   )
// }

// 프로퍼티 전달 방법 2
// function PlayingWithProps({property1,property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>Props</div>
//   )
// }


export default App;
