import Hw from "./Hw";
import Matan from "./Matan";
import "./App.css"
import Targil from "./Targil";
import Targil2 from "./Targil2";
import Targil3 from "./Targil3";


const App = () => {
  const students=['Mushy', 'Platinum', 'Michelle']
  const colors=['blue','green','purple']

  return (
  <div> 
    {/* without map */}
    My stud list:
    {/* <Matan color="blue" studentsName={students[0]}></Matan>
    <Matan color="green" studentsName={students[1]}></Matan>
    <Matan color="purple" studentsName={students[2]}></Matan> */}


    {/* with map */}
    {students.filter(stuName => stuName.length < 7 ).map((stu,i)=><Matan key={stu} color={colors[i]} studentsName= {stu}></Matan>)}
    <Hw></Hw>
    <Targil/><br/><br/>
   <Targil2/><Targil3/>
    {/* {names.map((stu,i)=>
        <Targil key={stu} color={names[i]} studentsName= {stu}></Targil>)} */}

  </div>)
  
};

export default App;
