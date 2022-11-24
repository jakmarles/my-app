import mainPadding from "./shir";
import {mainStyle} from "./shir";
import './App.css'
const App = () => {
  return <div style={{...mainStyle,...mainPadding}}>Hello</div>;
};

export default App;
