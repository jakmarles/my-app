import Hw from "./Hw";
import Matan from "./Matan";
import "./App.css"


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
  </div>)
  
};

export default App;
