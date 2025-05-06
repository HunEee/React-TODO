import FirstComponent from './FirstComponent'
import {FifthComponent} from './FirstComponent'
import TenthComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import LerningJavaScript from './LearningJavaScript'

export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent />
        <FifthComponent />
        <TenthComponent />
        <LerningJavaScript />
      </div>
    );
  }