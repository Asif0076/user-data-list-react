import { useState } from 'react';
import './App.css';

function App() {
const [inputDataList, setInputDataList ] = useState([]);
const [inputData, setInputData] = useState(
  {
    name: " ",
    age: " ",
    designation: " "
}
);


function handleChange(e) {
console.log(e.target.name,e.target.value);
setInputData({...inputData, [e.target.name]: e.target.value});
}

function addData() {
setInputDataList([...inputDataList, inputData ])
console.log([...inputDataList, inputData ]);
}


  return (
    <>  

        <h1>User Data</h1>
        <h2>Enter Your Data </h2>
        <div className='inputs'>
          <div className='head-input' >
           <h3>Name</h3>
            <input type="text" name='name' placeholder="Enter Your Name" onChange={handleChange} value={inputData.name} />
        </div>
        <div className='head-input'>
           <h3>Age</h3>
            <input type="text" name='age' placeholder="Enter Your Name" onChange={handleChange} value={inputData.age} />
        </div>
        <div className='head-input'>
           <h3>Designation</h3>
            <input type="text" name='designation' placeholder="Enter Your Name" onChange={handleChange} value={inputData.designation} />
        </div> 
        </div>
             <button className='btn-add' onClick={addData}>Add</button>
       
        <table>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>designation</td>
            <td>Remove</td>
          </tr>
        </table>
    </>
  );
}

export default App;
