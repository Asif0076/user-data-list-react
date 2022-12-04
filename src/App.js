import { useState } from 'react';
import './App.css';

function App() {

const [inputData, setInputData] = useState("");


function handleChange() {

}


  return (
    <>
        <h1>User Data</h1>
        <div className='inputs'>
          <div className='head-input' >
           <h2>Name</h2>
            <input type="text" name='name' placeholder="Enter Your Name" onChange={handleChange} value={inputData} />
        </div>
        <div className='head-input'>
           <h2>Name</h2>
            <input type="text" name='name' placeholder="Enter Your Name" onChange={handleChange} value={inputData} />
        </div>
        <div className='head-input'>
           <h2>Name</h2>
            <input type="text" name='name' placeholder="Enter Your Name" onChange={handleChange} value={inputData} />
        </div> 
        </div>

    </>
  );
}

export default App;
