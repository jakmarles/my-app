import Matan from "./Matan";


const App = () => {
  const students=['abc', 'def', 'ghi']
  const colors=['blue','green','purple']
  const ages=[21,4,12]
  return (
  <div> 
    {/* without map */}
    My stud list:
    <Matan color="blue" studentsName={students[0]}></Matan>
    <Matan color="green" studentsName={students[1]}></Matan>
    <Matan color="purple" studentsName={students[2]}></Matan>
    {/* with map */}
    {students.map((stu,i)=><Matan color={colors[i]} studentsName= {stu}></Matan>)}
  </div>)
  
};

export default App;
